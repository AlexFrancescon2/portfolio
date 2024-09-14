import { Div } from "@/components/primitives/div";
import { useLanguage } from "@/assets/translations/languageProvider";
import { useLocation } from "react-router-dom";
import { useGetQueryParams, useSetQueryParams } from "@/hooks/get-queryparams";
import { Text } from "@/components/primitives/text";
import {
  Card,
  CardBody,
  CardContent,
  CardDate,
  CardFooter,
} from "@/components/shared/card";
import useIsVisible from "@/hooks/is-visible";
import { useEffect } from "react";
import { Tag } from "@/components/shared/tag";

export const Projects = ({ sectionRef }) => {
  const queryParams = useGetQueryParams();
  const { setQueryParams } = useSetQueryParams();
  const [visibleRef, isVisible] = useIsVisible({ threshold: 0.1 });

  useEffect(() => {
    isVisible && setQueryParams({ page: "projects" });
  }, [isVisible]);

  return (
    <Div css={containerStyle}>
      <div ref={sectionRef}></div>
      <div ref={visibleRef}></div>
      <Text size="xlarge" isBlock css={{ marginBottom: "$32" }}>
        Projects
      </Text>
      <Card redirect="https://fattoperwow.github.io/#/login">
        <CardBody>
          <CardContent title="Fantaasta">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <CardFooter>
              <Tag type="js">Javascript</Tag>
              <Tag type="react">React</Tag>
            </CardFooter>
          </CardContent>
        </CardBody>
      </Card>
    </Div>
  );
};

const containerStyle = {
  padding: "$48",
};

const textSection = {
  display: "block",
  marginBottom: "$16",
};
