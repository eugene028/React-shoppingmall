
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
const Gnb = () => {
    return (
        <Wrapper>
            <ul>
                <li><Link to = '/'>홈</Link></li>
                <li><Link to = '/products'>상품목록</Link></li>
                <li><Link to = '/cart'>장바구니</Link></li>
            </ul>
        </Wrapper>
    );
};

export default Gnb;

const Wrapper = styled.div`
  position: relative;
`;