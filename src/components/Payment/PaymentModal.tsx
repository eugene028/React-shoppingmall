import React, { ReactElement } from 'react';
import { createPortal } from 'react-dom'

const ModalPortal = ({ children }: {children: ReactElement}) => {
    return createPortal(children, document.getElementById('modal')!)
}

const PaymentModal = ({show, proceed, cancel} : {show: boolean;
proceed:() => void; cancel:() => void;}) => {
    return show ? (<ModalPortal>
        <div>
            <p>정말 결제할까요?</p>
            <button onClick ={ proceed }>예</button>
            <button onClick = { cancel }>아니오</button>
        </div>
    </ModalPortal>) : null
};

export default PaymentModal;