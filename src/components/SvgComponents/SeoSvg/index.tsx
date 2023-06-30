import React from 'react';
import Image from "next/image";

export const SeoSvg = () => {
    const imagePath = require('../../../image/seo.png')
    return (
        <div>
            <Image src={imagePath} alt={''} width={290} height={290} />
        </div>
    );
};
