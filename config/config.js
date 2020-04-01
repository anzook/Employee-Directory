
const config = {
  'development': {
    'username': process.env.DB_USER || "root",
    'password': process.env.MYSQL_ROOT_PASS || "root",
    'database': 'employeeDir_db',
    'host': '127.0.0.1',
    'dialect': 'mysql',
    'operatorsAliases': false,
    // 'use_env_variable': 'JAWSDB_URL',
  },
  'test': {
    'username': 'root',
    'password': 'root',
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'mysql',
    'operatorsAliases': false,
  },
  'production': {
    'use_env_variable': 'JAWSDB_URL',
    'dialect': 'mysql'
  },
};

module.exports = config;
