import React, { useState } from 'react';
import { Input, Button, Select, message, Collapse } from 'antd';
import { ReloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import ToolContainer from '../../components/ToolContainer';
import ProtectedRoute from '../../components/ProtectedRoute';
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
    <ProtectedRoute>
      <ToolContainer
        title="Translate Text"
        loading={loading}
        result={result}
        resultTitle="Translation"
        onCopy={handleCopy}
        className={styles.container}
      >
        <Collapse
          className={styles.guideCollapse}
          items={[{
            key: '1',
            label: (
              <span className={styles.guideLabel}>
                <QuestionCircleOutlined className={styles.guideIcon} />
                How to Use the Text Translator - Tips & Examples
              </span>
            ),
            children: (
              <div className={styles.guideContent}>
                <div className={styles.guideGrid}>
                  <div className={styles.guideCard}>
                    <h4>🌍 Global Communication</h4>
                    <p>Break language barriers in international business, travel, and personal communication with accurate translations.</p>
                  </div>
                  <div className={styles.guideCard}>
                    <h4>📚 Learning & Education</h4>
                    <p>Translate educational content, research papers, and study materials to access knowledge in different languages.</p>
                  </div>
                  <div className={styles.guideCard}>
                    <h4>💼 Business Expansion</h4>
                    <p>Localize marketing content, product descriptions, and business documents for global markets.</p>
                  </div>
                  <div className={styles.guideCard}>
                    <h4>🎯 Content Localization</h4>
                    <p>Adapt websites, apps, and digital content for different regions while maintaining cultural relevance.</p>
                  </div>
                </div>

                <div className={styles.tipsSection}>
                  <h4>💡 Tips for Better Translations</h4>
                  <ul>
                    <li><strong>Context is Key:</strong> Provide context about the subject matter, audience, and purpose of the translation</li>
                    <li><strong>Cultural Sensitivity:</strong> Consider cultural nuances and local customs when translating content</li>
                    <li><strong>Technical Terms:</strong> Specify if you need formal, technical, or casual translation style</li>
                    <li><strong>Regional Variants:</strong> Mention if you need specific regional variants (e.g., Brazilian Portuguese vs. European Portuguese)</li>
                    <li><strong>Review & Verify:</strong> Always review translations, especially for important business or legal documents</li>
                  </ul>
                </div>

                <div className={styles.languageGuide}>
                  <h4>🔄 Language Selection Guide</h4>
                  <div className={styles.languageExamples}>
                    <div className={styles.languageExample}>
                      <strong>Auto Detect:</strong> Let the system identify the source language automatically
                    </div>
                    <div className={styles.languageExample}>
                      <strong>Popular Pairs:</strong> English ↔ Spanish, French, German, Chinese, Japanese, Hindi
                    </div>
                    <div className={styles.languageExample}>
                      <strong>Regional Languages:</strong> Odia, Telugu, and other regional languages are supported
                    </div>
                  </div>
                </div>

                <div className={styles.exampleSection}>
                  <h4>📋 Example Use Cases</h4>
                  <div className={styles.exampleGrid}>
                    <div className={styles.example}>
                      <strong>Business Emails:</strong> Translate professional correspondence for international clients
                    </div>
                    <div className={styles.example}>
                      <strong>Social Media:</strong> Create multilingual posts for global audience engagement
                    </div>
                    <div className={styles.example}>
                      <strong>Travel Assistance:</strong> Translate signs, menus, and travel documents while abroad
                    </div>
                    <div className={styles.example}>
                      <strong>Academic Research:</strong> Access foreign language research papers and publications
                    </div>
                  </div>
                </div>
              </div>
            )
          }]}
        />
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
          placeholder="Enter text to translate... (e.g., 'Translate this business email to Spanish: [your content]' or 'Convert this to formal French: [text]')"
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
    </ProtectedRoute>
  );
};

export default TranslateTool;
