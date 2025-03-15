import React, { useState } from 'react';
import { Input, Button, Spin, message, Select } from 'antd';
import ReactMarkdown from 'react-markdown';
import { CopyOutlined, ReloadOutlined } from '@ant-design/icons';
import ToolLayout from '../../components/ToolLayout';
import GoogleAd from '../../components/GoogleAd';
import styles from '../../styles/TranslateTool.module.css';
import adStyles from '../../styles/GoogleAd.module.css';
import { ADSENSE_CONFIG } from '../../config/adsense';

const { TextArea } = Input;
const { Option } = Select;

// Common languages for translation
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'nl', name: 'Dutch' },
  { code: 'sv', name: 'Swedish' },
  { code: 'tr', name: 'Turkish' },
  { code: 'pl', name: 'Polish' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'th', name: 'Thai' },
];

const TranslateTool: React.FC = () => {
  const [content, setContent] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState('auto');
  const [targetLanguage, setTargetLanguage] = useState('en');

  const handleTranslate = async () => {
    if (!content.trim()) {
      message.error('Please enter some text to translate.');
      return;
    }

    if (sourceLanguage === targetLanguage && sourceLanguage !== 'auto') {
      message.warning('Source and target languages are the same. Please select different languages.');
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
          action: 'translate',
          content,
          options: {
            sourceLanguage,
            targetLanguage,
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
    setSourceLanguage('auto');
    setTargetLanguage('en');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result).then(() => {
      message.success('Translation copied to clipboard');
    }).catch(() => {
      message.error('Failed to copy translation');
    });
  };

  const handleSwapLanguages = () => {
    if (sourceLanguage !== 'auto') {
      const temp = sourceLanguage;
      setSourceLanguage(targetLanguage);
      setTargetLanguage(temp);
    } else {
      message.info('Cannot swap when source language is set to "Auto Detect"');
    }
  };

  return (
    <ToolLayout>
      <div className={styles.container}>
        <h1>Translate Text</h1>
        <div className={styles.languageSelectors}>
          <div className={styles.languageSelector}>
            <label>From:</label>
            <Select
              value={sourceLanguage}
              onChange={setSourceLanguage}
              className={styles.select}
              dropdownClassName={styles.dropdown}
            >
              <Option value="auto">Auto Detect</Option>
              {languages.map(lang => (
                <Option key={lang.name} value={lang.name}>{lang.name}</Option>
              ))}
            </Select>
          </div>
          
          <Button 
            className={styles.swapButton} 
            onClick={handleSwapLanguages}
            icon={<span className={styles.swapIcon}>⇄</span>}
          />
          
          <div className={styles.languageSelector}>
            <label>To:</label>
            <Select
              value={targetLanguage}
              onChange={setTargetLanguage}
              className={styles.select}
              dropdownClassName={styles.dropdown}
            >
              {languages.map(lang => (
                <Option key={lang.name} value={lang.name}>{lang.name}</Option>
              ))}
            </Select>
          </div>
        </div>
        
        <TextArea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter text to translate..."
          className={styles.textarea}
        />
        
        <div className={styles.buttonGroup}>
          <Button type="primary" onClick={handleTranslate} disabled={loading}>
            Translate
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
              <h2>Translation</h2>
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

export default TranslateTool; 