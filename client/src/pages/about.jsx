import { Div } from "@/components/primitives/div";
import { useLanguage } from "@/assets/translations/languageProvider";
import { useLocation } from "react-router-dom";
import { useGetQueryParams, useSetQueryParams } from "@/hooks/get-queryparams";
import { Text } from "@/components/primitives/text";
import useIsVisible from "@/hooks/is-visible";
import { useEffect } from "react";

export const About = ({ sectionRef }) => {
  const queryParams = useGetQueryParams();
  const { setQueryParams } = useSetQueryParams();
  const [visibleRef, isVisible] = useIsVisible({ threshold: 0.1 });

  useEffect(() => {
    isVisible && setQueryParams({ page: "about" });
  }, [isVisible]);
  return (
    <Div css={containerStyle}>
      <div ref={sectionRef}></div>
      <div ref={visibleRef}></div>
      <Text size="xlarge" isBlock css={{ marginBottom: "$32" }}>
        About me
      </Text>
      <Text css={textSection}>
        Hi, I'm [Your Name], a passionate frontend software engineer dedicated
        to creating seamless and visually striking web applications.
      </Text>
      <Text css={textSection}>
        With more than 5 years of experience in developing responsive,
        user-centered interfaces, I specialize in translating complex concepts
        into elegant, functional designs.
      </Text>
      <Text css={textSection}>
        My journey began with a fascination for technology and design, and I've
        since honed my skills in HTML, CSS, JavaScript and modern frameworks,
        mainly React.
      </Text>
      <Text css={textSection}>
        I thrive on solving problems, whether it's optimizing performance or
        enhancing user experience.
      </Text>
      <Text css={textSection}>
        When I’m not coding, you’ll find me exploring the latest design trends,
        experimenting with new technologies, or enjoying [a personal hobby or
        interest].
      </Text>
      <Text css={textSection}>
        Let’s connect and explore how we can bring your next project to life."
        Feel free to customize the content to better match your personal style
        and experiences!
      </Text>
    </Div>
  );
};

const containerStyle = {
  padding: "$48",
};

const textSection = {
  display: "block",
  marginBottom: "$16",
  color: "$grey2",
};
