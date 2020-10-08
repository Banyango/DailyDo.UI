import React, {useEffect, useState} from "react";

import "./spinner.css";
import {delay} from "q";

export interface ISpinnerProps {
    /**
     * True if we should delay showing this spinner; false otherwise
     */
    delay?: boolean;
}

export const SpinnerComponent: React.FC<ISpinnerProps> = props => {
    const [show,setShow] = useState(false);
    useEffect(()=> {
        if (!props.delay) {
            setShow(true);
            return;
        }
        const timer = setTimeout(()=> setShow(true), 40);
        return () => clearTimeout(timer);
    }, []);
    return show &&
        <div className="spinner" role="status">
            <span className="sr-only">Loading</span>
        </div>;
}
