import React from "react";

const Tools = ({ tool }) => {
  const value = tool
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  let formattedTool = ``;

  switch (value) {
    case "phillips-00-screwdriver":
      formattedTool = `<img src="https://m.media-amazon.com/images/I/71QiNaWZgvL._AC_UL320_.jpg" alt=""/><span>Phillips #00 Screwdriver</span>`;
      break;
    case "tri-point-y0-screwdriver":
      formattedTool = `<img src="https://m.media-amazon.com/images/I/41wljduXJkL._AC_UL480_FMwebp_QL65_.jpg" alt="" /><span>Tri-point Y0 Screwdriver</span>`;
      break;
    default:
      formattedTool = value;
  }

  return <div dangerouslySetInnerHTML={{ __html: formattedTool }} />;
};

export default Tools;
