import { Product } from '@libs/apis/products/apiTypes'
import styled from '@emotion/styled';
import { media } from '@styles/theme';
import { Text } from '@styles/components/Text';
import { css } from '@emotion/react';
import { Tag } from '@styles/components/Tag';
const ProductItems= (props: Product) => (
    <ProductList>
            <ProductImg>
              <p>ddd</p>
              <img src = {props.image}/>
              <Tag size="md" color="main" text={props.category} className="tag"/>

            </ProductImg>
            <Text typo="Text_14_SB"
              color="gray_400"
              as="p"
              >{props.title}
            </Text>
            <Text
              typo="Header_24"
              color="black"
              as="p"
            >
              {props.price}
            </Text>
            <Text
              typo="Header_20"
              color="main_400"
              as="p"
            >{props.rating.rate}</Text>
    </ProductList>
);
export default ProductItems;


const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 80px 40px;
  ${media.mobile} {
    grid-gap: 32px 32px;
  }
  margin: 145px auto 0 auto;
  max-width: 936px;

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductImg = styled.div`
  position: relative;
  padding-top: 141.4%;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 80%;
    background: ${({ theme }) => theme.palette.gray_300};
    margin-bottom: 10px;
    object-fit: cover;
  }
  box-shadow: 0px 0px 10px 7px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
`;