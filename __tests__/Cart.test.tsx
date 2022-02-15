import {render} from "@testing-library/react";

import Cart from "../components/Cart";

describe("<Cart />", () => {
    let component: any;

    beforeEach(() => {
        component = render(<Cart />);
    });

    test("renders component", () => {
        // expect(component.container).toContainHTML('fafa'); // fails
        expect(component.container).toContainHTML("CHECKOUT");

        // component.debug();
    });
});
