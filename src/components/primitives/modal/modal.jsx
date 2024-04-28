import React, { useRef, useCallback, useLayoutEffect } from "react";

import { css } from "@/styles/system";

// Hooks
import { useClickOutside } from "./click-outside";

export const Modal = ({ children, isOpen, setIsOpen, hasWrapper, role }) => {
  const modalRef = useRef(null);

  const closeModal = useCallback(() => {
    setIsOpen && setIsOpen(false);
  }, []);

  // Close modal on click outside
  useClickOutside(modalRef, closeModal);

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles({ hasWrapper })} role={role}>
      <div ref={modalRef}>{children}</div>
    </div>
  );
};

const styles = css({
  background: "hsla(0, 0%, 0%, 0.5)",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9000,
  top: 0,
  left: 0,
  variants: {
    hasWrapper: {
      true: {
        position: "absolute",
        height: "100%",
        width: "100%",
      },
    },
  },
});
