import React from 'react';
import { Layout } from 'antd';
import Link from 'next/link';
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
            <Link href="/about" className={styles.footerLink}>About</Link>
            <Link href="/catalogue" className={styles.footerLink}>Services</Link>
            <Link href="/contact" className={styles.footerLink}>Contact</Link>
            <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
            <Link href="/terms" className={styles.footerLink}>Terms</Link>
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
