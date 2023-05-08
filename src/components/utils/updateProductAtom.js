import {atom} from 'recoil';

const name = atom({
    key: 'name',
    default:'',
})
const price = atom({
    key: 'price',
    default:'',
})
const description = atom({
    key: 'description',
    default:'',
})
const picture = atom({
    key: 'picture',
    default:'',
})
const productid = atom({
    key: 'productid',
    default:'',
})

export {name, price, description, picture, productid}