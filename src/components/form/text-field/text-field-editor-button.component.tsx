import React, {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";

import './text-field-editor.css';

export interface ITextFieldEditorButtonProps {
    icon:IconProp;
    onClick: () => void;
    value?: boolean;
}


export const TextFieldEditorButton = (props:ITextFieldEditorButtonProps) => {
    const button = useRef<HTMLButtonElement>();
    return (
        <button ref={button} className={classNames("text-field-editor__button",{"text-field-editor__button_active":props.value})}
                onMouseDown={(e)=> e.preventDefault()}
                onClick={(e) => {
                    e.preventDefault();
                    props.onClick();
                }}>
            <FontAwesomeIcon className="text-field-editor__icon" icon={props.icon}/>
        </button>
    )
};