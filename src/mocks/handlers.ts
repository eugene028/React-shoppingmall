import { graphql } from 'msw';

import { v4 as uuid} from 'uuid';
import GET_PRODUCTS from '../graphql/products'


const mock_products = Array.from( {length: 20}).map((_, i) => ({
    id: uuid(),
    imageUrl: `https://placeimg.com/640/480/${i+1}`,
    price: Math.floor(Math.random() * (50000 - 2000) + 1),
    title: `임시상품${i + 1}`,
    description: `임시상세내용${i + 1}`,
    createdAt: new Date(1651225354270+ (i * 1000 * 60 * 60 * 10)).toString(),
    rate: Math.floor(Math.random() * (5 - 0) + 1),
}));

export const handlers = [
    graphql.query(GET_PRODUCTS, (req, res, ctx) => {
        return res(
            ctx.data({
                products: mock_products,
            })
        )
    }),
  ]
  
  