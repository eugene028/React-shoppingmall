import PayAmount from '@components/PayCheck/PayAmount';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { checkedCartState } from '../../store/cart';
import PaymentModal from './PaymentModal';
import { graphqlFetcher } from '@libs/apis/products/queryClientApi';
import { useMutation } from 'react-query';
import { EXECUTE_PAY } from 'src/graphql/payment';

type PaymentInfos = string[]

const Payment = () => {
    const navigate = useNavigate();
    const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState);
    const [modalShown, toggleModal] = useState(false);
    const { mutate: executePay } = useMutation((ids: PaymentInfos) =>
        graphqlFetcher(EXECUTE_PAY, { ids }),
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
            <PayAmount handleSubmit = {showModal} submitTitle ="결제하기"/>
            <PaymentModal show = {modalShown} proceed = {proceed} cancel = {cancel}/>
        </div>
    );
};

export default Payment;