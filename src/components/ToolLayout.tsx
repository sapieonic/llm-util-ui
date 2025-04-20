import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FileTextOutlined, SisternodeOutlined, TranslationOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import styles from '../styles/ToolLayout.module.css';
import adStyles from '../styles/GoogleAd.module.css';
import Header from './Header';
import GoogleAd from './GoogleAd';
import { ADSENSE_CONFIG, IS_ADS_ENABLED } from '../config/adsense';

const { Content, Sider } = Layout;

interface ToolLayoutProps {
  children: React.ReactNode;
}

const ToolLayout: React.FC<ToolLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the screen is mobile size on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setCollapsed(true);
      }
    };
    
    // Check on mount
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Determine which menu item should be selected based on the current path
  const getSelectedKey = () => {
    const path = router.pathname;
    if (path.includes('/tools/rewrite')) return '1';
    if (path.includes('/tools/summarize')) return '2';
    if (path.includes('/tools/translate')) return '3';
    return '1'; // Default to rewrite if path doesn't match
  };

  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout className={styles.contentLayout}>
        <Sider 
          width={220} 
          className={styles.sider} 
          theme="dark"
          collapsible
          collapsed={collapsed}
          collapsedWidth={isMobile ? 0 : 80}
          trigger={null}
        >
          <Menu
            mode="inline"
            selectedKeys={[getSelectedKey()]}
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
          
          {/* Sidebar Ad Container - Only rendered if ads are enabled and sidebar is not collapsed */}
          {IS_ADS_ENABLED && !collapsed && (
            <div className={adStyles.adContainerSidebar}>
              <GoogleAd
                slot={ADSENSE_CONFIG.AD_UNITS.VERTICAL_BANNER.SLOT}
                format={ADSENSE_CONFIG.AD_UNITS.VERTICAL_BANNER.FORMAT}
                responsive={true}
              />
            </div>
          )}
        </Sider>
        
        <Layout className={styles.innerContentLayout}>
          {/* Collapse toggle button */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className={styles.collapseButton}
          />
          
          <Content className={styles.content}>
            {/* Top Ad Container - Only rendered if ads are enabled */}
            {IS_ADS_ENABLED && (
              <div className={adStyles.adContainer}>
                <GoogleAd
                  slot={ADSENSE_CONFIG.AD_UNITS.HORIZONTAL_BANNER.SLOT}
                  format={ADSENSE_CONFIG.AD_UNITS.HORIZONTAL_BANNER.FORMAT}
                  responsive={true}
                />
              </div>
            )}
            
            {/* Main Content */}
            <div className={styles.mainContent}>
              {children}
            </div>
            
            {/* Bottom Ad Container - Only rendered if ads are enabled */}
            {IS_ADS_ENABLED && (
              <div className={adStyles.adContainerRectangle}>
                <GoogleAd
                  slot={ADSENSE_CONFIG.AD_UNITS.RECTANGLE.SLOT}
                  format={ADSENSE_CONFIG.AD_UNITS.RECTANGLE.FORMAT}
                  responsive={true}
                />
              </div>
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ToolLayout;
