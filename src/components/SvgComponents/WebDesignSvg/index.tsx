import React from 'react';
import Image from "next/image";

export const WebDesignSvg = () => {
    const imagePath = require('../../../image/webDesign.png')
    return (
        <div>
            <Image src={imagePath} alt={''} width={350} height={350} />
        </div>
    );
};