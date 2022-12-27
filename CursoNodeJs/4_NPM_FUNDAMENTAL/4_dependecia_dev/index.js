const _ = require('lodash')
const chalk = require('chalk')

const a = [1, 2, 3, 4]
const b = [2, 4, 6, 7]

const diff = _.difference(a,b)

console.log(chalk.bgRed.bold(diff)) 