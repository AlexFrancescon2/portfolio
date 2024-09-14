import { css } from "@/styles/system";

export const Div = ({
  children,
  css,
  onClick,
  isFlex,
  isJustifyCenter,
  isAlignCenter,
  ref,
}) => {
  return (
    <div
      className={styles({ css, isFlex, isJustifyCenter, isAlignCenter })}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </div>
  );
};

const styles = css({
  variants: {
    isFlex: {
      true: {
        display: "flex",
      },
    },
    isJustifyCenter: {
      true: {
        justifyContent: "center",
      },
    },
    isAlignCenter: {
      true: {
        alignItems: "center",
      },
    },
  },
});
