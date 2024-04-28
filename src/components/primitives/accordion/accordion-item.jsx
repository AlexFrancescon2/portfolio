import React, { useContext } from "react";

import { AccordionContext } from "@/components/primitives/accordion/accordion";

import { Collapsible } from "@/components/primitives/accordion/collapsible";

export const AccordionItem = ({ title, children }) => {
  const [openTitle, setOpenTitle] = useContext(AccordionContext);
  return (
    <Collapsible
      title={title}
      isOpen={openTitle === title}
      setIsOpen={() => setOpenTitle(openTitle === title ? "" : title)}
    >
      {children}
    </Collapsible>
  );
};
