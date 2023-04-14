
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Text } from '@styles/components';
const Gnb = () => {
    return (
        <Wrapper>
            <NavContainer>
                <Link to = '/' style={{ textDecoration: "none", cursor: "pointer"}}>
                    <Text 
                        typo = 'G_Header_24_B'
                        color = 'main_500'
                    >홈</Text>
                </Link>
                <Link to = '/products' style={{ textDecoration: "none", cursor: "pointer"}}>
                    <Text 
                        typo = 'G_Header_24_B'
                        color = 'main_400'
                    >상품목록</Text></Link>
                <Link to = '/cart'  style={{ textDecoration: "none", cursor: "pointer"}}>
                    <Text 
                        typo = 'G_Header_24_B'
                        color = 'main_400'
                    >장바구니</Text></Link>
            </NavContainer>
        </Wrapper>
    );
};

export default Gnb;

const Wrapper = styled.div`
  position: relative;
  right: 0px;
  height: 3rem;
  margin-bottom : 20px;
`;
const NavContainer = styled.div`
    margin-top: 20px;
    position: relative;
    left: 5%;
    display: flex;
    flex-direction: row;
    gap: 15px;
`
