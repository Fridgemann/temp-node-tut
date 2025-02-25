// modules

const names = require('./4-first_module');
const funcs = require('./5-utils');
const data = require('./6-alternative-syntax');


require('./7-mind-grenade');
funcs.sayHi(names.john);
funcs.sayHi('susan')
funcs.sayHi(data.singlePerson.name);
