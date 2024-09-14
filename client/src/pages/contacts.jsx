import { Div } from "@/components/primitives/div";
import { useLanguage } from "@/assets/translations/languageProvider";
import { useLocation } from "react-router-dom";
import { useGetQueryParams, useSetQueryParams } from "@/hooks/get-queryparams";
import { Text } from "@/components/primitives/text";
import useIsVisible from "@/hooks/is-visible";
import { useEffect } from "react";
import { Input } from "@/components/primitives/input";
import { TextArea } from "@/components/primitives/textarea";

export const Contacts = ({ sectionRef }) => {
  const queryParams = useGetQueryParams();
  const { setQueryParams } = useSetQueryParams();
  const [visibleRef, isVisible] = useIsVisible({ threshold: 0.1 });
  const { translations } = useLanguage();

  useEffect(() => {
    isVisible && setQueryParams({ page: "contacts" });
  }, [isVisible]);
  return (
    <Div css={containerStyle}>
      <div ref={sectionRef}></div>
      <div ref={visibleRef}></div>
      <Div css={blobContainer}>
        <Div css={fieldsContainer} isFlex isJustifyCenter isAlignCenter>
          <div style={{ width: "100%" }}>
            <Text size="xlarge" isBlock color="primary" bottomMargin center>
              {translations.contacts}
            </Text>
            <Input size="full" label="Name" placeholder="Name" hasSpaceBottom />
            <Input
              size="full"
              type="email"
              label="Email"
              placeholder="Email"
              hasSpaceBottom
            />
            <TextArea
              size="full"
              label="Reason"
              placeholder="Reason"
              css={{ maxHeight: "80px", minWidth: "96%" }}
            ></TextArea>
          </div>
        </Div>
      </Div>
    </Div>
  );
};

const containerStyle = {
  padding: "$48",
};

const blobContainer = {
  position: "relative",
  backgroundImage: "url('/img/blobbg.png')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  aspectRatio: "1 / 1",
};

const fieldsContainer = {
  position: "absolue",
  padding: "$80",
  height: "100%",
};
