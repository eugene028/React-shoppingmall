import { useQuery } from 'react-query';
import { fetcher, QueryKeys } from '../../queryClient';
import { Product } from '../../types';

const ProductPage = () => {
    const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
        method: 'GET',
        path: '/products'
    }))
    console.log(data);
    return (
        <div>
            <ul>
                {data?.map(product => (
                    <ProductItem {...product} key={product.id}/>
                ))}
            </ul>
        </div>
    )
}
/*
category
description
id
image
price
rating
title
*/

export default ProductPage