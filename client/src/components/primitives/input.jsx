import { css } from "@/styles/system";
import { Div } from "@/components/primitives/div";
import { Text } from "@/components/primitives/text";

import {
  directionSpacingVariants,
  fieldSizes,
  fieldsCommonStyles,
} from "@/components/primitives/common";

export const Input = ({
  id,
  name,
  value,
  defaultValue,
  hasSpaceBottom,
  hasSpaceTop,
  hasSpaceRight,
  hasSpaceLeft,
  size,
  autoFocus,
  placeholder,
  isDisabled,
  isReadOnly,
  label,
  hasWhiteLabel,
  onChange,
  onBlur,
  onMouseDown,
  onKeyDown,
  type = "text",
  css,
  role,
  maxLength,
  min,
  max,
  autoSize,
  checked,
}) => {
  return (
    <>
      <div
        className={wrapper({
          hasSpaceBottom,
          hasSpaceTop,
          hasSpaceLeft,
          hasSpaceRight,
          size,
        })}
      >
        <div style={{ width: "100%" }}>
          {label && (
            <Text
              css={{
                whiteSpace: "nowrap",
                color: hasWhiteLabel ? "$white" : "$black",
              }}
            >
              {label}
            </Text>
          )}
          <Div isFlex css={{ width: "100%", position: "relative" }}>
            <input
              className={styles({
                css,
              })}
              type={type}
              value={value}
              defaultValue={defaultValue}
              id={id}
              checked={checked}
              name={name}
              placeholder={placeholder}
              disabled={isDisabled}
              readOnly={isReadOnly}
              min={min}
              max={max}
              maxLength={maxLength}
              onChange={onChange}
              onMouseDown={onMouseDown}
              onKeyDown={(event) => {
                onKeyDown && onKeyDown(event);
              }}
              onBlur={onBlur}
              autoFocus={autoFocus}
              size={autoSize ? String(value).length : undefined}
              role={role}
            />
          </Div>
        </div>
      </div>
    </>
  );
};

const wrapper = css({
  position: "relative",
  display: "flex",
  width: "100%",
  variants: {
    ...directionSpacingVariants,
    size: fieldSizes,
  },
});
const styles = css({
  ...fieldsCommonStyles,
  outline: "none",
  width: "100%",
  transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
});
