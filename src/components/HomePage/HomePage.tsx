
import { Text } from '@styles/components';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { useNavigate } from 'react-router';


const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <MainContainer>
                <GradientBox>
                    <Text typo = 'G_Header_28_B' className='welcome' color= 'black'>유진몰에 오신 것을 환영합니다!</Text>
                    <Text typo = 'G_Header_20_B' className = 'des' color = 'black'>다양한 상품들을 구경하고 구매해보세요 😊</Text>
                    <ButtonContainer>
                        <GoButton onClick = {()=>{navigate('/products');}}><Text typo = 'Text_16_SB' color ='black'>상품 구경하기</Text></GoButton>
                        <GoButton onClick = { () => {navigate('/cart')}}><Text typo = 'Text_16_SB' color ='black'>장바구니 바로가기</Text></GoButton>
                    </ButtonContainer>
                </GradientBox>
                <img className = "mainImg" src = "assets/img/main.jpg"/>
            </MainContainer>
            
        </>
    );
};

export default HomePage;

const ButtonContainer =styled.div`
    display:flex;
    flex-direction: row;
    gap: 40px;
    margin:40px;
`

const GoButton = styled.button`
    background: ${theme.palette.main_300};
    border-radius: 12px;
    width: 150px;
    height: 50px;
`

const MainContainer = styled.div`
    display:flex;
    position:relative;
    @keyframes fadeIn {
        from {
        opacity: 0.2;
        }
        to {
        opacity: 0.5;
        }
    }
    .mainImg{
        width:100%;
        height: 100%;
        object-fit: cover;
        animation: 2s forwards fadeIn ease-out infinite alternate;
    }
`

const GradientBox = styled.div`
    position: absolute;
    top:0px;
    left:0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(to top, transparent, 60%, #ffffff);
    width: 100%;
    height: 50%;
    z-index:100;
    .welcome{
        margin:40px;
    }
    .des{
        margin-left: 40px;
    }

`