import React from 'react';

import { I_InputProps } from "../../../types/ui";

const CustomInput = ( { type, width, height, placeholder }: I_InputProps ) => {
    return (
        <div>
            <input type={ type } placeholder={ placeholder } style={ { width: width, height: height} } />
        </div>
    );
};

export default CustomInput;