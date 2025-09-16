import React from 'react';
import { Layout, Typography, Avatar, Row, Col, Card, Divider, Space } from 'antd';
import { MailOutlined, GlobalOutlined, BuildOutlined, UserOutlined, LinkedinOutlined, GithubOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';
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
            Empowering writers, students, and professionals with AI-powered text transformation tools
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
              <Title level={2} className={styles.authorName}>Manas Ranjan</Title>
              <Text className={styles.authorRole}>Founder & Lead Developer</Text>
              <Divider className={styles.smallDivider} />

              <Space direction="vertical" size="large" className={styles.authorInfo}>
                <div className={styles.infoItem}>
                  <BuildOutlined className={styles.infoIcon} />
                  <div>
                    <Text strong>Company</Text>
                    <Paragraph>
                      Curly Braces PVT LTD<br />
                      D Block, Aakriti Apartments<br />
                      Hyderabad, Telangana, India
                    </Paragraph>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <MailOutlined className={styles.infoIcon} />
                  <div>
                    <Text strong>Email</Text>
                    <Paragraph>
                      Business: <a href="mailto:contact@llm-util.com">contact@llm-util.com</a><br />
                      Personal: <a href="mailto:me@manasranjan.dev">me@manasranjan.dev</a>
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

        <Row gutter={[20, 20]}>
          <Col xs={24} lg={12}>
            <Card className={styles.projectCard}>
              <CodeOutlined className={styles.cardIcon} />
              <Title level={3} className={styles.projectTitle}>Our Mission</Title>
              <Paragraph className={styles.projectText}>
                LLM Util was born from a simple vision: to democratize access to advanced AI text processing tools.
                We believe that everyone should have access to powerful language models that can help them
                communicate more effectively, save time on repetitive tasks, and unlock their creative potential.
              </Paragraph>
              <Paragraph className={styles.projectText}>
                Our mission is to bridge the gap between cutting-edge AI technology and everyday users, providing
                intuitive, accessible tools that anyone can use without technical expertise. We're committed to
                continuous improvement, user privacy, and delivering real value to our community.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card className={styles.projectCard}>
              <RocketOutlined className={styles.cardIcon} />
              <Title level={3} className={styles.projectTitle}>What We Offer</Title>
              <Paragraph className={styles.projectText}>
                <Text strong>Advanced AI Processing:</Text> Powered by state-of-the-art language models that
                understand context, nuance, and intent to deliver high-quality results.
              </Paragraph>
              <Paragraph className={styles.projectText}>
                <Text strong>User-Friendly Interface:</Text> Clean, intuitive design that makes complex AI
                technology accessible to everyone, regardless of technical background.
              </Paragraph>
              <Paragraph className={styles.projectText}>
                <Text strong>Privacy First:</Text> Your data is processed securely and never stored permanently.
                We respect your privacy and protect your content.
              </Paragraph>
              <Paragraph className={styles.projectText}>
                <Text strong>Continuous Innovation:</Text> Regular updates with new features, improved models,
                and enhanced capabilities based on user feedback.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Card className={styles.statsCard}>
          <Title level={3}>Why Choose LLM Util?</Title>
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={12} md={6}>
              <div className={styles.statItem}>
                <Title level={2} className={styles.statNumber}>95%+</Title>
                <Text>Accuracy Rate</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className={styles.statItem}>
                <Title level={2} className={styles.statNumber}>50+</Title>
                <Text>Languages Supported</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className={styles.statItem}>
                <Title level={2} className={styles.statNumber}>24/7</Title>
                <Text>Available Service</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className={styles.statItem}>
                <Title level={2} className={styles.statNumber}>100%</Title>
                <Text>Privacy Focused</Text>
              </div>
            </Col>
          </Row>
        </Card>

        <Card className={styles.visionCard}>
          <Title level={3}>Our Vision for the Future</Title>
          <Paragraph className={styles.projectText}>
            We envision a world where AI-powered tools enhance human creativity and productivity rather than
            replacing it. LLM Util is just the beginning of our journey to make advanced language processing
            accessible to everyone. We're constantly working on new features, including:
          </Paragraph>
          <ul className={styles.featureList}>
            <li>API access for developers and businesses</li>
            <li>Browser extensions for seamless integration</li>
            <li>Advanced writing analysis and suggestions</li>
            <li>Multi-document processing capabilities</li>
            <li>Collaborative features for teams</li>
            <li>Custom model training for specific industries</li>
          </ul>
          <Paragraph className={styles.projectText}>
            Join us on this exciting journey as we continue to push the boundaries of what's possible with
            AI-powered text processing. Your feedback and support help us build better tools for everyone.
          </Paragraph>
        </Card>
      </div>
    </MainLayout>
  );
};

export default About; 