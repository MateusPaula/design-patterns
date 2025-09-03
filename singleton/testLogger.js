const Logger = require('./LoggerDefault');
const SingletonLogger = require('./LoggerSingleton');

const logger1 = new Logger();
const logger2 = new Logger();
const logger3 = new Logger();

logger1.log('teste 1');
logger2.log('teste 2');
logger3.log('teste 3');

logger1.print();
logger2.print();
logger3.print();

// ------------------------------------------------------------------------------------------------

const singletonLogger1 = new SingletonLogger();
const singletonLogger2 = new SingletonLogger();
const singletonLogger3 = new SingletonLogger();

singletonLogger1.log('teste 1');
singletonLogger2.log('teste 2');
singletonLogger3.log('teste 3');

singletonLogger1.print();
singletonLogger2.print();
singletonLogger3.print();
