import { useQuery } from "react-query";
import { QueryKeys, fetcher } from "@libs/apis/products/queryClientApi";
import { useParams } from "react-router";
import { Product } from "@libs/apis/products/apiTypes";
import ProductItem from "@components/Product/ProductItem";

const ProductDetail = () => {
    const { id } = useParams();
    const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], 
        () => fetcher({
        method: 'GET',
        path: `/products/${id}`,
    }));
    console.log(data);
    if (!data) return null;
    return (
        <div>
            <ProductItem {...data}/>
        </div>
    )
}

export default ProductDetail