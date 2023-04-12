import { useQuery } from 'react-query';
import { fetcher, QueryKeys } from '@libs/apis/products/queryClientApi'
import { Product } from '@libs/apis/products/apiTypes'
import ProductItems from '@components/productList/ProductList';
import styled from '@emotion/styled';
import { media } from '@styles/theme';
import { Text } from '@styles/components';
import { Padding } from '@styles/layout';
const ProductPage = () => {
    const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
        method: 'GET',
        path: '/products'
    }))
    return (
        <div>
          <Padding size = {[60, 20]}>
            <Text typo = 'G_Header_28_B' color = "black">오늘의 추천 상품</Text>
          </Padding>
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
  margin: 10px auto 0 auto;
  max-width: 936px;

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;