import React, { createContext, useState } from "react";

import { AccordionItem } from "@/components/primitives/accordion/accordion-item";
import { css } from "@/styles/system";
import { directionSpacingVariants } from "@/components/primitives/common";

export const AccordionContext = createContext([]);

export const Accordion = ({
  children,
  css,
  openedByDefault = "",
  hasSpaceTop,
  hasSpaceBottom,
}) => {
  const openState = useState(openedByDefault);
  return (
    <AccordionContext.Provider value={openState}>
      <div
        className={styles({
          hasSpaceTop,
          hasSpaceBottom,
          css,
        })}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;

export const styles = css({
  variants: {
    ...directionSpacingVariants,
  },
});
