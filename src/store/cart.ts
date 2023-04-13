import { atom, selectorFamily } from 'recoil';

const cartState = atom<Map<string, number>>({
    key: 'cartState',
    default : new Map()
})

//카트에 담긴 물건에 대한 Id를 내뱉는 함수이다. 
export const cartItemSelector = selectorFamily<number | undefined, string>({
    key: 'cartItem',
    get: (id: string) => ({ get }) => {
        const carts = get(cartState);
        return carts.get(id)
    },
    set: 
        (id: string) => 
        ( { get, set }, newValue ) => {
            if (typeof newValue === 'number'){
                // const newCart = get(cartState).set(id, newValue)
                // set(cartState, newCart);
                const newCart = new Map([...get(cartState)])
                newCart.set(id, newValue)
                set(cartState, newCart)
            }
        },
})