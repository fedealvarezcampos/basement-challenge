import {render} from "@testing-library/react";

import Layout from "../components/layout";

describe("<Layout />", () => {
    let component: any;

    beforeEach(() => {
        component = render(
            <Layout modal={false} setModal={jest.fn()}>
                children
            </Layout>,
        );
    });

    test("renders component", () => {
        expect(component.container).toContainHTML("</main>");

        // component.debug();
    });
});
