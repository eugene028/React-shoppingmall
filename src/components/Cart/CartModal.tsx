import { ReactElement } from 'react';
import { createPortal } from 'react-dom'
import styled from '@emotion/styled';
import { Text } from '@styles/components';
import { theme } from '@styles/theme';

const ModalPortal = ({ children }: {children: ReactElement}) => {
    return createPortal(children, document.getElementById('modal')!)
}

const CartModal = ({show, proceed, cancel} : {show: boolean;
proceed:() => void; cancel:() => void;}) => {
    return show ? (<ModalPortal>
        <ModalWrapper>
            <Overlay/>
            <ModalBox>
                <ModalText>
                    <Text typo ='Header_20'>해당 상품을 장바구니에 추가할까요?</Text>
                    <YesorNo>
                        <SelectButton onClick ={ proceed }><Text typo= 'Text_18_SB' color ='black'>예</Text></SelectButton>
                        <SelectButton onClick = { cancel }><Text typo= 'Text_18_SB' color ='black'>아니오</Text></SelectButton>
                    </YesorNo>
                </ModalText>
            </ModalBox>
        </ModalWrapper>
    </ModalPortal>) : null
};

export default CartModal;

const ModalWrapper = styled.div`
    @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: 0.5s forwards fadeIn ease-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBox = styled.div`
    @keyframes grow {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
    animation: 0.15s forwards grow ease-out;
    width: 40%;
    height: 25%;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.palette.white};
    z-index: 101;
    /* width: 390px; */
    border: 1px solid black;
`

const ModalText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
    gap: 40px;
`
const YesorNo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
`

const SelectButton = styled.button`
    background: ${theme.palette.main_200};
    width: 100px;
    height: 50px;
    border-radius: 10px;
`

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
`;
