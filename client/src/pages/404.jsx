import { useLanguage } from "@/assets/translations/languageProvider";
import { Div } from "@/components/primitives/div";
import { Text } from "@/components/primitives/text";

export const NotFound = () => {
  const { translations } = useLanguage();
  return (
    <Div
      css={{ width: "100%", height: "100%" }}
      isFlex
      isJustifyCenter
      isAlignCenter
    >
      <Div>
        <Text center size="xlarge">
          {translations.not_found_title}
        </Text>
        <Div
          isFlex
          isJustifyCenter
          isAlignCenter
          css={{ gap: "$20", width: "100%" }}
        >
          {translations.not_found_description}
        </Div>
      </Div>
    </Div>
  );
};
