import React, { useState } from 'react';
import { Button, Card, Typography, message } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  // Get the return URL from query parameters or default to home page
  const returnUrl = typeof router.query.returnUrl === 'string' 
    ? router.query.returnUrl 
    : '/';

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      message.success('Successfully signed in!');
      router.push(returnUrl);
    } catch (error) {
      console.error('Login error:', error);
      message.error('Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Card className={styles.loginCard}>
        <Title level={2} className={styles.loginTitle}>
          Sign in to LLM Util
        </Title>
        <Text className={styles.loginSubtitle}>
          Access AI-powered text tools and track your usage
        </Text>
        
        <Button
          type="primary"
          icon={<GoogleOutlined />}
          size="large"
          onClick={handleGoogleSignIn}
          loading={loading}
          className={styles.googleButton}
        >
          Sign in with Google
        </Button>
      </Card>
    </div>
  );
};

export default Login;
