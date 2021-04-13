import Link from "next/link";
import { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

import { theme } from "@theme/index";

type Menu = "blog" | "series" | "login";
const initMenu = {
  blog: false,
  series: false,
  login: false,
};

const Head = styled.header`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.BORDER_COLOR};
`;

const Logo = styled.div`
  margin: 27px;
  margin-left: 27px;
`;

const Menu = styled.ul`
  display: flex;
  margin: 27px;
  margin-right: 45px;
`;

const List = styled.li<{ choice?: boolean }>`
  margin-right: 20px;
  font-size: 2.1em;
  cursor: pointer;

  &.choice {
    font-weight: bold;
    color: ${theme.MAIN_COLOR};
  }
`;

function Header() {
  const [menu, setMenu] = useState(initMenu);
  const clickHandler = (menu: Menu) => setMenu({ ...initMenu, [menu]: true });

  return (
    <Head>
      <Link href="/">
        <a>
          <Logo>
            <Image
              src="/SEUNGGYU.svg"
              alt="Picture of the author"
              width={180}
              height={41}
            />
          </Logo>
        </a>
      </Link>
      <Menu>
        <Link href="/">
          <a>
            <List
              className={menu.blog ? "choice" : ""}
              onClick={() => clickHandler("blog")}
            >
              Blog
            </List>
          </a>
        </Link>
        <Link href="/series">
          <a>
            <List
              className={menu.series ? "choice" : ""}
              onClick={() => clickHandler("series")}
            >
              Series
            </List>
          </a>
        </Link>
        <Link href="/login">
          <a>
            <List
              className={menu.login ? "choice" : ""}
              onClick={() => clickHandler("login")}
            >
              Login
            </List>
          </a>
        </Link>
      </Menu>
    </Head>
  );
}

export default Header;
