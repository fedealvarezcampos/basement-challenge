import {render} from "@testing-library/react";

import Product from "../components/Product";

describe("<Product />", () => {
    let component: any;

    const mockProduct = {
        id: "id",
        image: "/string",
        price: 10,
        name: "productname",
        description: "string",
        options: [
            {
                label: "label",
                values: ["S"],
            },
        ],
    };

    beforeEach(() => {
        component = render(<Product product={mockProduct} setModal={jest.fn()} />);
    });

    test("renders component", () => {
        expect(component.container).toContainHTML("productname");

        // component.debug();
    });
});
