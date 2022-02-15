import {Dispatch, SetStateAction} from "react";
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
    setModal: Dispatch<SetStateAction<boolean>>;
}

const Home: NextPage<Props> = ({products, setModal}) => {
    return (
        <div className="m-auto flex max-w-[2500px] flex-col gap-[3%] px-[3%] sm:flex-row">
            {products.map((product) => (
                <ProductItem key={product?.id} product={product} setModal={setModal} />
            ))}
        </div>
    );
};

export default Home;
