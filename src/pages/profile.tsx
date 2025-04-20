import React from 'react';
import { Card, Typography, Statistic, Row, Col, Divider, Avatar } from 'antd';
import { UserOutlined, FileTextOutlined, HistoryOutlined } from '@ant-design/icons';
import MainLayout from '../components/MainLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../contexts/AuthContext';
import styles from '../styles/Profile.module.css';

const { Title, Text } = Typography;

const ProfilePage: React.FC = () => {
  const { currentUser } = useAuth();

  // In a real application, you would fetch this data from your backend
  const mockUsageData = {
    totalTokens: 12500,
    totalRequests: 42,
    lastUsed: '2 hours ago',
  };

  return (
    <ProtectedRoute>
      <MainLayout>
        <div className={styles.profileContainer}>
          <Card className={styles.profileCard}>
            <div className={styles.userInfo}>
              {currentUser?.photoURL ? (
                <Avatar size={80} src={currentUser.photoURL} />
              ) : (
                <Avatar size={80} icon={<UserOutlined />} />
              )}
              <div className={styles.userDetails}>
                <Title level={3}>{currentUser?.displayName || 'User'}</Title>
                <Text type="secondary">{currentUser?.email}</Text>
              </div>
            </div>

            <Divider />

            <Title level={4}>Usage Statistics</Title>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={8}>
                <Statistic 
                  title="Total Tokens Used" 
                  value={mockUsageData.totalTokens} 
                  prefix={<FileTextOutlined />} 
                />
              </Col>
              <Col xs={24} sm={8}>
                <Statistic 
                  title="Total Requests" 
                  value={mockUsageData.totalRequests} 
                  prefix={<HistoryOutlined />} 
                />
              </Col>
              <Col xs={24} sm={8}>
                <Statistic 
                  title="Last Used" 
                  value={mockUsageData.lastUsed} 
                  prefix={<HistoryOutlined />} 
                />
              </Col>
            </Row>

            <Divider />

            <Title level={4}>Recent Activity</Title>
            <Text>Your recent activity will appear here.</Text>
          </Card>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
};

export default ProfilePage;
