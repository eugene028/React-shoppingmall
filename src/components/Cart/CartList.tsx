
import { TCart } from '../../graphql/cart';
import CartItem from './CartItem';

const CartList = ({ items }: { items: TCart[]}) => {
    return (
        <div>
             <label><input type  = "checkbox"/>전체선택</label>
            {items.map(item => <CartItem { ...item} key = {item.id}/>)}
        </div>
    );
};

export default CartList;