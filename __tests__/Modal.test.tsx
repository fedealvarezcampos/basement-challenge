import {render} from "@testing-library/react";

import Modal from "../components/Modal";

describe("<Modal />", () => {
    let component: any;

    beforeEach(() => {
        component = render(<Modal setModal={jest.fn()}>children</Modal>);
    });

    test("renders component", () => {
        expect(component.container).toContainHTML("→ CLOSE");

        // component.debug();
    });
});
