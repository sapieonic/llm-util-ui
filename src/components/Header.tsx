import React, { useState } from 'react';
import { Layout, Typography, Button, Avatar, Dropdown, Drawer, Menu } from 'antd';
import { UserOutlined, LogoutOutlined, LoginOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import { useAuth } from '../contexts/AuthContext';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  const { currentUser, signOut } = useAuth();
  const router = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const userMenuItems = [
    {
      key: 'profile',
      label: (
        <Link href="/profile">
          <div className={styles.menuItem}>
            <UserOutlined /> Profile
          </div>
        </Link>
      ),
    },
    {
      key: 'logout',
      label: (
        <div className={styles.menuItem} onClick={handleLogout}>
          <LogoutOutlined /> Logout
        </div>
      ),
    },
  ];

  const showMobileMenu = () => {
    setMobileMenuVisible(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <AntHeader className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Title level={3} className={styles.title}>LLM Util</Title>
      </Link>

      {/* Desktop Navigation */}
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
        
        {currentUser ? (
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <div className={styles.userAvatar}>
              {currentUser.photoURL ? (
                <Avatar src={currentUser.photoURL} size="small" />
              ) : (
                <Avatar icon={<UserOutlined />} size="small" />
              )}
              <span className={styles.userName}>{currentUser.displayName || 'User'}</span>
            </div>
          </Dropdown>
        ) : (
          <Button 
            type="primary" 
            icon={<LoginOutlined />} 
            onClick={handleLogin}
            className={styles.loginButton}
          >
            Login
          </Button>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <Button 
        type="text" 
        icon={<MenuOutlined />} 
        onClick={showMobileMenu} 
        className={styles.mobileMenuButton}
      />

      {/* Mobile Navigation Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeMobileMenu}
        open={mobileMenuVisible}
        width={250}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical">
          <Menu.Item key="home" onClick={closeMobileMenu}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about" onClick={closeMobileMenu}>
            <Link href="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="services" onClick={closeMobileMenu}>
            <Link href="/catalogue">Services</Link>
          </Menu.Item>
          <Menu.Item key="contact" onClick={closeMobileMenu}>
            <a href="https://manasranjan.dev" target="_blank" rel="noopener noreferrer">Contact</a>
          </Menu.Item>
          {currentUser ? (
            <>
              <Menu.Item key="profile" onClick={closeMobileMenu}>
                <Link href="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="logout" onClick={handleLogout}>
                Logout
              </Menu.Item>
            </>
          ) : (
            <Menu.Item key="login" onClick={() => { handleLogin(); closeMobileMenu(); }}>
              Login
            </Menu.Item>
          )}
        </Menu>
      </Drawer>
    </AntHeader>
  );
};

export default Header;
