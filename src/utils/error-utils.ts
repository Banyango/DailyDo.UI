import classNames from "classnames";
import {ITextFieldProps} from "../components/form/text-field/text-field.props";

export const withError = <T extends ITextFieldProps<any>>(name:{}, errors, fieldName:string) => {
    return classNames(
        {
            "error": !!errors[fieldName],
            ...name
        });
};
