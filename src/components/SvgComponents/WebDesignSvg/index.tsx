import React from 'react';
import Image from "next/image";

export const WebDesignSvg = () => {
    const imagePath = require('../../../image/webDesign.png')
    return (
        <div>
            <Image src={imagePath} alt={''} width={220} height={220} />
        </div>
    );
};