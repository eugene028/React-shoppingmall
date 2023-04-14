import { useRecoilValue } from "recoil";
import { checkedCartState } from "../../store/cart";
import SelectedData from "../Cart/SelectedData";
import { theme, media } from "@styles/theme";
import styled from "@emotion/styled";
import { Text } from '@styles/components';
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SyntheticEvent } from "react";

const PayAmount = ({
    handleSubmit,
    submitTitle
}:{
    submitTitle: string;
    handleSubmit: (e: SyntheticEvent) => void;
}) => {
    const navigate = useNavigate();
    const checkedItems = useRecoilValue(checkedCartState);
    console.log(checkedItems);
    const totalPrice = checkedItems.reduce((res, {price, amount}) => {
        res += price * amount;
        return res;
    }, 0);

    return (
        <PayContainer>
            {/* {checkedItems.map(({ imageUrl, price, title, id, amount }) => (
                <>
                    <SelectedData amount = {amount} imageUrl={imageUrl} price = {price} title= {title} key= {id}/>
                    <p>수량 : {amount}</p>
                    <p>금액 : {price * amount}</p>
                </>
            ))} */}
            <PayWrapper>
                <Text typo="Text_16_SB" color ="black">
                    총 주문 가격 : 
                </Text>
                    <Text typo ="G_Header_24_B" color ="red_300">
                        {totalPrice}원
                </Text>
            </PayWrapper>
            <PayButton onClick ={handleSubmit} >
                <Text typo = "G_Header_24_B" color ="white">
                    {submitTitle}
                </Text>
            </PayButton>
           
        </PayContainer>
    );
};

export default PayAmount;

const PayButton = styled.button`
    background: ${theme.palette.main_400};
    width: 30%;
    height: 60px; 
    border-radius: 12px;
`
const PayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PayWrapper = styled.div`
    display:flex;
    width : 60%;
    justify-content: center;
    border : solid 5px ${theme.palette.main_200};
    padding: 30px;
    margin : 40px;
    gap: 20px;
    ${media.mobile} {
        padding: 30px;
    }
    margin-top: 20px;
    border-radius: 10px;
`