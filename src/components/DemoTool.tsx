import React, { useState } from 'react';
import { Input, Button, Alert, message } from 'antd';
import { ReloadOutlined, InfoCircleOutlined } from '@ant-design/icons';
import ToolResult from './ToolResult';
import styles from '../styles/DemoTool.module.css';

const { TextArea } = Input;

interface DemoToolProps {
  title: string;
  placeholder: string;
  mockResults: string[];
  description: string;
  className?: string;
}

const DemoTool: React.FC<DemoToolProps> = ({
  title,
  placeholder,
  mockResults,
  description,
  className = ''
}) => {
  const [content, setContent] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDemo = async () => {
    if (!content.trim()) {
      message.error(`Please enter some text to ${title.toLowerCase()}.`);
      return;
    }

    setLoading(true);

    // Simulate API call with random delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    // Select a random mock result
    const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
    setResult(randomResult);
    setLoading(false);
  };

  const handleReset = () => {
    setContent('');
    setResult('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result).then(() => {
      message.success(`${title} copied to clipboard`);
    }).catch(() => {
      message.error('Failed to copy content');
    });
  };

  return (
    <div className={`${styles.demoContainer} ${className}`}>
      <Alert
        message="Demo Mode"
        description="This is a demonstration with mock data. Sign up for full access to our AI-powered tools."
        type="info"
        icon={<InfoCircleOutlined />}
        showIcon
        className={styles.demoAlert}
      />

      <div className={styles.description}>
        <p>{description}</p>
      </div>

      <div className={styles.inputSection}>
        <TextArea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholder}
          className={styles.textarea}
          maxLength={500}
          showCount
        />
        <div className={styles.buttonGroup}>
          <Button
            type="primary"
            onClick={handleDemo}
            disabled={loading}
            className={styles.demoButton}
          >
            Try Demo
          </Button>
          <Button onClick={handleReset} icon={<ReloadOutlined />}>
            Reset
          </Button>
        </div>
      </div>

      {loading && (
        <div className={styles.loadingSection}>
          <div className={styles.spinner}></div>
          <p>Processing your text...</p>
        </div>
      )}

      {result && (
        <ToolResult
          result={result}
          title={`Demo ${title} Result`}
          onCopy={handleCopy}
        />
      )}

      <div className={styles.upgradePrompt}>
        <h3>Want More?</h3>
        <p>
          This is just a taste of what our AI can do! Sign up for unlimited access to:
        </p>
        <ul>
          <li>Advanced AI models with higher accuracy</li>
          <li>Longer text processing (up to 10,000 characters)</li>
          <li>Multiple language options</li>
          <li>Faster processing speeds</li>
          <li>Save and manage your work</li>
          <li>No daily limits</li>
        </ul>
        <Button type="primary" size="large" className={styles.signupButton}>
          <a href="/login">Sign Up Free</a>
        </Button>
      </div>
    </div>
  );
};

export default DemoTool;