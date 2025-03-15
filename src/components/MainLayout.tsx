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
    <Layout className={styles.mainLayout}>
      <Header />
      <Content className={styles.content}>
        {children}
      </Content>
      <Footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="/about" className={styles.footerLink}>About</a>
            <a href="/catalogue" className={styles.footerLink}>Services</a>
            <a href="https://manasranjan.dev" className={styles.footerLink} target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
          <div>
            LLM Util © {new Date().getFullYear()} - AI-powered text utilities
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
