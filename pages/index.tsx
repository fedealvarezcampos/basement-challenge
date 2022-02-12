import type {NextPage} from "next";
import {GetStaticProps} from "next";

import {Product} from "../product/types";
import ProductItem from "../components/Product";

export const getStaticProps: GetStaticProps = async () => {
    const products: Product[] = await import("../product/mock.json").then((res) => res.default);

    return {
        props: {
            products,
        },
    };
};

interface Props {
    products: Product[];
}

const Home: NextPage<Props> = ({products}) => {
    return (
        <div className="flex gap-[3%] px-[3%]">
            {products.map((product) => (
                <ProductItem key={product?.id} product={product} />
            ))}
        </div>
    );
};

export default Home;
