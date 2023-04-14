
import { TCart } from '../../graphql/cart';
import CartItem from './CartItem';
import { useSetRecoilState } from 'recoil';
import { checkedCartState } from '../../store/cart';
import { SyntheticEvent, useRef, createRef } from 'react';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { Text } from '@styles/components';
import PayAmount from './PayAmount';
import { media } from '@styles/theme';

const CartList = ({ items }: { items: TCart[]}) => {
    const setCheckedCartData = useSetRecoilState(checkedCartState)
    const formRef = useRef<HTMLFormElement>(null);
    const checkboxRefs = items.map(()=> createRef<HTMLInputElement>())
    const handleCheckboxChanged = (e: SyntheticEvent) => {
        if(!formRef.current) return;
        const targetInput = e.target as HTMLInputElement;
        const data = new FormData(formRef.current);
        const selectedCount = data.getAll('select-item').length;
        if (targetInput.classList.contains('select-all')) {
            const allChecked = targetInput.checked
            checkboxRefs.forEach(inputElem => {
                inputElem.current!.checked= allChecked;
            })
        } else {
            const allChecked =  selectedCount === items.length
            formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked
        }
        const checkedItems = checkboxRefs.reduce<TCart[]>((res, ref, i) => {
            if (ref.current!.checked) res.push(items[i]);
            return res;
        }, [])
        setCheckedCartData(checkedItems)
    }
    return (
        <form ref = {formRef} onChange = {handleCheckboxChanged}>
            <CartContainer>
                <CartHeader>
                    <Text typo ='Text_16_SB' className = "info" color ='black' as ='h3'>
                        <input className= "select-all" name = "select-all" type = "checkbox"/>
                        전체선택
                    </Text>
                    <Text typo ='Text_16_SB' className = "info" color ='black' as ='h3'>
                        상품정보
                    </Text>
                    <Text typo ='Text_16_SB' className = "info" color ='black' as ='h3'>
                        상품금액
                    </Text>
                </CartHeader>
                {items.map((item, i) => <CartItem { ...item} key = {item.id} ref = {checkboxRefs[i]}/>)}
            </CartContainer>
            <PayAmount/>
        </form>
    );
};

export default CartList;

const CartContainer = styled.div`
    padding: 60px;
    overflow: hidden;
    ${media.mobile} {
        padding: 30px;
    }
`

const CartHeader = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    background-color: ${theme.palette.main_100};
    padding : 5px;
    .select-all {
        margin-right: 10px;
    }
    .info{
        align-items: center;
        margin-top: 6px;
    }
    .info:nth-of-type(1) {
	    flex: 1 1 0;
    }
    .info:nth-of-type(2) {
	    flex: 2 1 0;
        text-align: center;
    }
    .info:nth-of-type(3) {
	    flex: 1 1 0;
        text-align: center;
    }
    border: 2px solid ${theme.palette.main_200};
`