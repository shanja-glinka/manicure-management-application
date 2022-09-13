const DB = require("./DB");

class DBUpdate extends DB {
    constructor(mysqlConfig) {
        this.dbstruct = require("./dbstruct");
        if (!this.dbstruct)
            throw "Database structure required";

        super(mysqlConfig);
    }

    call() {
        this.query(`ALTER DATABASE ${this.config.database} DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci"`);
        
        let tables = this.query(`SHOW TABLES`);
        this.query(`SELECT concat('DROP TABLE IF EXISTS ``;')
        FROM information_schema.tables
        WHERE table_schema = 'MyDatabaseName';`)
        // if (tables.length > 0)
        //     tables.forEach(tb => {
        //         this.query('DROP TABLE IF EXISTS ')
        //     });
    }
}

module.exports = DBUpdate;