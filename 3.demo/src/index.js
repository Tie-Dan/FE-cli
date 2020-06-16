import module from './module1'
import {
    fn1,
    fn2
} from './module2'

console.log(module)
fn1()
fn2()

import {
    version
} from '../package.json'
console.log(version)