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

export const Experience = ({ sectionRef }) => {
  const queryParams = useGetQueryParams();
  const { setQueryParams } = useSetQueryParams();
  const [visibleRef, isVisible] = useIsVisible({ threshold: 0.1 });

  useEffect(() => {
    isVisible && setQueryParams({ page: "experience" });
  }, [isVisible]);

  return (
    <Div css={containerStyle}>
      <div ref={sectionRef}></div>
      <div ref={visibleRef}></div>
      <Text size="xlarge" isBlock css={{ marginBottom: "$32" }}>
        My experience
      </Text>
      <Card redirect="https://www.channable.com/">
        <CardBody>
          <CardDate>2022 - Now</CardDate>
          <CardContent title="Channable" subtitle="Frontend Engineer">
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

      <Card redirect="https://www.capgemini.com/nl-nl/">
        <CardBody>
          <CardDate>2021 - 2022</CardDate>
          <CardContent title="Capgemini" subtitle="Frontend Engineer">
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
              <Tag type="vue">Vue</Tag>
              <Tag type="angular">Angular</Tag>
            </CardFooter>
          </CardContent>
        </CardBody>
      </Card>

      <Card redirect="https://nl.linkedin.com/company/appennine">
        <CardBody>
          <CardDate>2019 - 2021</CardDate>
          <CardContent title="Appennine" subtitle="Junior Fullstack Engineer">
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
              <Tag type="mysql">Mysql</Tag>
              <Tag type="php">Php</Tag>
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
