import React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from "../components/checkbox/index";
// import Icon from "../components/icon/index";
import "../components/checkbox/style/index.less";

import "./styles/common.less";

storiesOf("Checkbox", module).add("Checkbox", () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setChecked(e.target.checked);
    };

    return (
        <div className="page-wrapper">
            <Checkbox checked={checked} onChange={handleChange} />
            <br />
            <Checkbox checked={checked} onChange={handleChange}>
                Checkbox
            </Checkbox>
        </div>
    );
});
