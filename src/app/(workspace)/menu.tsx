import { MenuItem } from "@components";
import { CompaniesIcon, PlatesIcon } from "@icons";
import { usePathname, useRouter } from "next/navigation";
import { styled } from "styled-components";

const links = [
  {
    icon: PlatesIcon,
    path: "overview",
  },
  {
    icon: CompaniesIcon,
    path: "companies",
  },
  //   {
  //     icon: null,
  //     path: "products",
  //   },
  //   {
  //     icon: null,
  //     path: "deals",
  //   },
  //   {
  //     icon: null,
  //     path: "contacts",
  //   },
  //   {
  //     icon: null,
  //     path: "reports",
  //   },
  //   {
  //     icon: null,
  //     path: "documents",
  //   },
];

export const MenuBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <Bar>
      {links.map((link) => (
        <MenuItem
          key={link.path}
          active={pathname === "/" + link.path}
          Icon={<link.icon />}
          href={"/" + link.path}
        >
          <PathName>{link.path}</PathName>
        </MenuItem>
      ))}
    </Bar>
  );
};

const Bar = styled.div`
    margin-top: 2em;
`;
const PathName = styled.p`
  text-transform: capitalize;
  font-weight: 600;
`;
