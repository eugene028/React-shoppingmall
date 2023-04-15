import { Product } from "src/graphql/products";
import styled from "@emotion/styled";
import { media, theme } from "@styles/theme";
import StarRate from "@components/productList/StarRate";
import { Text } from "@styles/components";
import { useState } from "react";
import { useMutation } from 'react-query';
import { ADD_CART } from "../../graphql/cart"
import CartModal from "@components/Cart/CartModal";
import { graphqlFetcher } from "@libs/apis/products/queryClientApi";

const ProductItem = (props: Product) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { mutate : addCart } = useMutation((id : string) => graphqlFetcher(ADD_CART, { id }));
    const openModal = () => {
        setModalOpen(true);
    }
    const addCartProduct = () => {
        addCart(props.id);
        setModalOpen(false);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    let month = props.createdAt.split(' ')[1];
    const monthToNum = {Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12};
    let monthnum = monthToNum[month];
    const date = props.createdAt.split(' ')[2];
    
    return (
            <ProductContainer>
                <img src={props.imageUrl} alt="productImg"/>
                <InfoWrapper>
                    <HeadWrapper>
                        <Text typo = 'Header_24'>{props.title}</Text>
                        <StarRate ratingnum = {props.rate}/>
                    </HeadWrapper>
                    <HeadWrapper className = 'sub'>
                        <Text typo = 'G_Header_28_B' color ='red_200'>{props.price}원</Text>
                        <Text typo = 'Text_14_SB' color = 'sub_300'>30% 할인 중입니다!</Text>
                    </HeadWrapper>
                    <HeadWrapper  className = 'sub'>
                        <Text typo = 'Text_14_SB' color = 'black'>무료배송</Text>
                        <Text typo = 'Text_14_SB' color = 'black'>{monthnum}/{date}까지 배송 예정</Text>
                        <Text typo = 'Text_14' color = 'gray_500'>모델/품번 : {props.id}</Text>
                    </HeadWrapper>
                    <Buttoncontainer>
                        <CartButton  onClick = {openModal}><Text typo = 'Text_18' color = 'black'>장바구니에 담기</Text></CartButton>
                        <PayButton onClick = {() => {alert("결제가 완료되었습니다!")}}><Text typo = 'Text_18' color = 'black'>바로 결제하기</Text></PayButton>
                    </Buttoncontainer>
                </InfoWrapper>
                <CartModal show = {modalOpen} proceed = {addCartProduct} cancel = {closeModal}/>
            </ProductContainer> 
    );
};

export default ProductItem;

const ProductContainer = styled.div`
    padding-top: 100px;
    justify-content: center;
    gap: 3rem;
    /* margin: 0px 200px; */
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    img{
        width: 500px;
        object-fit:cover;
    }
    ${media.mobile} {
        margin: 0px 70px;
        img{
            width: 200px;
            object-fit:cover;
        }
        gap: 2rem;
    }
    .sub{
        border-bottom: 1px solid ${theme.palette.main_300};
    }
`
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const HeadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;;
    padding : 10px;
    gap: 5px;
    border-bottom: 2px solid ${theme.palette.main_300};
    
    ${media.mobile} {
        width:200px;
    }
`

const CartButton = styled.button`
    width: 180px;
    height: 70px;
    text-align:center;
    background: ${theme.palette.main_300};
    border-radius: 12px;
`

const Buttoncontainer = styled.div`
    display:flex;
    flex-direction: row;
    padding-top: 10px;
    justify-content: center;
    align-items: center;
    gap:40px;
`

const PayButton = styled.button`
    width: 180px;
    height: 70px;
    text-align:center;
    background: ${theme.palette.main_100};
    border-radius: 12px;
    border: 2px solid ${theme.palette.main_300};
`