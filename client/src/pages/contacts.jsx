import { useGetQueryParams, useSetQueryParams } from "@/hooks/get-queryparams";

import { Button } from "@/components/primitives/button";
import { Div } from "@/components/primitives/div";
import { Icon } from "@/components/primitives/icon";
import { Input } from "@/components/primitives/input";
import { RiSendPlaneFill } from "react-icons/ri";
import { Text } from "@/components/primitives/text";
import { TextArea } from "@/components/primitives/textarea";
import { useEffect } from "react";
import useIsVisible from "@/hooks/is-visible";
import { useLanguage } from "@/assets/translations/languageProvider";
import { useLocation } from "react-router-dom";

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
              hasSpaceBottom
            ></TextArea>
            <Div css={footer} isFlex isAlignCenter isJustifyCenter>
              <Button color="primary">
                Send
                <Icon render={RiSendPlaneFill} hasSpaceLeft color="white" />
              </Button>
            </Div>
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

const footer = {
  width: "100%",
  marginTop: "$4",
};
