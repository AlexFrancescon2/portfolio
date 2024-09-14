import React, { useState, useEffect } from "react";
import { Div } from "@/components/primitives/div";
import { Text } from "../primitives/text";
import { fontSizes } from "@/styles/tokens";
import { css } from "@/styles/system";
import { Icon } from "../primitives/icon";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Card = ({ children, redirect }) => {
  const onRedirect = () => {
    redirect && window.open(redirect, "_blank");
  };
  return (
    <Div onClick={onRedirect} css={wrapper}>
      {redirect && (
        <span className={iconStyle()} id="icon">
          <Icon render={FaExternalLinkAlt}></Icon>
        </span>
      )}
      {children}
    </Div>
  );
};

const wrapper = {
  padding: "$16",
  cursor: "pointer",
  background: "transparent",
  border: "1px solid transparent ",
  borderRadius: "$8",
  marginBottom: "$36",
  position: "relative",
  "&:hover": {
    background: "$grey5",
    border: "1px solid $grey4 ",
    transition: "background 300ms linear, border 300ms linear",
    "#title": {
      color: "$secondary",
    },
    "#icon": {
      display: "flex",
    },
  },
};
const iconStyle = css({
  position: "absolute",
  top: "$12",
  right: "$16",
  display: "none",
});

export const CardBody = ({ children, title, subtitle }) => {
  return (
    <Div isFlex css={{ color: "$grey2", fontSize: "$14" }}>
      {children}
    </Div>
  );
};

export const CardDate = ({ children }) => {
  return (
    <Div css={{ width: "30%" }}>
      <Text color="grey">{children}</Text>
    </Div>
  );
};

export const CardContent = ({ children, title, subtitle }) => {
  return (
    <Div css={{ paddingLeft: "$16", width: "100%" }}>
      <Text size="large" id="title" isBlock>
        {title}
      </Text>
      <Text size isBlock color="grey" css={{ marginBottom: "$12" }}>
        {subtitle}
      </Text>
      <Div css={{ color: "$grey2", fontSize: "$14" }}>{children}</Div>
    </Div>
  );
};

export const CardFooter = ({ children }) => {
  return (
    <Div isFlex isAlignCenter css={{ width: "100%", gap: "$8" }}>
      {children}
    </Div>
  );
};
