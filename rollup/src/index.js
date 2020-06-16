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
} from '../package.json';
console.log('version ' + version);

export default {
    name: '小明',
    age: 29
}


export const fn1 = () => {
    console.log('fn1')
}
export const fn2 = () => {
    console.log('fn2')
}