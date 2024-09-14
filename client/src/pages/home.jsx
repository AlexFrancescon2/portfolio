import { About } from "@/pages/about";
import { Contacts } from "@/pages/contacts";
import { Div } from "@/components/primitives/div";
import { Experience } from "@/pages/experience";
import { FixedInfo } from "@/components/shared/fixed";
import { Link } from "@/components/primitives/link";
import { Projects } from "@/pages/projects";
import { Text } from "@/components/primitives/text";
import { useGetQueryParams } from "@/hooks/get-queryparams";
import { useLanguage } from "@/assets/translations/languageProvider";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const Section = ({ children }) => {
  return (
    <section
      style={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        marginBottom: "30vh",
      }}
    >
      <div>{children}</div>
    </section>
  );
};

export const Home = () => {
  const queryParams = useGetQueryParams();
  const page = queryParams.get("page");

  // Ref
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <Div isFlex css={{ width: "100%" }}>
      <Div css={leftStyle}>
        <FixedInfo
          refsList={{
            about: aboutRef,
            experience: experienceRef,
            contacts: contactsRef,
            projects: projectsRef,
          }}
        />
      </Div>
      <Div isFlex css={{ width: "100%" }}>
        <Div
          css={{
            width: "50%",
            "@lgmax": {
              display: "none",
              width: "0%",
            },
          }}
        />
        <Div css={rightStyle}>
          <Section>
            <About sectionRef={aboutRef} />
          </Section>
          <Div css={dividerStyle} />
          <Section>
            <Experience sectionRef={experienceRef} />
          </Section>
          <Section>
            <Projects sectionRef={projectsRef} />
          </Section>
          <Section>
            <Contacts sectionRef={contactsRef} />
          </Section>
        </Div>
      </Div>
    </Div>
  );
};

const leftStyle = {
  position: "fixed",
  width: "50%",
  height: "100vh",
  "@lgmax": {
    display: "none",
    width: "0%",
  },
};
const rightStyle = {
  width: "50%",
  height: "100vh",
  "@lgmax": {
    width: "100%",
  },
};

const dividerStyle = {
  height: "1vh",
  // scrollSnapAlign: "center",
  // perspective: "500px",
};
