import {render} from "@testing-library/react";

import Marquee from "../components/Marquee";

describe("<Marquee />", () => {
    let component: any;

    beforeEach(() => {
        component = render(<Marquee />);
    });

    test("renders component", () => {
        expect(component.container).toContainHTML("A man can't");

        // component.debug();
    });
});
