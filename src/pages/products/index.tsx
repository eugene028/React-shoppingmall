import { useQuery } from 'react-query';
import { graphqlFetcher, QueryKeys } from '@libs/apis/products/queryClientApi'
import ProductItems from '@components/productList/ProductItems';
import styled from '@emotion/styled';
import { media } from '@styles/theme';
import { Text } from '@styles/components';
import { Padding } from '@styles/layout';
import GET_PRODUCTS, { Products } from '../../graphql/products'
const ProductPage = () => {
  // const { data } = useQuery<Products | unknown>(QueryKeys.PRODUCTS, () =>
  //   graphqlFetcher(GET_PRODUCTS));  

  const { data } = useQuery<Products>(QueryKeys.PRODUCTS, () =>
    graphqlFetcher<Products>(GET_PRODUCTS)
  )

    return (
          <ProductContainer>
            <HeaderContainer>
              <Text typo = 'G_Header_28_B' color = "black" 
                className = "productTitle"
              >오늘의 추천 상품</Text>
            </HeaderContainer>
            <ProductList>
                  {data?.products?.map(product => (
                      <ProductItems {...product} key={product.id}/>
                  ))}
            </ProductList>
          </ProductContainer>
    )
}
export default ProductPage;
const HeaderContainer = styled.div`
  text-align: center;

`

const ProductContainer = styled.div`
  .productTitle{
    margin: auto 0;
    /* position: relative;
    left: 10%; */
    ${media.mobile} {
    left: 3%;
  }
  }
`

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px 40px;
  ${media.mobile} {
    grid-gap: 32px 32px;
  }
  margin: 40px auto 0 auto;
  max-width: 936px;

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;