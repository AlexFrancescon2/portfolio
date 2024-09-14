// Header.jsx
import { Link } from "@/components/primitives/link";
import { Div } from "@/components/primitives/div";
import { css } from "@/styles/system";
import { navLinksStyles } from "@/styles/shared";

import { useLanguage } from "@/assets/translations/languageProvider";
import { Dropdown, DropdownItem } from "../primitives/dropdown/dropdown";

export const Header = () => {
  const { language, translations, switchLanguage } = useLanguage();
  return (
    <header className={headerStyle()}>
      <Div isFlex css={{ justifyContent: "space-between", padding: "$20" }}>
        <Div isFlex css={wrapperStyle}>
          <Div isFlex isJustifyCenter isAlignCenter>
            <Link to="/" color="white" size="xlarge">
              MyApp
            </Link>
          </Div>
          <ul className={navLinksStyles()}>
            <li>
              <Link to="/">{translations.homepage}</Link>
            </li>
            <li>
              <Link to="/about">{translations.about}</Link>
            </li>
            <li>
              <Link to="/contacts">{translations.contacts}</Link>
            </li>
          </ul>
        </Div>
        <Div css={languagesWrapper}>
          <Dropdown
            label={language.toUpperCase()}
            icon={
              <img
                src={`src/assets/translations/flags/${
                  language === "en" ? "us" : language
                }.svg`}
                width={24}
                height={24}
              />
            }
            openLeft
            css={{ marginRight: "30px" }}
          >
            <DropdownItem onClick={() => switchLanguage("en")}>
              <Div isFlex justifyContent alignItems css={{ gap: "$4" }}>
                <img src={`src/assets/translations/flags/us.svg`} width={16} />
                EN
              </Div>
            </DropdownItem>
            <DropdownItem onClick={() => switchLanguage("it")}>
              <Div isFlex justifyContent alignItems css={{ gap: "$4" }}>
                <img src={`src/assets/translations/flags/it.svg`} width={16} />
                IT
              </Div>
            </DropdownItem>
          </Dropdown>
        </Div>
      </Div>
    </header>
  );
};

const headerStyle = css({
  top: 0,
  width: "100%",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
});

const languagesWrapper = {
  gap: "$16",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const wrapperStyle = {
  gap: "$40",
};
