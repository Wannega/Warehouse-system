import { Logo, Input, Button } from "@components";
import { t } from "@i18n";
import Link from "next/link";
import styled from "styled-components";
import { prop } from "styled-tools";

export const PasswordResetPage: React.FC = () => {
  return (
    <Page>
      <Section>
        <Logo />
        <Title>{t("auth.title")}</Title>
        <Description>{t("auth.description")}</Description>
      </Section>
      <Section>
        <Form>
          <h2>Восстановление пароля</h2>
          <p>
            Введите сложный пароль, который вы не используете на других
            веб-сайтах
          </p>
          <Input placeholder="Пароль" type={"password"} />
          <Input placeholder="Повтор пароля" type={"password"} />
          <Button type="submit">Сбросить пароль</Button>
        </Form>
      </Section>
    </Page>
  );
};

const Page = styled.div`
  height: 100%;
  background-color: ${prop("theme.auth.bg")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7em;
`;
const Section = styled.div`
  width: 25vw;
`;
const Title = styled.h1`
  margin-top: 1em;
`;
const Description = styled.p`
  margin-top: 1em;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: ${prop("theme.auth.form.bg")};
  padding: 22.5px;
  border-radius: 10px;
`;
const Recover = styled(Link)`
  text-decoration: none;
  font-size: 1.5ch;
  width: fit-content;
`;
const Sep = styled.hr`
  width: 100%;
  border: none;
  background-color: #dadada;
  height: 1px;
`;
const Policy = styled.p`
  font-size: 1.25ch;
  color: #9b9b9b;
`;
