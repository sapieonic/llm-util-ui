import React, { useState } from 'react';
import { Input, Button, Spin, message } from 'antd';
import ReactMarkdown from 'react-markdown';
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
          <Button onClick={handleReset}>Reset</Button>
        </div>
        {loading && <Spin size="large" className={styles.spinner} />}
        {result && (
          <div className={styles.result}>
            <h2>Rewritten Text:</h2>
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
