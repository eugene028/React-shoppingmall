import { DELETE_CART, TCart, UPDATE_CART } from "../../graphql/cart"
import { useMutation } from 'react-query';
import { getClient, graphqlFetcher, QueryKeys } from "@libs/apis/products/queryClientApi";
import { RefObject, SyntheticEvent, forwardRef, ForwardedRef, HTMLAttributes } from "react";
import SelectedData from "./SelectedData";
import styled from "@emotion/styled";
import { Text } from "@styles/components";
import { media } from "@styles/theme";
import { theme } from "@styles/theme";
import { MdOutlineDeleteOutline } from 'react-icons/md'

const CartItem = ({ id, imageUrl, price, title, amount }: TCart, ref: ForwardedRef<HTMLInputElement>) => {
    const queryClient = getClient();
    const { mutate : updateCart } = useMutation(({id, amount} : {id: string, amount: number}) => 
        graphqlFetcher(UPDATE_CART, { id, amount }),
        {//서버에 요청하기 전에 미리 업뎃하겠다. 낙관적 데이터 처리!
            onMutate: async ({ id, amount }) => {
                //기존 데이터 덮어씌움 방지
                await queryClient.cancelQueries(QueryKeys.CART)
                const prevCart = queryClient.getQueryData<{[key: string]: TCart}>(QueryKeys.CART);
                if (!prevCart?.[id]) return prevCart;

                const newCart = {
                    ...(prevCart || {}),
                    [id]: {...prevCart[id], amount}
                }
                queryClient.setQueryData(QueryKeys.CART, newCart);
                return prevCart
            },
            onSuccess: newValue => {
                const prevCart = queryClient.getQueryData<{[key: string]: TCart}>(QueryKeys.CART);
                const newCart = {
                    ...(prevCart || {}),
                    [id]: newValue,
                }
                queryClient.setQueryData(QueryKeys.CART, newCart);
            }
        }
        );//카트 전체에 대한 것을 가져옴. (캐시를 관리하는..)
    
    const  { mutate : deleteCart } = useMutation(({id} : {id: string}) => 
    graphqlFetcher(DELETE_CART, { id }),
    {
        onSuccess: () => {
            queryClient.invalidateQueries(QueryKeys.CART);
            //invalidate를 사용하였기 때문에 이때마다 모든 카트를 가지고옴.
        }
    })

    const handleUpdateAmount = (e: SyntheticEvent) => {
        const amount = Number((e.target as HTMLInputElement).value);
        if (amount < 1) return
        updateCart({id, amount})
    }

    const handleDeleteItem = () => {
        deleteCart({ id })
    }
            //개선해서 갱신한 정보만 받아오도록 변경합니다. (서버에서 업데이트 한 값 가져오기)
        //     onSuccess: (newValue) => {
        //         const prevCart = queryClient.getQueryData<{[key: string]: TCart}>(QueryKeys.CART);
        //         const newCart = {
        //             ...(prevCart || {}),
        //             ...newValue,
        //         }
        //         console.log(newValue);
        //         queryClient.setQueriesData(QueryKeys.CART, newCart);
        //         // queryClient.invalidateQueries(QueryKeys.CART) 이렇게 작성하면 데이터 바뀔때마다 모든 데이터 다 다시 불러온다(비효율)
        //     },
        // },);
        //숫자 바뀔때마다 다시 값을 불러온다.
        // queryClient.invalidateQueries(QueryKeys.CART); 두개를 동기처럼 처리하면 어떡해!! 
    
    return (
        <CartContainer>
            <ItemWrapper>
                <input
                    className="cart-item__checkbox"
                    type="checkbox"
                    name="select-item"
                    ref={ref}
                    data-id={id}
                />
                <SelectedData imageUrl = {imageUrl} price={price} title={title} amount = {amount} data-id = {id}/>
                <PriceDelete>
                    <Text typo ='Text_18_SB' color = 'black' className="finalPrice">{price*amount}원</Text>
                    <AmountInput type = "number" className = "cart-item__amount" 
                        min = {1} value = {amount} 
                        onChange={handleUpdateAmount}
                    />
                </PriceDelete>
                <MdOutlineDeleteOutline size = '2rem' color = {theme.palette.main_400} onClick = {handleDeleteItem}/>
            </ItemWrapper>
            <br/>

        </CartContainer>
    )
}

export default forwardRef(CartItem)

//아이템들 세로 정렬
const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
`
//아이템들 가로 정렬 
const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    .cart-item__checkbox{
        margin-right: 20px
    }
    padding: 20px;
    border-bottom: 2px solid ${theme.palette.main_200};
`
const AmountInput = styled.input`
    max-width: 50px;
    max-height: 20px;
   
`

const PriceDelete = styled.div`
    padding: 20px;
    display: flex;
    gap: 20px;
    ${media.mobile} {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap:10px;
    }
`