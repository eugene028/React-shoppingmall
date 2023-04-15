import PayAmount from '@components/PayCheck/PayAmount';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { checkedCartState } from '../../store/cart';
import PaymentModal from './PaymentModal';
import { graphqlFetcher } from '@libs/apis/products/queryClientApi';
import { useMutation } from 'react-query';
import { EXECUTE_PAY } from '../../graphql/payment';
import { useRecoilValue } from 'recoil';
import { Text } from '@styles/components';
import PayInfo from '@components/PayCheck/PayInfo';
import { theme, media } from '../../styles/theme/theme';
import Paydeilver from '@components/PayCheck/Paydeilver';
type PaymentInfos = string[]

const Payment = () => {
    const navigate = useNavigate();
    const checkedItems = useRecoilValue(checkedCartState);
    const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState);
    const [modalShown, toggleModal] = useState(false);
    const { mutate: executePay } = useMutation((payInfos: PaymentInfos) =>
        graphqlFetcher(EXECUTE_PAY, payInfos),
    )
    const showModal  = () => {
        toggleModal(true);
    }
    const proceed = () => {
        const ids = checkedCartData.map(({ id }) => id)
    executePay(ids, {
      onSuccess: () => {
        setCheckedCartData([])
        alert('결제가 완료되었습니다.😊')
        navigate('/products', { replace: true })
      },
    })
    }
    const cancel = () => {
        toggleModal(false);
    }
    return (
        <div>
            <PayContainer>
                <Text typo='G_Header_24_B'>구매자 정보</Text>
                <PayInfo/>
                <Text typo='G_Header_24_B'>배송 1건 중</Text>
                <DeilverInfoContainer>
                    <div className = 'InfoHead'>
                        <Text typo = 'Header_20'>내일 도착 예정</Text>
                    </div>
            
                    {checkedItems.map(({ title, id, amount }) => (
                        <Paydeilver key = {id} title={title} amount = {amount}/>
                    ))} 
                
                </DeilverInfoContainer>
            </PayContainer>
            <PayAmount handleSubmit = {showModal} submitTitle ="결제하기"/>
            <PaymentModal show = {modalShown} proceed = {proceed} cancel = {cancel}/>
        </div>
    );
};

export default Payment;

const DeilverInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    border-radius:12px;
    border: 3px solid ${theme.palette.main_300};
    .InfoHead{
        padding : 15px;
        background: ${theme.palette.main_100};
        border-radius:12px;
    }
`

const PayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 150px;
`
