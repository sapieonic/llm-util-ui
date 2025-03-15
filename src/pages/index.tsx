import { Button, Layout, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import MainLayout from '@/components/MainLayout';
import FeatureCard from '@/components/FeatureCard';
import { features } from './catalogue';
const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <MainLayout>
      <Layout className={styles.layoutWrapper}>
        <Content className={styles.content}>
          <div className={styles.heroSection}>
            <Image 
              src="/logo.jpeg" 
              alt="Logo" 
              width={180} 
              height={180} 
              className={styles.logo} 
              priority
            />
            <Title level={1} className={styles.mainTitle} data-text="Welcome to LLM Util">Welcome to LLM Util</Title>
            <Paragraph className={styles.subtitle}>
              Harness the power of AI for text rewriting, summarization, and more.
            </Paragraph>
            <Link href="/catalogue" passHref>
              <Button type="primary" size="large" className={styles.ctaButton}>Get Started</Button>
            </Link>
          </div>
          <div className={styles.featuresSection}>
            <Title level={2}>Our Services</Title>
            <div className={styles.featureCards}>
              {features.map((feature, index) => (
                <Link href={feature.link} key={index} passHref>
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </Link>
              ))}
            </div>
          </div>
        </Content>
      </Layout>
    </MainLayout>
  );
}