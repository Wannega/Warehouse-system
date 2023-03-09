import { Button, Logo, MenuItem } from "@components";
import { DownloadIcon } from "@icons";
import { styled } from "styled-components";
import { prop } from "styled-tools";

export const OverviewPage: React.FC = () => {
  return (
    <Content>
      <Welcome>
        <div>

        <Title>Привет, Ярослав</Title>
        <Description>С возвращением в CRM систему Kallisto </Description>
        </div>
        <div>

        <Button> <DownloadIcon/> Скачать</Button>
        </div>
      </Welcome>
    </Content>
  );
};

const Content = styled.div`
  padding: 25px;
  flex: 1;
`;
const Welcome = styled.div`
display: flex;
justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 3.25ch;
`;
const Description = styled.p`
  color: gray;
  margin-top: 15px;
`;
