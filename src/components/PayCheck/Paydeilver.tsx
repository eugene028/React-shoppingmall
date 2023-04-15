import styled from "@emotion/styled";
import { theme } from "@styles/theme";
import { Text } from "@styles/components";

const Paydeilver = ({title, amount} : {
    title:string;
    amount: number;
}) => {
    return (
        <DeilverContainer>
            <Text className = 'product'typo = 'Text_14_SB'>
                {title}
            </Text>
            <Text className = 'amount' typo = 'Text_12_SB' color ='gray_400'>
                수량 {amount}개 / 무료배송
            </Text>
        </DeilverContainer>
    );
};

export default Paydeilver;

const DeilverContainer = styled.div`
    padding : 15px;
    display: flex;
    flex-direction: row;
    border-top: 2px solid ${theme.palette.main_200};
    .product{
        flex: 4 1 0;
    }
    .amount{
        flex: 1 1 0;
    }
`
