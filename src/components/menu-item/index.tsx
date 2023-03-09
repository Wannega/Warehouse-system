import Link, { LinkProps } from "next/link";
import { styled } from "styled-components";
import { ifProp, prop } from "styled-tools";

interface Props extends LinkProps {
  children: React.ReactNode;
  active: boolean;
  Icon: JSX.Element;
}

type StyledProps = Pick<Props, "active">;

export const MenuItem: React.FC<Props> = ({ Icon, children, ...props }) => {
  return (
    <StyledLink {...props}>
      {Icon}
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)<StyledProps>`
  padding: 15px;
  text-decoration: none;
  color: inherit;
  display: grid;
  width: auto;
  grid-template-columns: 20% auto;
  background-color: ${ifProp(
    { active: true },
    prop("theme.link.active"),
    "transparent"
  )};
  border-radius: 12.5px;
`;
