import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { FileTextOutlined, SisternodeOutlined, TranslationOutlined } from '@ant-design/icons';
import styles from '../styles/ToolLayout.module.css';
import adStyles from '../styles/GoogleAd.module.css';
import Header from './Header';
import GoogleAd from './GoogleAd';
import { ADSENSE_CONFIG } from '../config/adsense';

const { Content, Sider } = Layout;

interface ToolLayoutProps {
  children: React.ReactNode;
}

const ToolLayout: React.FC<ToolLayoutProps> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout className={styles.contentLayout}>
        <Sider width={220} className={styles.sider} theme="dark">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            className={styles.menu}
            theme="dark"
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
          
          {/* Sidebar Ad Container */}
          <div className={adStyles.adContainerSidebar}>
            <span className={adStyles.adLabel}>Advertisement</span>
            <GoogleAd
              slot={ADSENSE_CONFIG.AD_UNITS.VERTICAL_BANNER.SLOT}
              format={ADSENSE_CONFIG.AD_UNITS.VERTICAL_BANNER.FORMAT}
              responsive={true}
            />
          </div>
        </Sider>
        
        <Content className={styles.content}>
          {/* Top Ad Container */}
          <div className={adStyles.adContainer}>
            <span className={adStyles.adLabel}>Advertisement</span>
            <GoogleAd
              slot={ADSENSE_CONFIG.AD_UNITS.HORIZONTAL_BANNER.SLOT}
              format={ADSENSE_CONFIG.AD_UNITS.HORIZONTAL_BANNER.FORMAT}
              responsive={true}
            />
          </div>
          
          {/* Main Content */}
          <div className={styles.mainContent}>
            {children}
          </div>
          
          {/* Bottom Ad Container */}
          <div className={adStyles.adContainerRectangle}>
            <span className={adStyles.adLabel}>Advertisement</span>
            <GoogleAd
              slot={ADSENSE_CONFIG.AD_UNITS.RECTANGLE.SLOT}
              format={ADSENSE_CONFIG.AD_UNITS.RECTANGLE.FORMAT}
              responsive={true}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ToolLayout;