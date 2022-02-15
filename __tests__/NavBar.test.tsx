import {render} from "@testing-library/react";

import NavBar from "../components/NavBar";

describe("<NavBar />", () => {
    let component: any;

    beforeEach(() => {
        component = render(<NavBar setModal={jest.fn()} />);
    });

    test("renders component", () => {
        expect(component.container).toContainHTML("</nav>");

        // component.debug();
    });
});
