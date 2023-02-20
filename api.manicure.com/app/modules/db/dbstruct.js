module.exports = {
    "Users":
        `uID int (11) auto_increment,
        uLogin varchar(40) default '',
        uPass varchar(32) default '',
        uPass2 varchar(32) default '',
        uPhone varchar(32) default '',
        uState int(1) default 0,
        uAccess int(2) default 0,
        uLang varchar(10) default 'ru',
        uRef int(10) default 0,
        uLTS bigint(14),
        uLIP varchar(15),
        uLSess varchar(32),
        uSuperUsr int(1) default 0,
        PRIMARY KEY(uID),
        UNIQUE KEY ULOGIN(uLogin),
        KEY UREF(uRef),
        KEY ULTS(uLTS)`,
}

