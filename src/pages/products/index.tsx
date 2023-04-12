import { useQuery } from 'react-query';
import { fetcher, QueryKeys } from '@libs/apis/products/queryClientApi'
import { Product } from '@libs/apis/products/apiTypes'
import ProductItems from '@components/productList/ProductList';
import styled from '@emotion/styled';
import { media } from '@styles/theme';
const ProductPage = () => {
    const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
        method: 'GET',
        path: '/products'
    }))
    console.log(data);
    return (
        <div>
            <ProductList>
                {data?.map(product => (
                    <ProductItems {...product} key={product.id}/>
                ))}
            </ProductList>
        </div>
    )
}
export default ProductPage;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px 40px;
  ${media.mobile} {
    grid-gap: 32px 32px;
  }
  margin: 145px auto 0 auto;
  max-width: 936px;

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;