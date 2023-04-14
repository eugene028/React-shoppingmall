import { useRecoilValue } from "recoil";
import { checkedCartState } from "../../store/cart";
import SelectedData from "./SelectedData";
import { theme } from "@styles/theme";
import styled from "@emotion/styled";
import { media } from "@styles/theme";
import { Text } from '@styles/components';
import { Padding } from "@styles/layout";

const PayAmount = () => {
    const checkedItems = useRecoilValue(checkedCartState);
    const totalPrice = checkedItems.reduce((res, {price, amount}) => {
        res += price * amount;
        return res;
    }, 0) 
    return (
        <div>
            {/* {checkedItems.map(({ imageUrl, price, title, id, amount }) => (
                <>
                    <SelectedData amount = {amount} imageUrl={imageUrl} price = {price} title= {title} key= {id}/>
                    <p>수량 : {amount}</p>
                    <p>금액 : {price * amount}</p>
                </>
            ))} */}
            <PayContainer>
                <Text typo="Text_16_SB" color ="black">
                    총예상결제액 : 
                </Text>
                    <Text typo ="G_Header_24_B" color ="red_300">
                        {totalPrice}
                    </Text>
            </PayContainer>
        </div>
    );
};

export default PayAmount;

const PayContainer = styled.div`
    display:flex;
    justify-content: center;
    border : solid 5px ${theme.palette.main_200};
    padding: 30px;
    margin : 60px;
    gap: 20px;
    ${media.mobile} {
        padding: 30px;
    }
    margin-top: 20px;
    border-radius: 10px;
`