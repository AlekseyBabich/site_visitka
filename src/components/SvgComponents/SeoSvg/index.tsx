import React from "react";
import Image from "next/image";

export const SeoSvg = () => {
  const imagePath = require("../../../image/seo.png");
  return (
    <div>
      <Image src={imagePath} alt={""} width={360} height={360} />
    </div>
  );
};
