import React from "react";

export const UaeFlag: React.FC<{ className?: string }> = ({
  className = "w-5 h-3.5",
}) => (
  <svg
    viewBox="0 0 600 300"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={{ borderRadius: "2px", overflow: "hidden", display: "inline-block", verticalAlign: "middle" }}
  >
    {/* Green Top Bar */}
    <rect width="600" height="100" fill="#00732F" />
    {/* White Middle Bar */}
    <rect y="100" width="600" height="100" fill="#FFFFFF" />
    {/* Black Bottom Bar */}
    <rect y="200" width="600" height="100" fill="#000000" />
    {/* Red Vertical Left Bar */}
    <rect width="150" height="300" fill="#FF0000" />
  </svg>
);
export default UaeFlag;
