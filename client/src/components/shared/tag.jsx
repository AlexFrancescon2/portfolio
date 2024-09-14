import React, { useState, useEffect } from "react";
import { Div } from "@/components/primitives/div";
import { Text } from "../primitives/text";
import { css } from "@/styles/system";

export const Tag = ({ type, children }) => {
  return (
    <Div css={wrapper}>
      <img src={"/img/" + type + ".png"} className={imgStyle()}></img>
      <Text size="small" color="grey">
        {children}
      </Text>
    </Div>
  );
};

const wrapper = {
  padding: "$4 $8",
  background: "$grey4",
  borderRadius: "$pill",
  display: "flex",
  alignItems: "center",
  gap: "$4",
  marginTop: "$12",
};

const imgStyle = css({
  maxWidth: "$16",
});
