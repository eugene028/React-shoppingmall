import styled from "@emotion/styled";
import { theme } from "@styles/theme";

const PayInfo = () => {
    return (
            <InfoContainer>
                <FlexContainer className ="topHead">
                    <div className ='head'>이름</div>
                    <div className = 'info'>커비</div>
                </FlexContainer>
                <FlexContainer>
                    <div className ='head'>이메일</div>
                    <div className = 'info'> star_Kirby@kirby.com</div>
                </FlexContainer>
                <FlexContainer>
                    <div  className ='head'>휴대폰 번호</div>
                    <div className = 'info'>010-xxxx-xxxx</div>
                </FlexContainer>
                <FlexContainer>
                    <div className ='head'>배송지 주소</div>
                    <div className = 'info'>푸푸푸랜드</div>
                </FlexContainer>
            </InfoContainer>
    );
};

export default PayInfo;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin : 20px;
    .topHead{
        border-top: 2px solid ${theme.palette.main_200};
    }
`

const FlexContainer =  styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid ${theme.palette.main_200};
    .head{
        background: ${theme.palette.main_100};
        flex: 1 1 0;
        text-align: right;
        padding: 10px;
        padding-right: 15px;
        
    }
    .info{
        padding: 10px;
        flex: 2 1 0;
        padding-left: 15px;
    }
`
