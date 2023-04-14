import React from 'react';
import { TCart } from '../../graphql/cart'
import styled from '@emotion/styled';
import { Text } from '@styles/components';
import { media } from '@styles/theme';

const SelectedData = ({imageUrl, price, title, amount } : Pick<TCart, 'imageUrl' | 'price' |'title' | 'amount'>) => {
    return (
        <ItemContainer>
            <ItemImg>
                <img className = "cart-item__image" src = {imageUrl}/>
            </ItemImg>
            <TextContainer>
                <Text typo = "Text_16_SB" color = "black" 
                    className = "cart-item__title">{title}</Text>
                <Text typo = "Text_14" color = "gray_400">
                    {price * amount}원
                </Text>
            </TextContainer>
            
        </ItemContainer>
    );
};

export default SelectedData;

const ItemContainer = styled.div`
    display: flex;
    ${media.mobile} {
    min-width:60%;
  }
  flex: 2 1 0;
`

const ItemImg = styled.div`
    overflow: hidden;
    max-width: 100px;
    min-width:80px;
    max-height: 100px;
    flex: 1 0 0;
    img {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
        object-fit: cover;
    }
    border-radius: 4px;
`

const TextContainer = styled.div`
    flex: 2 0 0;
    display: flex;
    flex-direction: column;
    margin: 10px 50px;
    gap: 20px;
`;