import {render} from "@testing-library/react";

import CartProduct from "../components/CartProduct";

describe("<CartProduct />", () => {
    let component: any;

    const mockProp = {
        product: {
            id: "string",
            image: "/string",
            price: 21,
            name: "mockedproduct",
            description: "string",
            options: [{label: "label", values: ["S", "L"]}],
        },
        quantity: 12,
        size: "S",
    };

    beforeEach(() => {
        component = render(<CartProduct item={mockProp} />);
    });

    test("renders component", () => {
        expect(component.container).toContainHTML("mockedproduct");

        // component.debug();
    });
});
