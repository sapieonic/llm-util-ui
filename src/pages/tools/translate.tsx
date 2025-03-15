import React, { useState } from 'react';
import { Input, Button, Select, message } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import ToolContainer from '../../components/ToolContainer';
import useTool from '../../hooks/useTool';
import styles from '../../styles/TranslateTool.module.css';

const { TextArea } = Input;
const { Option } = Select;

// Common languages for translation
const languages = [
  { code: 'en', name: 'English' },
  { code: 'ro', name: 'Romanian' },
  { code: 'hi', name: 'Hindi' },
  { code: 'od', name: 'Odia' },
  { code: 'te', name: 'Telugu' },
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
  { code: 'bn', name: 'Bengali' },
  { code: 'nl', name: 'Dutch' },
  { code: 'sv', name: 'Swedish' },
  { code: 'tr', name: 'Turkish' },
  { code: 'pl', name: 'Polish' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'th', name: 'Thai' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ms', name: 'Malay' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'cs', name: 'Czech' },
  { code: 'sk', name: 'Slovak' },
];

const TranslateTool: React.FC = () => {
  const [sourceLanguage, setSourceLanguage] = useState('auto');
  const [targetLanguage, setTargetLanguage] = useState('en');

  const validateInput = (content: string, options?: any) => {
    if (!content.trim()) {
      return 'Please enter some text to translate.';
    }
    
    if (options?.sourceLanguage === options?.targetLanguage && options?.sourceLanguage !== 'auto') {
      return 'Source and target languages are the same. Please select different languages.';
    }
    
    return null;
  };

  const {
    content,
    setContent,
    result,
    loading,
    handleAction: handleTranslate,
    handleReset: baseHandleReset,
    handleCopy,
  } = useTool({
    action: 'translate',
    validateInput,
    resetState: () => {
      setSourceLanguage('auto');
      setTargetLanguage('en');
    },
  });

  const handleReset = () => {
    baseHandleReset();
    setSourceLanguage('auto');
    setTargetLanguage('en');
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
    <ToolContainer
      title="Translate Text"
      loading={loading}
      result={result}
      resultTitle="Translation"
      onCopy={handleCopy}
      className={styles.container}
    >
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
        <Button 
          type="primary" 
          onClick={() => handleTranslate({ 
            content, 
            options: { 
              sourceLanguage, 
              targetLanguage 
            } 
          })} 
          disabled={loading}
        >
          Translate
        </Button>
        <Button onClick={handleReset} icon={<ReloadOutlined />}>
          Reset
        </Button>
      </div>
    </ToolContainer>
  );
};

export default TranslateTool; 