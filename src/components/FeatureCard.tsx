import React from 'react';
import { Card, Button, Space } from 'antd';
import { PlayCircleOutlined, ToolOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from '../styles/FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  demoLink?: string;
  toolLink?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  demoLink,
  toolLink
}) => {
  return (
    <Card className={styles.card} bordered={false}>
      <div className={styles.cardContent}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <Card.Meta title={title} description={description} />
      </div>

      {(demoLink || toolLink) && (
        <div className={styles.cardActions}>
          <Space size="small">
            {demoLink && (
              <Link href={demoLink}>
                <Button
                  type="default"
                  size="small"
                  icon={<PlayCircleOutlined />}
                  className={styles.demoButton}
                >
                  Try Demo
                </Button>
              </Link>
            )}
            {toolLink && (
              <Link href={toolLink}>
                <Button
                  type="primary"
                  size="small"
                  icon={<ToolOutlined />}
                  className={styles.toolButton}
                >
                  Use Tool
                </Button>
              </Link>
            )}
          </Space>
        </div>
      )}
    </Card>
  );
};

export default FeatureCard;
