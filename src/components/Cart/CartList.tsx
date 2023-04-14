
import { TCart } from '../../graphql/cart';
import CartItem from './CartItem';
import { useRecoilState } from 'recoil';
import { checkedCartState } from '../../store/cart';
import { SyntheticEvent, useRef, createRef, useState } from 'react';
import styled from '@emotion/styled';
import { theme, media } from '@styles/theme';
import { Text } from '@styles/components';
import PayAmount from '../PayCheck/PayAmount';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const CartList = ({ items }: { items: TCart[]}) => {
    const navigate = useNavigate();
    const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState)
    const formRef = useRef<HTMLFormElement>(null);
    const checkboxRefs = items.map(()=> createRef<HTMLInputElement>());
    const [formData, setFormData] = useState<FormData>();

    const setAllCheckedFromItems = () => {
        if(!formRef.current) return;
        const data = new FormData(formRef.current);
        const selectedCount = data.getAll('select-item').length;
        const allChecked = selectedCount === items.length;
        formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked;
    }

    const setItemsCheckedFromAll = (targetInput: HTMLInputElement) => {
        const allChecked = targetInput.checked
        checkboxRefs.forEach(inputElem => {
            inputElem.current!.checked = allChecked;
        })
    }

    const handleCheckboxChanged = (e: SyntheticEvent) => {
        if(!formRef.current) return;
        const targetInput = e.target as HTMLInputElement;
 
        if (targetInput && targetInput.classList.contains('select-all')) {
            setItemsCheckedFromAll(targetInput)
        } else {
           setAllCheckedFromItems()
        }
        const data = new FormData(formRef.current);
        setFormData(data);
    }

    const handleSubmit = () => {
        if(checkedCartData.length){
            navigate('/payment')
        }
        else{
            alert('결제할 상품을 먼저 선택해주세요!😞');
        }
    }

    useEffect(() => {
        checkedCartData.forEach(item => {
            const itemRef = checkboxRefs.find(ref => ref.current!.dataset.id === item.id);
            if(itemRef) itemRef.current!.checked = true
        })
        setAllCheckedFromItems();
    })
   

    useEffect(()=> {
        const checkedItems = checkboxRefs.reduce<TCart[]>((res, ref, i) => {
            if (ref.current!.checked) res.push(items[i]);
            return res;
        }, [])
        setCheckedCartData(checkedItems)
    }, [items, formData]);//데이터가 바로 반영되기 위해서 useEffect 사용

    return (
        <form ref = {formRef} onChange = {handleCheckboxChanged}>
            <CartContainer>
                <CartHeader>
                    <Text typo ='Text_16_SB' className = "info" color ='black' as ='h3'>
                        <input className= "select-all" name = "select-all" type = "checkbox" />
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
            <PayAmount handleSubmit = {handleSubmit} submitTitle="구매하기"/>
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