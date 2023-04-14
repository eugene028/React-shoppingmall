import PayAmount from '@components/PayCheck/PayAmount';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { checkedCartState } from '../../store/cart';
import PaymentModal from './PaymentModal';


const Payment = () => {
    const navigate = useNavigate();
    const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState);
    const [modalShown, toggleModal] = useState(false);
    const showModal  = () => {
        toggleModal(true);
    }
    const proceed = () => {
        //결제진행
        setCheckedCartData([]);
        navigate('/products', {replace: true});
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