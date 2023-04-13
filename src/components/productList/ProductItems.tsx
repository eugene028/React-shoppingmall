import { Product } from 'src/graphql/products';
import styled from '@emotion/styled';
import { Text, ProductItem } from '@styles/components';
import StarRate from './StarRate';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { theme } from '@styles/theme';
import { useMutation } from 'react-query';
import { graphqlFetcher, QueryKeys } from '@libs/apis/products/queryClientApi';
import { ADD_CART } from '../../graphql/cart'

const ProductItems= (props: Product) => {
  // const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(props.id));
  // // const addToCart =  () => setCartAmount(cartAmount || 0 + 1);
  // const addToCart = () => setCartAmount(prev => (prev || 0) + 1);
  const { mutate : addCart } = useMutation((id : string) => graphqlFetcher(ADD_CART, { id }))
   return (
    <>
    <ProductItem>
      <Link to = {`/products/${props.id}`}>
            <ProductImg>
              <img src = {props.imageUrl}/>
            </ProductImg>
            <Text typo="Text_14_SB"
              color="gray_400"
              as = "p"
            >{props.title}</Text>
            <Text
              typo="Header_24"
              color="black"
            >{props.price}원</Text>
            <StarRate ratingnum = {props.rate}/>
        </Link>
        <FaShoppingCart 
          color = {theme.palette['main_400']} 
          className ="product-item__add-cart"
          onClick = {() => addCart(props.id)}
          />
        </ProductItem>
    </>
  )
};
export default ProductItems;


const ProductImg = styled.div`
  position: relative;
  padding-top: 141.4%;
  overflow: hidden;
  margin-bottom: 10px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.palette.gray_300};
    margin-bottom: 10px;
    object-fit: cover;
  }
  box-shadow: 0px 0px 10px 7px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  .tag {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;