import * as React from "react";
import { Transition, Checkbox } from "../../../components/index";

const TransitionFade = () => {
    const [visible, setVisible] = React.useState(false);
    const handleCheckboxchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVisible(e.target.checked);
    };

    return (
        <>
            <Checkbox value={visible} onChange={handleCheckboxchange} />
            <Transition visible={visible}>
                <div style={{ height: "50px", width: "50px", background: "#eee" }} />
            </Transition>
        </>
    );
};

export default TransitionFade;
