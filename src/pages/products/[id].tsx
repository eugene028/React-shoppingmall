import { useQuery } from "react-query";
import { QueryKeys, graphqlFetcher} from "@libs/apis/products/queryClientApi";
import { useParams } from "react-router";
import { Product, GET_PRODUCT} from '../../graphql/products'
import ProductItem from "@components/Product/ProductItem";

const ProductDetail = () => {
    const { id } = useParams();
    const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], 
        () => graphqlFetcher(GET_PRODUCT, { id }));
    if (!data) return null;
    return (
        <div>
            <ProductItem {...data}/>
        </div>
    )
}

export default ProductDetail