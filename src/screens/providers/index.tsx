"use client";

import { Button, Input } from "@components";
import { FilterIcon } from "@icons/filter";
import { styled } from "styled-components";

export const ProvidersPage: React.FC = () => {
  
  return (
    <Content>
      <Head>
        <h1>Поставщики</h1>
        <Actions>
          <Input type={"search"} />
          <Button>
            <FilterIcon />
            Фильтры
          </Button>
          <Button variant="filled">+ Добавить компанию</Button>
        </Actions>
      </Head>
      <Body>
        <Filters></Filters>
      </Body>
    </Content>
  );
};

const Content = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 4.5% auto;
`;
const Head = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
const Filters = styled.div`
  display: flex;
  background-color: white;
`;
const Table = styled.div`
  display: flex;
  background-color: white;
`;
