import { gql } from 'graphql-tag';

export type Product = {
    id: string;
    imageUrl: string;
    price: number;
    title: string;
    description: string;
    createdAt: string;
    rate: number;
}

export type Products = {
    products: Product[];
}

const GET_PRODUCTS = gql`
    query GET_PRODUCTS {
        id
        imageUrl
        price
        title
        description
        createdAt
        rate
    }
`;

export default GET_PRODUCTS;