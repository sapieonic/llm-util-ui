import React from 'react';
import { Layout, Typography } from 'antd';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  return (
    <AntHeader className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Title level={3} className={styles.title}>LLM Util</Title>
      </Link>
      <nav className={styles.navLinks}>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <Link href="/catalogue" className={styles.navLink}>
          Services
        </Link>
        <a href="https://manasranjan.dev" className={styles.navLink} target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </nav>
    </AntHeader>
  );
};

export default Header;
