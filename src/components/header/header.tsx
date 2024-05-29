import { NextPage } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';

import logo from "@/assets/icon/dark-icon.svg"
import style from "./header.module.scss"
import Image from 'next/image';

const Header:NextPage = ():ReactNode => {
  return (
    <header className={style.header}>
      <div className='container'>
        <nav className={style.nav}>
          <Link href='/'>
            <Image height={74} src={logo} alt='logo' />
          </Link>
          <ul></ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;