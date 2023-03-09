import { t } from "@i18n";
import { LogoIcon } from "@icons";
import { styled } from "styled-components";

export const Logo: React.FC = () => {
  return (
    <Box>
      <LogoIcon />
      <Title>{t("general.name")}</Title>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 7.5px;
`;
const Title = styled.h1`
font-size: 2.25ch;
`;
