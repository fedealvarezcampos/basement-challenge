import {render} from "@testing-library/react";

import Header from "../components/Header";

describe("<Header />", () => {
    let component: any;

    beforeEach(() => {
        component = render(<Header />);
    });

    test("renders component", () => {
        expect(component.container).toContainHTML("</header>");

        // component.debug();
    });
});
