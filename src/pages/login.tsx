import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../components/MainLayout';
import Login from '../components/Login';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  // If user is already logged in, redirect to home page or returnUrl
  useEffect(() => {
    if (currentUser) {
      const returnUrl = typeof router.query.returnUrl === 'string'
        ? router.query.returnUrl
        : '/';
      router.push(returnUrl);
    }
  }, [currentUser, router]);

  return (
    <MainLayout>
      <Login />
    </MainLayout>
  );
};

export default LoginPage;
