import { useGetQueryParams, useSetQueryParams } from "@/hooks/get-queryparams";

import { Div } from "@/components/primitives/div";
import { Text } from "@/components/primitives/text";
import { useEffect } from "react";
import useIsVisible from "@/hooks/is-visible";

export const About = ({ sectionRef }) => {
  const queryParams = useGetQueryParams();
  const { setQueryParams } = useSetQueryParams();
  const [visibleRef, isVisible] = useIsVisible({ threshold: 0.000000001 });

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
      <Text css={textSection}>Hi there!</Text>
      <Text css={textSection}>
        I’m [Your Name], your go-to frontend wizard with a knack for turning
        digital dreams into stunning realities. With over 5 years of experience
        in crafting responsive, user-centric interfaces, I’m on a mission to
        make the web not just functional, but fabulous.
      </Text>
      <Text css={textSection}>
        My adventure in tech started with an insatiable curiosity for how things
        work and a love for design that borders on obsession. I specialize in
        HTML, CSS, JavaScript, and modern frameworks, especially React. If it’s
        a challenge, I’m on it—whether it's turbocharging performance or making
        user experiences smoother than a fresh jar of Nutella.
      </Text>
      <Text css={textSection}>
        When I’m not busy coding up a storm, you’ll catch me diving into the
        latest design trends, experimenting with new tech toys, or indulging in
        [a personal hobby or interest—maybe binge-watching sci-fi or mastering
        the art of baking the perfect sourdough].
      </Text>
      <Text css={textSection}>
        Looking to turn your next project into a digital masterpiece? Let’s
        chat! I’m excited to see how we can create something amazing together.
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
