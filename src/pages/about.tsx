import React from 'react';
import { Layout, Typography, Avatar, Row, Col, Card, Divider, Space } from 'antd';
import { MailOutlined, GlobalOutlined, BuildOutlined, UserOutlined } from '@ant-design/icons';
import styles from '../styles/About.module.css';
import MainLayout from '@/components/MainLayout';

const { Title, Paragraph, Text } = Typography;

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <Title level={1} className={styles.aboutTitle}>About LLM Util</Title>
          <Paragraph className={styles.aboutSubtitle}>
            A suite of AI-powered text utilities designed to help you write better
          </Paragraph>
          <Divider className={styles.divider} />
        </div>

        <Card className={styles.authorCard}>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} sm={8} className={styles.avatarCol}>
              <Avatar 
                size={180} 
                icon={<UserOutlined />} 
                className={styles.avatar}
              />
            </Col>
            <Col xs={24} sm={16}>
              <Title level={2} className={styles.authorName}>Manas Ranjan Nilorout</Title>
              <Divider className={styles.smallDivider} />
              
              <Space direction="vertical" size="large" className={styles.authorInfo}>
                <div className={styles.infoItem}>
                  <BuildOutlined className={styles.infoIcon} />
                  <div>
                    <Text strong>Company</Text>
                    <Paragraph>Curly Braces PVT LTD</Paragraph>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <MailOutlined className={styles.infoIcon} />
                  <div>
                    <Text strong>Email</Text>
                    <Paragraph>
                      <a href="mailto:me@manasranjan.dev">me@manasranjan.dev</a>
                    </Paragraph>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <GlobalOutlined className={styles.infoIcon} />
                  <div>
                    <Text strong>Website</Text>
                    <Paragraph>
                      <a href="https://manasranjan.dev" target="_blank" rel="noopener noreferrer">
                        manasranjan.dev
                      </a>
                    </Paragraph>
                  </div>
                </div>
              </Space>
            </Col>
          </Row>
        </Card>

        <Card className={styles.projectCard}>
          <Title level={3} className={styles.projectTitle}>About the Project</Title>
          <Paragraph className={styles.projectText}>
            LLM Util is an open-source project that provides a collection of AI-powered text utilities. 
            Built with modern web technologies and leveraging the power of large language models, 
            this project aims to simplify text processing tasks like summarization, translation, and rewriting.
          </Paragraph>
          <Paragraph className={styles.projectText}>
            Our tools are designed to be user-friendly and accessible, helping content creators, 
            students, professionals, and anyone who works with text to improve their writing 
            and save time on repetitive text processing tasks.
          </Paragraph>
        </Card>
      </div>
    </MainLayout>
  );
};

export default About; 