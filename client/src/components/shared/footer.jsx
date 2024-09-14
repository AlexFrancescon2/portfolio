// Header.jsx
import { Link } from "@/components/primitives/link";
import { Div } from "@/components/primitives/div";
import { css } from "@/styles/system";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Footer = () => {
  const { translations } = useLanguage();
  return (
    <footer className={footerStyle()}>
      <div className={topStyle()}>
        <Div isFlex isAlignCenter>
          <Link to="/" color="white" size="xlarge">
            MyApp
          </Link>
        </Div>
        <div>Socials</div>
        <Link to="/privacy-policy">{translations.privacy_policy}</Link>
      </div>
      <div className={bottomStyle()}>
        Developed by Alex Francescon. All rights reserved.
      </div>
    </footer>
  );
};

const footerStyle = css({
  top: 0,
  width: "100%",
  backgroundColor: "$black3",
  boxShadow: "8px 0px 16px rgba(0, 0, 0, 0.2)",
});

const topStyle = css({
  padding: "$2 $16",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const bottomStyle = css({
  display: "flex",
  fontSize: "$14",
  justifyContent: "center",
  padding: "$4",
  backgroundColor: "$black2",
});
