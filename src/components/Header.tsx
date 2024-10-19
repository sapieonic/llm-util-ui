import React from 'react';
import { Layout, Typography, Space, Button } from 'antd';
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
      <Space>
        <Link href="/about" passHref>
          <Button type="link">About</Button>
        </Link>
        <Link href="/catalogue" passHref>
          <Button type="link">Services</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button type="link">Contact</Button>
        </Link>
      </Space>
    </AntHeader>
  );
};

export default Header;
