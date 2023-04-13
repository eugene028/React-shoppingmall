import { Product } from "src/graphql/products";
const ProductItem = (props: Product) => {
    return (
        <div>
             <h1>{props.title}</h1>
        </div>
    );
};

export default ProductItem;