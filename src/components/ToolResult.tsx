import React from 'react';
import { Button } from 'antd';
import ReactMarkdown from 'react-markdown';
import { CopyOutlined } from '@ant-design/icons';
import styles from '../styles/ToolResult.module.css';

interface ToolResultProps {
  result: string;
  title: string;
  onCopy: () => void;
}

const ToolResult: React.FC<ToolResultProps> = ({ 
  result, 
  title, 
  onCopy
}) => {
  return (
    <div className={styles.result}>
      <div className={styles.resultHeader}>
        <h2>{title}</h2>
        <Button
          icon={<CopyOutlined />}
          onClick={onCopy}
          className={styles.copyButton}
        >
          Copy
        </Button>
      </div>
      <div className={styles.formattedResult}>
        <ReactMarkdown>{result}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ToolResult; 