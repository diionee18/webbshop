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
const selectedProductsState = atom({
    key: 'selectedProducts',
    default: [],
  });
const searchState = atom({
    key: 'searchState',
    default: false,
  });
const isSearched = atom({
    key: 'isSearched',
    default: false,
  });
const cartState = atom({
    key: 'cartState',
    default: [],
  });
const productdetails = atom({
    key: 'productdetails',
    default: [
        {
            name: "" ,
            price: null,
            description: "",
            picture: "",
        }
    ],
  });

export {products, users, logdin, clicked, idValue, selectedProductsState, searchState, isSearched, cartState, productdetails} 