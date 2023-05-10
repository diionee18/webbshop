import {atom} from 'recoil';

const products = atom({
    key: 'products',
    default:[],
})
const users = atom({
    key: 'users',
    default:[],
})
const clicked = atom({
    key: 'clicked',
    default:false,
})
const logdin = atom({
    key: 'logdin',
    default:false,
})
const idValue = atom({
    key: 'idValue',
    default:'',
})

export {products, users, logdin, clicked, idValue} 