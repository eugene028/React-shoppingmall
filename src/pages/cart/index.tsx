import React from 'react';
import { useQuery } from 'react-query';
import { graphqlFetcher, QueryKeys } from '../../libs/apis/products/queryClientApi'
import { GET_CART } from '../../graphql/cart';
import { TCart } from '../../graphql/cart';
import CartList from '../../components/Cart/CartList'
import EmptyCart from '@components/Cart/EmptyCart';

const Cart = () => {
    const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART), {
        staleTime: 0,
        cacheTime: 1000,
        //얘만 쿼리따로 설정. 왜냐면 장바구니 담아두고 장바구니가 바뀌지가 않음..ㅠㅠ 
    });
    const cartItems = Object.values(data || {}) as TCart[]
    if(!cartItems.length) return <EmptyCart/>
    return (
        <>
            <CartList items = {cartItems} />
        </>
    );
};

export default Cart;