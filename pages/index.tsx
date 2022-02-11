import type {NextPage} from "next";
import {GetStaticProps} from "next";

import {Product} from "../product/types";
import Header from "../components/Header";
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
    <div className="flex flex-col">
      <Header />
      <div className="mt-20 flex gap-4 px-8">
        {products.map((product) => (
          <ProductItem key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
