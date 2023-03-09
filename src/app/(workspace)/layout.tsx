"use client";

import { Logo } from "@components";
import { styled } from "styled-components";
import { prop } from "styled-tools";
import { MenuBar } from "./menu";

interface Props {
  children: React.ReactNode;
}

export default function WorkspaceLayout({ children }: Props) {
  return (
    <Page>
      <Menu>
        <Logo />
        <MenuBar />
      </Menu>
      <Head></Head>
      <Content>{children}</Content>
    </Page>
  );
}

const Page = styled.div`
  display: grid;
  grid-template-areas: "menu head head" "menu content content" "menu content content";
  height: 100%;
  grid-template-columns: 12.5% auto;
  grid-template-rows: 6.5% auto;
`;
const Head = styled.div`
  grid-area: head;
  border-bottom: 1px solid #f0f0f0;
`;
const Menu = styled.div`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${prop('theme.workspace.menu.bg')};
  gap: 5px;
  border-right: 1px solid #f0f0f0;
`;
const Content = styled.div`
  grid-area: content;
  background-color: ${prop('theme.workspace.bg')};
  display:flex;
  padding: 25px;
`;
