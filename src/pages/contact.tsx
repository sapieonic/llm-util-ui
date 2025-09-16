import React, { useState } from 'react';
import { Form, Input, Button, Typography, message, Card, Row, Col, Divider, Space } from 'antd';
import { MailOutlined, SendOutlined, MessageOutlined, UserOutlined, GlobalOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import MainLayout from '@/components/MainLayout';
import styles from '../styles/Contact.module.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);

    // For now, we'll simulate sending the message
    // In production, you would send this to your backend API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In production, you would send the email here
      // For now, we'll just show a success message
      console.log('Contact form submission:', values);

      // You could use a service like EmailJS, SendGrid, or your own backend
      message.success('Thank you for your message! We\'ll get back to you within 24 hours.');
      form.resetFields();
    } catch (error) {
      message.error('Failed to send message. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className={styles.contactContainer}>
        <div className={styles.header}>
          <Title level={1} className={styles.title}>Get in Touch</Title>
          <Paragraph className={styles.subtitle}>
            Have questions, feedback, or need assistance? We'd love to hear from you!
          </Paragraph>
        </div>

        <Row gutter={[40, 40]} className={styles.content}>
          <Col xs={24} lg={14}>
            <Card className={styles.formCard}>
              <Title level={2} className={styles.formTitle}>Send Us a Message</Title>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className={styles.contactForm}
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        { required: true, message: 'Please enter your name' },
                        { min: 2, message: 'Name must be at least 2 characters' }
                      ]}
                    >
                      <Input
                        prefix={<UserOutlined />}
                        placeholder="Your Name"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input
                        prefix={<MailOutlined />}
                        placeholder="your.email@example.com"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[
                    { required: true, message: 'Please enter a subject' },
                    { min: 5, message: 'Subject must be at least 5 characters' }
                  ]}
                >
                  <Input
                    prefix={<MessageOutlined />}
                    placeholder="What's this about?"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: 'Please enter your message' },
                    { min: 20, message: 'Message must be at least 20 characters' }
                  ]}
                >
                  <TextArea
                    rows={6}
                    placeholder="Tell us what's on your mind..."
                    showCount
                    maxLength={1000}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SendOutlined />}
                    size="large"
                    className={styles.submitButton}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          <Col xs={24} lg={10}>
            <Card className={styles.infoCard}>
              <Title level={2} className={styles.infoTitle}>Contact Information</Title>

              <Space direction="vertical" size="large" className={styles.infoContent}>
                <div className={styles.infoItem}>
                  <Title level={4}>Email Us Directly</Title>
                  <Paragraph>
                    <MailOutlined className={styles.icon} />
                    <a href="mailto:dev@llm-util.com">dev@llm-util.com</a>
                  </Paragraph>
                  <Paragraph className={styles.infoDescription}>
                    For general inquiries, support, or feedback
                  </Paragraph>
                </div>

                <Divider />

                <div className={styles.infoItem}>
                  <Title level={4}>Response Time</Title>
                  <Paragraph className={styles.infoDescription}>
                    We typically respond to all inquiries within 24-48 hours during business days.
                    For urgent matters, please mention it in your subject line.
                  </Paragraph>
                </div>

                <Divider />

                <div className={styles.infoItem}>
                  <Title level={4}>Company</Title>
                  <Paragraph>
                    <Text strong>Curly Braces PVT LTD</Text>
                  </Paragraph>
                  <Paragraph className={styles.infoDescription}>
                    D Block, Aakriti Apartments<br />
                    Hyderabad, Telangana<br />
                    India
                  </Paragraph>
                  <Paragraph className={styles.infoDescription}>
                    Building innovative AI-powered solutions for text processing and transformation.
                  </Paragraph>
                </div>

                <Divider />

                <div className={styles.infoItem}>
                  <Title level={4}>Connect With Us</Title>
                  <Space size="large">
                    <a href="https://manasranjan.dev" target="_blank" rel="noopener noreferrer">
                      <GlobalOutlined className={styles.socialIcon} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <GithubOutlined className={styles.socialIcon} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <LinkedinOutlined className={styles.socialIcon} />
                    </a>
                  </Space>
                </div>
              </Space>
            </Card>

            <Card className={styles.faqCard}>
              <Title level={3}>Common Topics</Title>
              <ul className={styles.topicsList}>
                <li>Technical Support</li>
                <li>Feature Requests</li>
                <li>Bug Reports</li>
                <li>Business Inquiries</li>
                <li>API Access</li>
                <li>Privacy Concerns</li>
                <li>Account Issues</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default ContactPage;