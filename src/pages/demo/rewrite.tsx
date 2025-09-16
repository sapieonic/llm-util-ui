import React from 'react';
import { Typography } from 'antd';
import DemoTool from '../../components/DemoTool';
import MainLayout from '@/components/MainLayout';
import styles from '../../styles/ToolDemo.module.css';

const { Title, Paragraph } = Typography;

const RewriteDemo: React.FC = () => {
  const mockResults = [
    "Artificial Intelligence has revolutionized text processing by enabling machines to understand, interpret, and generate human language with remarkable accuracy. This breakthrough technology allows computers to perform complex linguistic tasks that were once exclusive to human cognition.",

    "The advancement of AI in text processing has transformed how machines comprehend and produce written content. Through sophisticated algorithms, computers can now analyze context, meaning, and nuance in human language, opening new possibilities for automated writing assistance.",

    "Modern AI systems have dramatically improved text processing capabilities, allowing automated tools to understand context and generate coherent, contextually appropriate content. This technological evolution has made it possible for machines to assist with various writing tasks.",

    "Text processing through AI represents a significant leap in computational linguistics, where machines can now parse, understand, and recreate human language patterns. This innovation has enabled the development of sophisticated writing tools that can adapt to different styles and contexts."
  ];

  return (
    <MainLayout>
      <div className={styles.demoPageContainer}>
        <div className={styles.header}>
          <Title level={1} className={styles.title}>Text Rewriter Demo</Title>
          <Paragraph className={styles.subtitle}>
            Experience the power of AI-driven text rewriting. Transform your content while preserving meaning and improving clarity.
          </Paragraph>
        </div>

        <div className={styles.toolGuide}>
          <Title level={2}>How Text Rewriting Works</Title>
          <div className={styles.guideContent}>
            <div className={styles.guideSection}>
              <Title level={3}>🎯 Purpose</Title>
              <Paragraph>
                Our AI-powered text rewriter helps you rephrase content while maintaining the original meaning.
                Perfect for avoiding plagiarism, improving clarity, or creating multiple versions of the same content.
              </Paragraph>
            </div>

            <div className={styles.guideSection}>
              <Title level={3}>✨ Features</Title>
              <ul className={styles.featureList}>
                <li><strong>Intelligent Paraphrasing:</strong> Advanced AI understands context and meaning</li>
                <li><strong>Style Preservation:</strong> Maintains your intended tone and voice</li>
                <li><strong>Grammar Enhancement:</strong> Improves sentence structure and flow</li>
                <li><strong>Vocabulary Expansion:</strong> Uses varied and appropriate word choices</li>
                <li><strong>Readability Optimization:</strong> Makes text clearer and more engaging</li>
              </ul>
            </div>

            <div className={styles.guideSection}>
              <Title level={3}>💡 Best Practices</Title>
              <ul className={styles.tipsList}>
                <li>Provide clear, well-structured input text for best results</li>
                <li>Review the output to ensure it matches your intended meaning</li>
                <li>Use the rewriter for academic papers, articles, and professional content</li>
                <li>Combine with other tools for comprehensive text improvement</li>
                <li>Always fact-check technical or specialized content after rewriting</li>
              </ul>
            </div>

            <div className={styles.guideSection}>
              <Title level={3}>🎓 Use Cases</Title>
              <div className={styles.useCases}>
                <div className={styles.useCase}>
                  <strong>Academic Writing:</strong> Paraphrase sources and improve essay flow
                </div>
                <div className={styles.useCase}>
                  <strong>Content Marketing:</strong> Create multiple versions of promotional content
                </div>
                <div className={styles.useCase}>
                  <strong>Professional Communication:</strong> Enhance emails and reports
                </div>
                <div className={styles.useCase}>
                  <strong>Creative Writing:</strong> Explore different ways to express ideas
                </div>
              </div>
            </div>
          </div>
        </div>

        <DemoTool
          title="Text Rewriter"
          placeholder="Enter your text here to see how our AI can rewrite it while preserving the original meaning. Try pasting a paragraph from an article, essay, or any written content..."
          mockResults={mockResults}
          description="Try our intelligent text rewriting tool! Enter any text below and see how our AI transforms it while keeping the original meaning intact. This demo shows a sample of our capabilities."
          className={styles.demoTool}
        />

        <div className={styles.additionalInfo}>
          <Title level={2}>Why Choose LLM Util for Text Rewriting?</Title>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <Title level={4}>🚀 Advanced AI Technology</Title>
              <Paragraph>
                Powered by state-of-the-art language models that understand context, nuance, and meaning
              </Paragraph>
            </div>
            <div className={styles.benefit}>
              <Title level={4}>🎯 Maintains Original Meaning</Title>
              <Paragraph>
                Our AI ensures that the core message and intent of your text remains unchanged
              </Paragraph>
            </div>
            <div className={styles.benefit}>
              <Title level={4}>⚡ Fast & Efficient</Title>
              <Paragraph>
                Get instant results without compromising on quality or accuracy
              </Paragraph>
            </div>
            <div className={styles.benefit}>
              <Title level={4}>🔒 Privacy Focused</Title>
              <Paragraph>
                Your text is processed securely and never stored on our servers
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RewriteDemo;