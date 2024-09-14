import { css } from "@/styles/system";
import { DropdownProvider, useDropdown } from "./context";
import { useClickOutside } from "../modal/click-outside";
import { useRef } from "react";
import { Div } from "../div";

export const Dropdown = ({ children, label, openLeft, icon, css }) => (
  <DropdownProvider>
    <DropdownWrapper label={label} openLeft={openLeft} icon={icon} css={css}>
      {children}
    </DropdownWrapper>
  </DropdownProvider>
);

const DropdownWrapper = ({ children, label, icon, openLeft, css }) => {
  const { isOpen, setIsOpen } = useDropdown();
  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className={dropdownContainerStyles({ css })} ref={ref}>
      <div onClick={() => setIsOpen(!isOpen)} className={dropdownLabelStyles()}>
        <Div isFlex css={{ gap: "$8" }}>
          {icon}
          {label}
        </Div>
      </div>
      {isOpen && (
        <div className={dropdownMenuStyles({ openLeft })}>{children}</div>
      )}
    </div>
  );
};

export const DropdownItem = ({ children, onClick }) => {
  const { setIsOpen } = useDropdown();

  const handleClick = () => {
    setIsOpen(false);
    onClick && onClick();
  };
  return (
    <div onClick={handleClick} className={dropdownItemContainerStyles()}>
      {children}
    </div>
  );
};

const dropdownContainerStyles = css({
  position: "relative",
});

const dropdownLabelStyles = css({
  color: "inherit",
  padding: "$2",
  borderRadius: "$4",
  border: "none",
  cursor: "pointer",
  fontSize: "$16",
});

const dropdownMenuStyles = css({
  position: "absolute",
  top: "100%",
  zIndex: 1000,
  backgroundColor: "$background",
  border: "1px solid $border",
  borderRadius: "$4",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  marginTop: "$1",
  minWidth: "fit-content",
  variants: {
    openLeft: {
      true: {
        right: 0,
      },
      false: {
        left: 0,
      },
    },
  },
});

const dropdownItemContainerStyles = css({
  cursor: "pointer",
  fontSize: "$12",
  backgroundColor: "$white",
  padding: "$4 $16",
  color: "$black",
  "&:last-child": {
    borderBottom: "none",
  },
  "&:hover": {
    backgroundColor: "$white2",
  },
});
