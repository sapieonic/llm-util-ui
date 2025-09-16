import React from 'react';
import { Typography } from 'antd';
import DemoTool from '../../components/DemoTool';
import MainLayout from '@/components/MainLayout';
import styles from '../../styles/ToolDemo.module.css';

const { Title, Paragraph } = Typography;

const SummarizeDemo: React.FC = () => {
  const mockResults = [
    "AI-powered text processing has revolutionized how machines understand and generate human language. This technology enables computers to perform complex linguistic tasks with remarkable accuracy, transforming automated text processing capabilities and opening new possibilities for writing assistance tools.",

    "Modern artificial intelligence has significantly advanced text processing by allowing machines to comprehend context, meaning, and nuance in human language. These developments have led to sophisticated automated tools capable of assisting with various writing and content creation tasks.",

    "The evolution of AI in text processing represents a major breakthrough in computational linguistics, enabling machines to parse and understand human language patterns. This innovation has made it possible to develop advanced writing assistance tools that can adapt to different contexts and styles.",

    "Artificial intelligence has transformed text processing through advanced algorithms that can interpret and generate human language with high accuracy. This technology breakthrough has enabled the creation of sophisticated tools that assist with various linguistic and writing tasks."
  ];

  return (
    <MainLayout>
      <div className={styles.demoPageContainer}>
        <div className={styles.header}>
          <Title level={1} className={styles.title}>Text Summarizer Demo</Title>
          <Paragraph className={styles.subtitle}>
            Transform lengthy content into concise, informative summaries with our AI-powered summarization tool.
          </Paragraph>
        </div>

        <div className={styles.toolGuide}>
          <Title level={2}>How Text Summarization Works</Title>
          <div className={styles.guideContent}>
            <div className={styles.guideSection}>
              <Title level={3}>🎯 Purpose</Title>
              <Paragraph>
                Our AI summarizer extracts key information from long texts and creates concise summaries that
                capture the essential points. Perfect for research, studying, or quickly understanding lengthy documents.
              </Paragraph>
            </div>

            <div className={styles.guideSection}>
              <Title level={3}>✨ Features</Title>
              <ul className={styles.featureList}>
                <li><strong>Intelligent Extraction:</strong> Identifies and preserves key information</li>
                <li><strong>Context Awareness:</strong> Understands relationships between ideas</li>
                <li><strong>Adjustable Length:</strong> Creates summaries of various lengths</li>
                <li><strong>Main Points Focus:</strong> Highlights the most important concepts</li>
                <li><strong>Coherent Flow:</strong> Maintains logical structure and readability</li>
              </ul>
            </div>

            <div className={styles.guideSection}>
              <Title level={3}>💡 Best Practices</Title>
              <ul className={styles.tipsList}>
                <li>Use well-structured, coherent text for optimal results</li>
                <li>Include complete thoughts and paragraphs when possible</li>
                <li>Ensure the original text has clear main points</li>
                <li>Review summaries for accuracy and completeness</li>
                <li>Combine with other tools for comprehensive text analysis</li>
              </ul>
            </div>

            <div className={styles.guideSection}>
              <Title level={3}>🎓 Use Cases</Title>
              <div className={styles.useCases}>
                <div className={styles.useCase}>
                  <strong>Research Papers:</strong> Extract key findings and methodologies
                </div>
                <div className={styles.useCase}>
                  <strong>News Articles:</strong> Get quick overviews of current events
                </div>
                <div className={styles.useCase}>
                  <strong>Business Reports:</strong> Create executive summaries
                </div>
                <div className={styles.useCase}>
                  <strong>Academic Study:</strong> Summarize textbooks and lecture notes
                </div>
              </div>
            </div>
          </div>
        </div>

        <DemoTool
          title="Text Summarizer"
          placeholder="Paste a long article, research paper, or any lengthy text here to see how our AI creates a concise summary while preserving the key information and main points..."
          mockResults={mockResults}
          description="Experience our intelligent summarization tool! Enter lengthy text below and watch our AI extract the most important information into a clear, concise summary."
          className={styles.demoTool}
        />

        <div className={styles.additionalInfo}>
          <Title level={2}>Why Choose LLM Util for Text Summarization?</Title>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <Title level={4}>🧠 Smart Content Analysis</Title>
              <Paragraph>
                Our AI identifies key themes, arguments, and conclusions automatically
              </Paragraph>
            </div>
            <div className={styles.benefit}>
              <Title level={4}>⚡ Time-Saving Efficiency</Title>
              <Paragraph>
                Process lengthy documents in seconds instead of hours of manual reading
              </Paragraph>
            </div>
            <div className={styles.benefit}>
              <Title level={4}>🎯 Precision Accuracy</Title>
              <Paragraph>
                Maintains factual accuracy while condensing information effectively
              </Paragraph>
            </div>
            <div className={styles.benefit}>
              <Title level={4}>📊 Structured Output</Title>
              <Paragraph>
                Delivers well-organized summaries with logical flow and clear structure
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SummarizeDemo;