import React from 'react';
import { Card } from 'antd';
import styles from '../styles/FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <Card className={styles.card} bordered={false}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <Card.Meta title={title} description={description} />
    </Card>
  );
};

export default FeatureCard;
