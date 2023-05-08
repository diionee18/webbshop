import {atom} from 'recoil';

const products = atom({
    key: 'products',
    default:[],
})
const users = atom({
    key: 'users',
    default:[],
})
const logdin = atom({
    key: 'logdin',
    default:true,
})

export {products, users, logdin} 