import { Div } from "@/components/primitives/div";
import { Text } from "@/components/primitives/text";
import { useLanguage } from "@/assets/translations/languageProvider";

export const PrivacyPolicy = () => {
  const { translations } = useLanguage();

  return (
    <div>
      <Div css={padding}>
        <Text size="large" isBlock bottomMargin>
          {translations.privacy_policy}
        </Text>
        <Text>
          {translations.privacy_policy_description_1.replace(
            "{p0}",
            "[website]"
          )}
        </Text>
      </Div>
      <Div css={padding}>
        <Text size="large" isBlock bottomMargin>
          {translations.privacy_policy_title_2}
        </Text>
        <Text>{translations.privacy_policy_description_2}</Text>
      </Div>
      <Div css={padding}>
        <Text size="large" isBlock bottomMargin>
          {translations.privacy_policy_title_3}
        </Text>
        <Text>{translations.privacy_policy_description_3}</Text>
      </Div>
      <Div css={padding}>
        <Text size="large" isBlock bottomMargin>
          {translations.privacy_policy_title_4}
        </Text>
        <Text>{translations.privacy_policy_description_4}</Text>
      </Div>
      <Div css={padding}>
        <Text size="large" isBlock bottomMargin>
          {translations.privacy_policy_title_5}
        </Text>
        <Text>{translations.privacy_policy_description_5}</Text>
      </Div>
      <Div css={padding}>
        <Text size="large" isBlock bottomMargin>
          {translations.privacy_policy_title_6}
        </Text>
        <Text>
          {translations.privacy_policy_description_6.replace(
            "{p0}",
            "[website]"
          )}
        </Text>
      </Div>
      <Div css={padding}>
        <Text size="large" isBlock bottomMargin>
          {translations.privacy_policy_title_7}
        </Text>
        <Text>
          {translations.privacy_policy_description_7.replace(
            "{p0}",
            "[website]"
          )}
        </Text>
      </Div>
    </div>
  );
};

const padding = { padding: "$24 $40" };
