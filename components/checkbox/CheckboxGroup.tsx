import * as React from "react";

// import Checkbox from "./Checkbox";
import { ConfigContext } from "../config-provider";
import Checkbox from "./Checkbox";

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
    label: React.ReactNode;
    value: CheckboxValueType;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxGroupProps {
    prefixCls?: string;
    className?: string;
    options?: Array<CheckboxOptionType | string>;
    disabled?: boolean;
    name?: string;
    defaultValue?: Array<CheckboxValueType>;
    value?: Array<CheckboxValueType>;
    onChange?: (checkedValue: Array<CheckboxValueType>) => void;
}

export interface CheckboxGroupContent {
    toggleOption?: (option: CheckboxOptionType) => void;
    value?: any;
    name?: string;
    disabled?: boolean;
}

export const GroupContext = React.createContext<CheckboxGroupContent | null>(null);

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
    const {
        className,
        disabled,
        options: optionsProp,
        children: childrenProp,
        ...restProps
    } = props;

    const [value, setValue] = React.useState<Array<CheckboxValueType>>([]);

    // console.log({ value });
    console.log({ setValue });

    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("checkbox");
    const groupPrefixCls = `${prefixCls}-group`;

    console.log({ groupPrefixCls });
    console.log({ ...restProps });

    const options = (optionsProp as Array<CheckboxOptionType>)?.map((option) => {
        if (typeof option === "string") {
            const handleOption: CheckboxOptionType = {
                label: option,
                value: option
            };
            return handleOption;
        }
        return option;
    });

    const children = !options
        ? childrenProp
        : options.map((option) => (
              <Checkbox
                  key={option.value.toString()}
                  value={option.value}
                  className={`${groupPrefixCls}-item`}
                  disabled={"disabled" in option ? option.disabled : disabled}
                  checked={value.indexOf(option.value) !== -1}
                  onChange={option.onChange}
              >
                  {option.label}
              </Checkbox>
          ));

    console.log({ options });

    // let children = childrenProp;
    // if (options && options.length > 0) {

    // }

    const contenxt = {
        value: value,
        disabled: disabled,
        name: name
    };
    // return <div>Group</div>;
    return <GroupContext.Provider value={contenxt}>{children}</GroupContext.Provider>;
};

export default CheckboxGroup;
