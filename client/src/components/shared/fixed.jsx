// Header.jsx
import { Link } from "@/components/primitives/link";
import { Div } from "@/components/primitives/div";

import { useLanguage } from "@/assets/translations/languageProvider";
import { Text } from "@/components/primitives/text";
import { Arrow } from "../primitives/arrow";
import { useGetQueryParams, useSetQueryParams } from "@/hooks/get-queryparams";
import { Blob } from "./blob";

export const FixedInfo = ({ refsList }) => {
  const { language, translations, switchLanguage } = useLanguage();
  const queryParams = useGetQueryParams();
  const { setQueryParams } = useSetQueryParams();
  const page = queryParams.get("page");

  const scrollToSection = (ref, param) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    // SetQueryParam
    setQueryParams({ page: param });
  };

  return (
    <Div>
      <Div css={containerStyle}>
        <Text size="xlarge" isBlock>
          Alex Francescon
        </Text>
        <Text size="large" isBlock color="secondary">
          Frontend software engineer
        </Text>
        <Div css={{ marginTop: "$16" }}>
          <Text size="small" isBlock color="grey">
            Crafting intuitive and dynamic web experiences with a focus on
            clean, modern design. I transform ideas into engaging digital
            solutions.
          </Text>
        </Div>

        <Div css={{ marginTop: "$32" }}>
          <Arrow isActive={page === "about"}>
            <Div
              css={linkStyle}
              onClick={() => scrollToSection(refsList["about"], "about")}
            >
              {translations.about}
            </Div>
          </Arrow>
          <Arrow isActive={page === "experience"}>
            <Div
              css={linkStyle}
              onClick={() =>
                scrollToSection(refsList["experience"], "experience")
              }
            >
              {translations.experiences}
            </Div>
          </Arrow>
          <Arrow isActive={page === "projects"}>
            <Div
              css={linkStyle}
              onClick={() => scrollToSection(refsList["projects"], "projects")}
            >
              {translations.projects}
            </Div>
          </Arrow>
          <Arrow isActive={page === "contacts"}>
            <Div
              css={linkStyle}
              onClick={() => scrollToSection(refsList["contacts"], "contacts")}
            >
              {translations.contacts}
            </Div>
          </Arrow>
        </Div>
      </Div>

      <Blob>
        <Text css={footerTextStyle} color="primary">
          Developed by Alex Francescon.
        </Text>
        <Text color="primary" isBlock size="xsmall">
          Privacy policy
        </Text>
      </Blob>
    </Div>
  );
};

const containerStyle = {
  padding: "$48",
  position: "relative",
};

const footerTextStyle = {
  "@lgmin": {
    fontSize: "$14",
  },
  "@xlmin": {
    fontSize: "$18",
  },
  "@hgmin": {
    fontSize: "$22",
  },
};

const linkStyle = {
  cursor: "pointer",
  "&:hover": {
    color: "$secondary",
  },
};
