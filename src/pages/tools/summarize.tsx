import React, { useState } from 'react';
import { Input, Button, Spin, message, Slider } from 'antd';
import ReactMarkdown from 'react-markdown';
import { CopyOutlined, ReloadOutlined } from '@ant-design/icons';
import ToolLayout from '../../components/ToolLayout';
import GoogleAd from '../../components/GoogleAd';
import styles from '../../styles/SummarizeTool.module.css';
import adStyles from '../../styles/GoogleAd.module.css';
import { ADSENSE_CONFIG } from '../../config/adsense';

const { TextArea } = Input;

const SummarizeTool: React.FC = () => {
  const [content, setContent] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [conciseness, setConciseness] = useState(5);

  const handleSummarize = async () => {
    if (!content.trim()) {
      message.error('Please enter some text to summarize.');
      return;
    }

    setLoading(true);
    try {
      // API integration
      const response = await fetch('https://api.llm-util.com/api/v1/util', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          action: 'summarize',
          content,
          options: {
            conciseness,
          },
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
    setConciseness(5);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result).then(() => {
      message.success('Summary copied to clipboard');
    }).catch(() => {
      message.error('Failed to copy summary');
    });
  };

  return (
    <ToolLayout>
      <div className={styles.container}>
        <h1>Summarize Text</h1>
        <TextArea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter text to summarize..."
          className={styles.textarea}
        />
        
        <div className={styles.sliderContainer}>
          <span>Conciseness Level:</span>
          <Slider
            min={1}
            max={5}
            value={conciseness}
            onChange={setConciseness}
            className={styles.slider}
            tooltip={{ formatter: (value) => `${value}` }}
          />
          <span>{conciseness}</span>
        </div>
        
        <div className={styles.buttonGroup}>
          <Button type="primary" onClick={handleSummarize} disabled={loading}>
            Summarize
          </Button>
          <Button onClick={handleReset} icon={<ReloadOutlined />}>
            Reset
          </Button>
        </div>
        
        {loading && <Spin size="large" className={styles.spinner} />}
        
        {/* In-content Ad Container */}
        <div className={adStyles.adContainer}>
          <GoogleAd
            slot={ADSENSE_CONFIG.AD_UNITS.IN_ARTICLE.SLOT}
            format={ADSENSE_CONFIG.AD_UNITS.IN_ARTICLE.FORMAT}
            responsive={true}
          />
        </div>
        
        {result && (
          <div className={styles.result}>
            <div className={styles.resultHeader}>
              <h2>Summary</h2>
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

export default SummarizeTool; 