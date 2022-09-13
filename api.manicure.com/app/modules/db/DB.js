class DB {

    constructor(mysqlConfig) {
        if (!mysqlConfig)
            throw "Can't open MySQL config";

        this.config = null;
        this.mysql = null;
        this.connection = null;

        this.mysql = require('mysql');
        
        this.connection = mysql.createConnection({
            host: this.config.host,
            user: this.config.user,
            password: this.config.password,
            database: this.config.database,
            charset: this.config.charset
        });

        this.connection.connect(function (err) {
            if (err)
                throw err;
        });
        
    }

    escape(value) {
        return this.connection.escape(value);
    }

    /**
     * MySql Select()
     * @param {String} table 
     * @param {String} fields 
     * @param {String} where 
     * @param {Array} data 
     */
    select(table, fields, where, data) {
        this.query(`SELECT ${fields} FROM ${table} WHERE ${where};`,
            data,
            (err, result) => {
                if (err)
                    throw err;
                return results;
            });
    }

    /**
     * MySql Insert()
     * @param {String} table 
     * @param {Objects} dataAndFields 
     * @param {String} fields 
     */
    insert(table, dataAndFields, fields) {
        
        fields = this.valuesAndFieldsFormater(dataAndFields, fields, (key, value) => {
            return `${key}`;
        });

        dataAndFields = this.valuesAndFieldsFormater(dataAndFields, fields, (key, value) => {
            return `${value}`;
        });

        this.query(`INSERT INTO ${table} (${fields}) VALUES (${dataAndFields})`,
            (err, result) => {
                if (err)
                    throw err;
                return results.insertId;
            });
    }

    /**
     * MySql Update()
     * @param {String} table 
     * @param {Objects} dataAndFields 
     * @param {String} fields 
     * @param {String} where 
     * @param {Array} data 
     */
    update(table, dataAndFields, fields, where, data) {

        fields = this.valuesAndFieldsFormater(dataAndFields, fields, (key, value) => {
            return `${key}=${value},`;
        });

        db.query(`UPDATE ${table} SET ${fieldsStr} WHERE '${where}'`,
            data,
            (err, result) => {
                if (err)
                    throw err;
                return results.affectedRows;
            });
    }


    valuesAndFieldsFormater(dataAndFields, fields, formatCall) {
        if (!fields)
            fields = false;

        let fieldsArr = !fields ? [] : fields.split(",");
        let fieldsStr = "";

        for (const [key, value] of Object.entries(dataAndFields))
            if (fields === false || fieldsArr.includes(key))
                fieldsStr += formatCall(key, value) + ",";

        if (fieldsStr[fieldsStr.length - 1] == ',')
            fieldsStr = fieldsStr.substring(0, fieldsStr.length - 1);

        return fieldsStr;
    }

    query(qr, data, call) {
        return this.connection.query(qr, data, call);
    }

    
}

module.exports = DB;