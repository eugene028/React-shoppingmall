import { Text } from "@styles/components";
import styled from "@emotion/styled";
const EmptyCart = () => {
    return (
        <EmptyContainer>
            <img className = "mainImg" src = "assets/img/emptyCart.png"/>
            <Text typo= "G_Header_28_B">장바구니가 비어있어요!</Text>
        </EmptyContainer>
    );
};

export default EmptyCart;

const EmptyContainer = styled.div`
    width:100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    img{
        width: 200px;
    }
`