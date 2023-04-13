
import { TCart } from '../../graphql/cart';
import CartItem from './CartItem';
import { SyntheticEvent, useRef, createRef } from 'react';

const CartList = ({ items }: { items: TCart[]}) => {
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
    }
    return (
        <form ref = {formRef} onChange = {handleCheckboxChanged}>
            <div>
                <label><input className= "select-all" name = "select-all" type = "checkbox"/>전체선택</label>
                {items.map((item, i) => <CartItem { ...item} key = {item.id} ref = {checkboxRefs[i]}/>)}
            </div>
        </form>
    );
};

export default CartList;