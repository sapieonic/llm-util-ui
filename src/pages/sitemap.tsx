import React from 'react';
import { Card, Row, Col } from 'antd';
import {
  HomeOutlined,
  ToolOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  FileTextOutlined,
  SafetyOutlined,
  BookOutlined,
  ExperimentOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import styles from '../styles/Sitemap.module.css';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: <HomeOutlined />,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome page with overview of all tools and features' },
        { name: 'About', path: '/about', description: 'Learn about Sapionic and our mission to democratize AI tools' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our team for support and inquiries' },
        { name: 'Catalogue', path: '/catalogue', description: 'Browse all available AI tools and utilities' }
      ]
    },
    {
      title: 'AI Tools',
      icon: <ToolOutlined />,
      pages: [
        { name: 'Text Rewriter', path: '/tools/rewrite', description: 'Enhance and rewrite text for better clarity and engagement' },
        { name: 'Text Summarizer', path: '/tools/summarize', description: 'Create concise summaries of long documents and articles' },
        { name: 'Text Translator', path: '/tools/translate', description: 'Translate text between multiple languages accurately' }
      ]
    },
    {
      title: 'Demo Tools',
      icon: <ExperimentOutlined />,
      pages: [
        { name: 'Rewriter Demo', path: '/demo/rewrite', description: 'Try the text rewriter with sample content and examples' },
        { name: 'Summarizer Demo', path: '/demo/summarize', description: 'Experience text summarization with demo content' },
        { name: 'Translator Demo', path: '/demo/translate', description: 'Test translation capabilities with sample text' }
      ]
    },
    {
      title: 'Content & Resources',
      icon: <BookOutlined />,
      pages: [
        { name: 'Blog', path: '/blog', description: 'Articles about AI, writing, productivity, and technology trends' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete navigation guide to all pages and resources' }
      ]
    },
    {
      title: 'Legal & Policies',
      icon: <SafetyOutlined />,
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'How we protect and handle your personal information' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions for using our platform and services' }
      ]
    }
  ];

  return (
    <div className={styles.sitemapContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Site Navigation</h1>
        <p className={styles.subtitle}>
          Complete guide to all pages and resources available on the Sapionic platform.
          Discover our AI tools, content, and services organized by category.
        </p>
      </div>

      <div className={styles.content}>
        {siteStructure.map((section, index) => (
          <div key={index} className={styles.section}>
            <Card className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>{section.icon}</span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
              </div>

              <Row gutter={[16, 16]} className={styles.pagesGrid}>
                {section.pages.map((page, pageIndex) => (
                  <Col xs={24} sm={12} lg={8} key={pageIndex}>
                    <Link href={page.path} className={styles.pageLink}>
                      <Card className={styles.pageCard} hoverable>
                        <div className={styles.pageContent}>
                          <h3 className={styles.pageName}>{page.name}</h3>
                          <p className={styles.pageDescription}>{page.description}</p>
                          <div className={styles.pagePath}>
                            <FileTextOutlined className={styles.pathIcon} />
                            <span>{page.path}</span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Card>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <Card className={styles.footerCard}>
          <div className={styles.footerContent}>
            <h3>Quick Navigation Tips</h3>
            <div className={styles.tips}>
              <div className={styles.tip}>
                <strong>🔧 Tools:</strong> Access all AI utilities from the main navigation or catalogue page
              </div>
              <div className={styles.tip}>
                <strong>🎮 Demos:</strong> Try tools without registration using our demo versions
              </div>
              <div className={styles.tip}>
                <strong>📚 Learning:</strong> Read our blog for insights on AI and productivity
              </div>
              <div className={styles.tip}>
                <strong>📞 Support:</strong> Contact us for help, feedback, or partnership inquiries
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SitemapPage;