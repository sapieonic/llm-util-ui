import React from 'react';
import Link from 'next/link';
import FeatureCard from '../components/FeatureCard';
import styles from '../styles/Catalogue.module.css';
import { FileTextOutlined, SisternodeOutlined, TranslationOutlined } from '@ant-design/icons';
import MainLayout from '@/components/MainLayout';

const features = [
  {
    title: 'Text Rewriting',
    description: 'Transform your content with AI-powered rewriting tools.',
    icon: <FileTextOutlined />,
    link: '/tools/rewrite'
  },
  {
    title: 'Summarization',
    description: 'Condense lengthy texts into concise, informative summaries.',
    icon: <SisternodeOutlined />,
    link: '/tools/summarize'
  },
  {
    title: 'Language Translation',
    description: 'Break language barriers with accurate translations.',
    icon: <TranslationOutlined />,
    link: '/tools/translate'
  },
  // Add more features as needed
];

const Catalogue: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.catalogueContent}>
        <div className={styles.cardContainer}>
          {features.map((feature, index) => (
            <Link href={feature.link} key={index}>
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Catalogue;
