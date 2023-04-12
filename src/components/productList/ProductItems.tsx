import { Product } from 'src/graphql/products';
import styled from '@emotion/styled';
import { Text, Tag, ProductItem } from '@styles/components';
import { useState } from 'react';
import { TagColorKey } from '@styles/components';
import StarRate from './StarRate';
import { Link } from 'react-router-dom';

const ProductItems= (props: Product) => {
  return (
    <Link to = {`/products/${props.id}`}>
      <ProductItem>
          <ProductImg>
            <img src = {props.imageUrl}/>
          </ProductImg>
          <Text typo="Text_14_SB"
            color="gray_400"
          >{props.title}</Text>
          <Text
            typo="Header_24"
            color="black"
          >$ {props.price}</Text>
          <StarRate ratingnum = {props.rate}/>
        </ProductItem>
      </Link>
  )
};
export default ProductItems;


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
  .tag {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;