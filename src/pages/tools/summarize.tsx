import React, { useState } from 'react';
import { Input, Button, Slider, Collapse } from 'antd';
import { ReloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import ToolContainer from '../../components/ToolContainer';
import ProtectedRoute from '../../components/ProtectedRoute';
import useTool from '../../hooks/useTool';
import styles from '../../styles/SummarizeTool.module.css';

const { TextArea } = Input;

const SummarizeTool: React.FC = () => {
  const [conciseness, setConciseness] = useState(5);

  const {
    content,
    setContent,
    result,
    loading,
    handleAction: handleSummarize,
    handleReset: baseHandleReset,
    handleCopy,
  } = useTool({
    action: 'summarize',
    resetState: () => setConciseness(5),
  });

  const handleReset = () => {
    baseHandleReset();
    setConciseness(5);
  };

  return (
    <ProtectedRoute>
      <ToolContainer
        title="Summarize Text"
        loading={loading}
        result={result}
        resultTitle="Summary"
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
                How to Use the Text Summarizer - Tips & Examples
              </span>
            ),
            children: (
              <div className={styles.guideContent}>
                <div className={styles.guideGrid}>
                  <div className={styles.guideCard}>
                    <h4>📚 Research & Study</h4>
                    <p>Quickly summarize academic papers, research articles, and study materials to extract key insights and main points.</p>
                  </div>
                  <div className={styles.guideCard}>
                    <h4>📰 News & Articles</h4>
                    <p>Get concise summaries of long news articles, blog posts, and reports to stay informed efficiently.</p>
                  </div>
                  <div className={styles.guideCard}>
                    <h4>💼 Business Documents</h4>
                    <p>Summarize lengthy reports, proposals, and meeting transcripts to focus on actionable insights.</p>
                  </div>
                  <div className={styles.guideCard}>
                    <h4>📖 Content Creation</h4>
                    <p>Create executive summaries, abstracts, and briefs from detailed content for different audiences.</p>
                  </div>
                </div>

                <div className={styles.tipsSection}>
                  <h4>💡 Tips for Better Summaries</h4>
                  <ul>
                    <li><strong>Clear Structure:</strong> Well-organized text produces better summaries with clear main points</li>
                    <li><strong>Conciseness Level:</strong> Adjust the slider based on your needs - lower for brief overviews, higher for detailed summaries</li>
                    <li><strong>Context Matters:</strong> Include important background information in your text for context-aware summaries</li>
                    <li><strong>Key Sections:</strong> For long documents, consider summarizing important sections separately</li>
                    <li><strong>Review & Refine:</strong> Use different conciseness levels to find the perfect summary length</li>
                  </ul>
                </div>

                <div className={styles.sliderGuide}>
                  <h4>🎚️ Understanding Conciseness Levels</h4>
                  <div className={styles.sliderExamples}>
                    <div className={styles.sliderExample}>
                      <strong>10-30 (Ultra Brief):</strong> Key points only, perfect for quick overviews
                    </div>
                    <div className={styles.sliderExample}>
                      <strong>40-60 (Balanced):</strong> Main ideas with supporting details, ideal for most use cases
                    </div>
                    <div className={styles.sliderExample}>
                      <strong>70-90 (Detailed):</strong> Comprehensive summary retaining important context and examples
                    </div>
                  </div>
                </div>

                <div className={styles.exampleSection}>
                  <h4>📋 Example Use Cases</h4>
                  <div className={styles.exampleGrid}>
                    <div className={styles.example}>
                      <strong>Academic Research:</strong> Summarize journal articles to identify methodology and findings
                    </div>
                    <div className={styles.example}>
                      <strong>Meeting Notes:</strong> Extract action items and decisions from long meeting transcripts
                    </div>
                    <div className={styles.example}>
                      <strong>Legal Documents:</strong> Create plain-language summaries of contracts and agreements
                    </div>
                    <div className={styles.example}>
                      <strong>Technical Documentation:</strong> Generate user-friendly overviews of complex technical content
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
          placeholder="Enter text to summarize... (e.g., 'Summarize this research paper: [paste your content here]' or 'Create a brief summary of this meeting transcript: [content]')"
          className={styles.textarea}
        />
        
        <div className={styles.sliderContainer}>
          <span>Conciseness Level:</span>
          <Slider
            min={10}
            max={90}
            value={conciseness}
            onChange={setConciseness}
            className={styles.slider}
            tooltip={{ formatter: (value) => `${value}` }}
          />
          <span>{conciseness}</span>
        </div>
        
        <div className={styles.buttonGroup}>
          <Button 
            type="primary" 
            onClick={() => handleSummarize({ 
              content, 
              options: { conciseness } 
            })} 
            disabled={loading}
          >
            Summarize
          </Button>
          <Button onClick={handleReset} icon={<ReloadOutlined />}>
            Reset
          </Button>
        </div>
      </ToolContainer>
    </ProtectedRoute>
  );
};

export default SummarizeTool;
