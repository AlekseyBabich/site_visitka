import React from 'react';
import Image from "next/image";

export const FrontendSvg = () => {
    const imagePath = require('../../../image/frontend.png')
    return (
        <div>
            <Image src={imagePath} alt={''} width={290} height={290} />
        </div>
    );
};
