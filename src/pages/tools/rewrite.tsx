import React, { useState } from 'react';
import { Input, Button, Collapse } from 'antd';
import { ReloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import ToolContainer from '../../components/ToolContainer';
import ProtectedRoute from '../../components/ProtectedRoute';
import useTool from '../../hooks/useTool';
import styles from '../../styles/RewriteTool.module.css';

const { TextArea } = Input;

const RewriteTool: React.FC = () => {
  const {
    content,
    setContent,
    result,
    loading,
    handleAction: handleRewrite,
    handleReset,
    handleCopy,
  } = useTool({
    action: 'rewrite',
  });

  return (
    <ProtectedRoute>
      <ToolContainer
        title="Rewrite Text"
        loading={loading}
        result={result}
        resultTitle="Rewritten Text"
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
                How to Use the Text Rewriter - Tips & Examples
              </span>
            ),
            children: (
              <div className={styles.guideContent}>
                <div className={styles.guideGrid}>
                  <div className={styles.guideCard}>
                    <h4>✍️ Content Enhancement</h4>
                    <p>Rewrite emails, articles, or any text to improve clarity, tone, and engagement while preserving the original meaning.</p>
                  </div>
                  <div className={styles.guideCard}>
                    <h4>📝 Academic Writing</h4>
                    <p>Transform rough drafts into polished academic papers, essays, or research documents with professional language.</p>
                  </div>
                  <div className={styles.guideCard}>
                    <h4>💼 Business Communication</h4>
                    <p>Enhance proposals, reports, and professional correspondence to sound more authoritative and persuasive.</p>
                  </div>
                  <div className={styles.guideCard}>
                    <h4>🎯 SEO Optimization</h4>
                    <p>Rewrite web content to improve search engine rankings while maintaining readability and user engagement.</p>
                  </div>
                </div>

                <div className={styles.tipsSection}>
                  <h4>💡 Pro Tips for Better Results</h4>
                  <ul>
                    <li><strong>Be Specific:</strong> Include context about your target audience and desired tone</li>
                    <li><strong>Clear Goals:</strong> Mention if you want formal, casual, persuasive, or informative writing</li>
                    <li><strong>Length Preference:</strong> Specify if you want the rewrite to be shorter, longer, or similar length</li>
                    <li><strong>Key Points:</strong> Highlight important information that must be preserved</li>
                    <li><strong>Style Guide:</strong> Mention any specific writing style or format requirements</li>
                  </ul>
                </div>

                <div className={styles.exampleSection}>
                  <h4>📋 Example Use Cases</h4>
                  <div className={styles.exampleGrid}>
                    <div className={styles.example}>
                      <strong>Marketing Copy:</strong> Transform basic product descriptions into compelling sales copy
                    </div>
                    <div className={styles.example}>
                      <strong>Social Media:</strong> Rewrite posts for different platforms (LinkedIn vs. Twitter style)
                    </div>
                    <div className={styles.example}>
                      <strong>Documentation:</strong> Convert technical jargon into user-friendly instructions
                    </div>
                    <div className={styles.example}>
                      <strong>Creative Writing:</strong> Enhance stories, poems, or creative content with better flow
                    </div>
                  </div>
                </div>
              </div>
            )
          }]}
        />

        <TextArea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter text to rewrite... (e.g., 'Rewrite this email to sound more professional: Hi John, hope you're doing well. Can we meet tomorrow to discuss the project?')"
          className={styles.textarea}
        />
        <div className={styles.buttonGroup}>
          <Button type="primary" onClick={() => handleRewrite()} disabled={loading}>
            Rewrite
          </Button>
          <Button onClick={handleReset} icon={<ReloadOutlined />}>
            Reset
          </Button>
        </div>
      </ToolContainer>
    </ProtectedRoute>
  );
};

export default RewriteTool;