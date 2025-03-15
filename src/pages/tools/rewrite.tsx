import React, { useState } from 'react';
import { Input, Button, Spin, message } from 'antd';
import ReactMarkdown from 'react-markdown';
import { CopyOutlined, ReloadOutlined } from '@ant-design/icons';
import ToolLayout from '../../components/ToolLayout';
import styles from '../../styles/RewriteTool.module.css';

const { TextArea } = Input;

const RewriteTool: React.FC = () => {
  const [content, setContent] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRewrite = async () => {
    if (!content.trim()) {
      message.error('Please enter some text to rewrite.');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call for demo purposes
      // setTimeout(() => {
      //   setResult(`# Rewritten Content\n\nHere is your rewritten content with improved clarity and style:\n\n${content}\n\n## Additional Suggestions\n\n- Consider using more varied vocabulary\n- Structure your paragraphs for better flow\n- Use active voice when possible`);
      //   setLoading(false);
      // }, 2000);

      // Uncomment for real API integration
      const response = await fetch('https://api.llm-util.com/api/v1/util', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          action: 'rewrite',
          content: content,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      const { data } = result;
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error);
      message.error('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setContent('');
    setResult('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result).then(() => {
      message.success('Content copied to clipboard');
    }).catch(() => {
      message.error('Failed to copy content');
    });
  };

  return (
    <ToolLayout>
      <div className={styles.container}>
        <h1>Rewrite Text</h1>
        <TextArea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter text to rewrite..."
          className={styles.textarea}
        />
        <div className={styles.buttonGroup}>
          <Button type="primary" onClick={handleRewrite} disabled={loading}>
            Rewrite
          </Button>
          <Button onClick={handleReset} icon={<ReloadOutlined />}>
            Reset
          </Button>
        </div>
        {loading && <Spin size="large" className={styles.spinner} />}
        {result && (
          <div className={styles.result}>
            <div className={styles.resultHeader}>
              <h2>Rewritten Text</h2>
              <Button
                icon={<CopyOutlined />}
                onClick={handleCopy}
                className={styles.copyButton}
              >
                Copy
              </Button>
            </div>
            <div className={styles.formattedResult}>
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default RewriteTool;
