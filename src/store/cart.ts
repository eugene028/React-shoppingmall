import { atom, selectorFamily } from 'recoil';
import { TCart } from 'src/graphql/cart';

export const checkedCartState = atom<TCart[]>({
    key: 'cartState',
    default :[],
})


//카트에 담긴 물건에 대한 Id를 내뱉는 함수이다. 
