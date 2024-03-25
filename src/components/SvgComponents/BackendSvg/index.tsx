import React from "react";
import Image from "next/image";

export const BackendSvg = () => {
  const imagePath = require("../../../image/backend.png");
  return (
    <div>
      <Image src={imagePath} alt={""} width={270} height={270} />
    </div>
  );
};
