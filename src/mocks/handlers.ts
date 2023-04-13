import { graphql } from 'msw';
import { GET_CART, ADD_CART, TCart, UPDATE_CART } from '../graphql/cart'
import GET_PRODUCTS, { GET_PRODUCT} from '../graphql/products'

//즉시실행함수로 변경
const mockProducts = (() => Array.from( {length: 20}).map((_, i) => ({
    id: i + 1 + '',
    imageUrl: `https://placeimg.com/640/480/${i+1}`,
    price: Math.floor(Math.random() * (50000 - 2000) + 1),
    title: `임시상품${i + 1}`,
    description: `임시상세내용${i + 1}`,
    createdAt: new Date(1651225354270+ (i * 1000 * 60 * 60 * 10)).toString(),
    rate: Math.floor(Math.random() * (5 - 0) + 1),
}))
)();

let cartData: {[key: string]: TCart} = (() => ({}))();

export const handlers = [
    graphql.query(GET_PRODUCTS, (req, res, ctx) => {
        return res(
            ctx.data({
                products: mockProducts,
            })
        )
    }),
    graphql.query(GET_PRODUCT, (req, res, ctx) => {
        const found = mockProducts.find(item => item.id === req.variables.id);
        if (found) return res(ctx.data(found));
        return res();
    }),
    graphql.query(GET_CART, (req, res, ctx) => {
        return res(ctx.data(cartData))
    }),
    graphql.mutation(ADD_CART, (req, res, ctx) => {
        const newData = {...cartData}
        const id = req.variables.id;
        const targetProduct = mockProducts.find(item => item.id === req.variables.id);

        if(!targetProduct) { throw new Error('상품이 없습니다.')}

        const newItem = {
            ...targetProduct,
            amount: (newData[id]?.amount || 0 ) + 1,
        }
        newData[id] = newItem;

        cartData = newData;
        return res(ctx.data(newItem)); //추가된 아이템 하나에 대해서만 대응
    }),
    graphql.mutation(UPDATE_CART, (req, res, ctx) => {
        const newData = {...cartData}
        const {id, amount} = req.variables;
        if(!newData[id]){
            throw new Error('없는 데이터입니다.')      
        } 
        const newItem = {
            ...newData[id],
            amount,
        }
        newData[id] = newItem;
        cartData = newData;
        return res(ctx.data(newItem));
    })
  ]
  
  