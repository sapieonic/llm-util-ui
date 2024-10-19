import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { FileTextOutlined, SisternodeOutlined, TranslationOutlined } from '@ant-design/icons';
import styles from '../styles/ToolLayout.module.css';
import Header from './Header';

const { Content, Sider } = Layout;

interface ToolLayoutProps {
  children: React.ReactNode;
}

const ToolLayout: React.FC<ToolLayoutProps> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout className={styles.contentLayout}>
        <Sider width={200} className={styles.sider}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            className={styles.menu}
          >
            <Menu.Item key="1" icon={<FileTextOutlined />}>
              <Link href="/tools/rewrite">Rewrite Text</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<SisternodeOutlined />}>
              <Link href="/tools/summarize">Summarize</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<TranslationOutlined />}>
              <Link href="/tools/translate">Translate</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className={styles.content}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ToolLayout;