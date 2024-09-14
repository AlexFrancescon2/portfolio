import React, { useState, useEffect } from "react";
import { Div } from "@/components/primitives/div";
import { motion } from "framer-motion";

export const Blob = ({ css, children }) => {
  return (
    <Div css={wrapperStyle}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Div css={childrenStyle}>{children}</Div>
        <img src="/img/blobfooter.png" width={"100%"}></img>
      </motion.div>
    </Div>
  );
};

const wrapperStyle = {
  position: "absolute",
  width: "100%",
  bottom: "-8px",
  left: "0px",
};

const childrenStyle = {
  position: "absolute",
  marginLeft: "auto",
  marginRight: "auto",
  left: "0",
  right: "0",
  textAlign: "center",
  bottom: "$16",
};
