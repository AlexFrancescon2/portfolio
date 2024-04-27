import React from "react";

import { css } from "@/styles/system";

export const SelectOption = ({ children, value, isDisabled, role }) => {
  return (
    <option
      className={styles()}
      value={value}
      disabled={isDisabled}
      role={role}
    >
      {children}
    </option>
  );
};

const styles = css({
  height: "$14",
});
