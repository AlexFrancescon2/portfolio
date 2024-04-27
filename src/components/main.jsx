import { css } from "@/styles/system";
import { Div } from "@/components/primitives/div";
import { Input } from "@/components/primitives/input";
import { TextArea } from "@/components/primitives/textarea";
import { Button } from "@/components/primitives/button";
import { Select } from "@/components/primitives/select/select";

export const Main = () => {
  return (
    <div className={wrapper()}>
      <Div css={boxStyle}>
        <Div isFlex>
          <Input
            label={"Input"}
            size={"small"}
            hasWhiteLabel
            hasSpaceBottom
            placeholder="An Input field"
          />
          <Select label={"Select"} size={"small"} hasWhiteLabel hasSpaceBottom>
            <Select.Option>Test</Select.Option>
          </Select>
        </Div>

        <TextArea
          label={"Textarea"}
          resizeDirection="right"
          size={"large"}
          hasWhiteLabel
          hasSpaceBottom
          placeholder="A textarea field"
          css={{ maxWidth: "100%", maxHeight: "100px" }}
        />
        <Button color={"blue"} hasSpaceTop>
          Click!
        </Button>
      </Div>
    </div>
  );
};

const wrapper = css({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const boxStyle = {
  width: "50%",
  height: "50%",
  padding: "$32",
  borderRadius: "$12",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
};
