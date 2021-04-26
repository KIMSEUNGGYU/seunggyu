import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Image from 'next/image';

import { theme } from '@theme/index';

import { useRecoilState } from 'recoil';
import { isLoginState } from '@state/index';

function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [activeMenu, setActiveMenu] = useState('blog');

  useEffect(() => {
    const pathName = router.pathname;
    pathName === '/' ? setActiveMenu('blog') : setActiveMenu(pathName.slice(1));
  }, [router.pathname]);

  const logout = () => {
    localStorage.removeItem('seunggyu');
    setIsLogin(false);
  };

  const goLink = ({ target }: any) => {
    switch (target.dataset.name) {
      case 'logo':
      case 'blog':
        router.push('/');
        break;
      case 'series':
        router.push('/series');
        break;
      case 'login':
        router.push('/login');
        break;
      case 'write':
        router.push('/write');
        break;
      default:
        throw new Error(`제공하지 않은 메뉴: ${target.dataset.name}`);
    }
  };

  return (
    <Head>
      <Logo>
        <Image
          data-name="logo"
          src="/SEUNGGYU.svg"
          alt="Picture of the author"
          width={180}
          height={41}
          onClick={goLink}
        />
      </Logo>
      <Menu>
        <List data-name="blog" className={activeMenu === 'blog' ? 'active' : ''} onClick={goLink}>
          Blog
        </List>

        <List
          data-name="series"
          className={activeMenu === 'series' ? 'active' : ''}
          onClick={goLink}
        >
          Series
        </List>

        {isLogin ? (
          <>
            <List
              data-name="write"
              className={activeMenu === 'write' ? 'active' : ''}
              onClick={goLink}
            >
              write
            </List>
            <span onClick={logout}>Logout</span>
          </>
        ) : (
          <List
            data-name="login"
            className={activeMenu === 'login' ? 'active' : ''}
            onClick={goLink}
          >
            Login
          </List>
        )}
      </Menu>
    </Head>
  );
}

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
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  margin: 27px;
  margin-right: 45px;
`;

const List = styled.li<{ active?: boolean }>`
  margin-right: 20px;
  font-size: 2.1em;
  cursor: pointer;

  &.active {
    color: ${theme.MAIN_COLOR};
  }
`;

export default Header;
