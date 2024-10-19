import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import styles from '../styles/MainLayout.module.css';

const { Content, Footer } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content className={styles.content}>
        {children}
      </Content>
      <Footer className={styles.footer}>
        © 2023 LLM Util. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default MainLayout;
