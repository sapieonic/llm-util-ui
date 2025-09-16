import React from 'react';
import { Typography } from 'antd';
import DemoTool from '../../components/DemoTool';
import MainLayout from '@/components/MainLayout';
import styles from '../../styles/ToolDemo.module.css';

const { Title, Paragraph } = Typography;

const TranslateDemo: React.FC = () => {
  const mockResults = [
    "La inteligencia artificial ha revolucionado el procesamiento de texto al permitir que las máquinas comprendan, interpreten y generen lenguaje humano con una precisión notable. Esta tecnología innovadora permite a las computadoras realizar tareas lingüísticas complejas que antes eran exclusivas de la cognición humana.",

    "L'intelligence artificielle a révolutionné le traitement de texte en permettant aux machines de comprendre, d'interpréter et de générer le langage humain avec une précision remarquable. Cette technologie révolutionnaire permet aux ordinateurs d'effectuer des tâches linguistiques complexes qui étaient autrefois exclusives à la cognition humaine.",

    "Künstliche Intelligenz hat die Textverarbeitung revolutioniert, indem sie Maschinen ermöglicht, menschliche Sprache mit bemerkenswerter Genauigkeit zu verstehen, zu interpretieren und zu generieren. Diese bahnbrechende Technologie ermöglicht es Computern, komplexe sprachliche Aufgaben zu erfüllen, die einst ausschließlich der menschlichen Kognition vorbehalten waren.",

    "人工智能已经彻底改变了文本处理，使机器能够以卓越的准确性理解、解释和生成人类语言。这项突破性技术使计算机能够执行复杂的语言任务，这些任务曾经是人类认知独有的。"
  ];

  return (
    <MainLayout>
      <div className={styles.demoPageContainer}>
        <div className={styles.header}>
          <Title level={1} className={styles.title}>Language Translator Demo</Title>
          <Paragraph className={styles.subtitle}>
            Break down language barriers with our AI-powered translation tool supporting 50+ languages.
          </Paragraph>
        </div>

        <div className={styles.toolGuide}>
          <Title level={2}>How Language Translation Works</Title>
          <div className={styles.guideContent}>
            <div className={styles.guideSection}>
              <Title level={3}>🎯 Purpose</Title>
              <Paragraph>
                Our AI translator provides accurate, context-aware translations across multiple languages.
                Perfect for international communication, content localization, or learning new languages.
              </Paragraph>
            </div>

            <div className={styles.guideSection}>
              <Title level={3}>✨ Features</Title>
              <ul className={styles.featureList}>
                <li><strong>50+ Languages:</strong> Support for major world languages and dialects</li>
                <li><strong>Context Awareness:</strong> Understands cultural nuances and idioms</li>
                <li><strong>Natural Flow:</strong> Produces human-like, readable translations</li>
                <li><strong>Technical Accuracy:</strong> Handles specialized terminology correctly</li>
                <li><strong>Instant Results:</strong> Fast processing for immediate communication</li>
              </ul>
            </div>

            <div className={styles.guideSection}>
              <Title level={3}>💡 Best Practices</Title>
              <ul className={styles.tipsList}>
                <li>Use clear, grammatically correct source text</li>
                <li>Provide context for ambiguous terms or phrases</li>
                <li>Review translations for cultural appropriateness</li>
                <li>Consider regional variations for target languages</li>
                <li>Use professional review for critical translations</li>
              </ul>
            </div>

            <div className={styles.guideSection}>
              <Title level={3}>🌍 Supported Languages</Title>
              <div className={styles.languageGrid}>
                <div className={styles.languageCategory}>
                  <strong>European:</strong> English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Polish
                </div>
                <div className={styles.languageCategory}>
                  <strong>Asian:</strong> Chinese (Simplified/Traditional), Japanese, Korean, Hindi, Arabic, Thai, Vietnamese
                </div>
                <div className={styles.languageCategory}>
                  <strong>Others:</strong> Turkish, Hebrew, Swahili, Indonesian, Malay, and 30+ more languages
                </div>
              </div>
            </div>

            <div className={styles.guideSection}>
              <Title level={3}>🎓 Use Cases</Title>
              <div className={styles.useCases}>
                <div className={styles.useCase}>
                  <strong>Business Communication:</strong> Translate emails, contracts, and presentations
                </div>
                <div className={styles.useCase}>
                  <strong>Content Localization:</strong> Adapt websites and marketing materials
                </div>
                <div className={styles.useCase}>
                  <strong>Academic Research:</strong> Access foreign language papers and documents
                </div>
                <div className={styles.useCase}>
                  <strong>Travel & Tourism:</strong> Communicate while traveling internationally
                </div>
              </div>
            </div>
          </div>
        </div>

        <DemoTool
          title="Language Translator"
          placeholder="Enter text in any supported language to see how our AI translates it. Try different languages and see how context and meaning are preserved across cultures..."
          mockResults={mockResults}
          description="Test our multilingual translation capabilities! Enter text in English or any supported language and see how our AI provides accurate, contextual translations."
          className={styles.demoTool}
        />

        <div className={styles.additionalInfo}>
          <Title level={2}>Why Choose LLM Util for Translation?</Title>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <Title level={4}>🌐 Global Reach</Title>
              <Paragraph>
                Support for 50+ languages including major world languages and regional dialects
              </Paragraph>
            </div>
            <div className={styles.benefit}>
              <Title level={4}>🎭 Cultural Intelligence</Title>
              <Paragraph>
                Understands cultural context, idioms, and regional expressions for natural translations
              </Paragraph>
            </div>
            <div className={styles.benefit}>
              <Title level={4}>⚡ Real-time Processing</Title>
              <Paragraph>
                Instant translations for immediate communication and quick understanding
              </Paragraph>
            </div>
            <div className={styles.benefit}>
              <Title level={4}>🔧 Technical Precision</Title>
              <Paragraph>
                Accurate handling of technical terms, proper nouns, and specialized vocabulary
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TranslateDemo;