import React from "react";

import { css } from "@/styles/system";

export const CollapsibleItem = ({ children, css, role }) => {
  return (
    <div className={wrapperStyles({ css })} role={role}>
      {children}
    </div>
  );
};

const wrapperStyles = css({
  border: "1px 1px 0px 0px solid $grey4",
  color: "$black",
  background: "$white",
  padding: "$4 $8",
  marginTop: "-1px",
  borderBottomLeftRadius: "$4",
  borderBottomRightRadius: "$4",
});
