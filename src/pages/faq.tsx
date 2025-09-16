import React from 'react';
import { Collapse, Typography, Divider } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import MainLayout from '@/components/MainLayout';
import styles from '../styles/FAQ.module.css';

const { Panel } = Collapse;
const { Title, Paragraph, Text } = Typography;

const FAQPage: React.FC = () => {
  const generalQuestions = [
    {
      key: '1',
      question: 'What is LLM Util?',
      answer: `LLM Util is a comprehensive suite of AI-powered text processing tools designed to help you write better, save time, and enhance productivity. Our platform offers tools for text rewriting, summarization, translation, and more, all powered by advanced large language models (LLMs). Whether you're a student, professional writer, content creator, or business professional, our tools help you transform and improve your text with just a few clicks.`
    },
    {
      key: '2',
      question: 'How does LLM Util work?',
      answer: `LLM Util leverages state-of-the-art artificial intelligence and natural language processing technologies to understand and transform your text. When you submit text to our tools, it's processed through advanced AI models that have been trained on vast amounts of text data. These models understand context, grammar, style, and meaning, allowing them to rewrite, summarize, or translate your content while preserving the original intent. The process is fast, accurate, and continuously improving through machine learning.`
    },
    {
      key: '3',
      question: 'Is LLM Util free to use?',
      answer: `LLM Util offers a freemium model. Basic features are available for free with daily usage limits, allowing you to try our tools and use them for personal projects. For professional use, higher limits, and advanced features, we offer premium subscription plans. You can start using our tools immediately after creating a free account with Google sign-in. Check our pricing page for detailed information about plans and features.`
    },
    {
      key: '4',
      question: 'Do I need to create an account?',
      answer: `Yes, you need to create an account to use our text processing tools. We use Google Authentication for a quick, secure sign-up process - no need to remember another password! Creating an account allows us to track your usage, save your preferences, and provide you with a personalized experience. It also helps us maintain service quality and prevent abuse of our AI resources.`
    },
    {
      key: '5',
      question: 'Is my data safe and private?',
      answer: `Absolutely! We take your privacy and data security very seriously. Your text is processed securely through encrypted connections, and we don't permanently store the content you submit for processing. We use industry-standard security measures including HTTPS encryption, secure authentication through Firebase, and regular security audits. For complete details, please review our comprehensive Privacy Policy and Terms of Service.`
    }
  ];

  const toolQuestions = [
    {
      key: '6',
      question: 'What is the Text Rewriter tool?',
      answer: `The Text Rewriter tool uses AI to rephrase and restructure your content while maintaining the original meaning. It's perfect for avoiding plagiarism, improving clarity, adjusting tone, or creating multiple versions of the same content. The tool understands context and nuance, ensuring that rewritten text sounds natural and professional. You can use it for essays, articles, emails, social media posts, and any other written content.`
    },
    {
      key: '7',
      question: 'How does the Summarization tool work?',
      answer: `Our Summarization tool analyzes your text and extracts the most important information, creating concise summaries that capture the essence of your content. It's ideal for condensing long articles, research papers, reports, or documents into digestible summaries. The AI identifies key points, main arguments, and essential details while removing redundant information. You can use it to quickly understand lengthy content or create executive summaries.`
    },
    {
      key: '8',
      question: 'What languages does the Translation tool support?',
      answer: `Our Translation tool supports over 50 languages including all major languages like English, Spanish, French, German, Chinese, Japanese, Arabic, Hindi, and many more. The AI-powered translation goes beyond word-for-word translation, understanding context, idioms, and cultural nuances to provide accurate, natural-sounding translations. It's suitable for documents, websites, emails, and any text that needs to be understood across language barriers.`
    },
    {
      key: '9',
      question: 'Can I use the tools for commercial purposes?',
      answer: `Yes, you can use LLM Util tools for commercial purposes! Our tools are designed to support professionals, businesses, and organizations. However, please ensure you comply with our Terms of Service. The output from our tools can be used in your commercial projects, marketing materials, business documents, and client work. For high-volume commercial use, we recommend our business plans which offer higher limits and priority processing.`
    },
    {
      key: '10',
      question: 'What are the usage limits?',
      answer: `Usage limits vary based on your account type. Free accounts have daily limits on the number of requests and the length of text that can be processed. These limits are designed to ensure fair usage and service availability for all users. Premium accounts offer significantly higher or unlimited usage, depending on the plan. Current limits are displayed in your account dashboard, and you'll receive notifications when approaching your limits.`
    }
  ];

  const technicalQuestions = [
    {
      key: '11',
      question: 'What AI technology powers LLM Util?',
      answer: `LLM Util utilizes cutting-edge large language models (LLMs) and transformer-based neural networks, similar to technologies like GPT, BERT, and other state-of-the-art models. These models have been trained on diverse text datasets to understand and generate human-like text. We continuously update our models to incorporate the latest advances in AI and natural language processing, ensuring you get the best possible results.`
    },
    {
      key: '12',
      question: 'How accurate are the AI-generated results?',
      answer: `Our AI models achieve high accuracy rates, typically above 95% for most use cases. However, accuracy can vary depending on the complexity of the text, language, and specific requirements. While our tools are highly sophisticated, we always recommend reviewing the output, especially for critical documents. The AI excels at understanding context and maintaining meaning, but human review ensures perfection for professional use.`
    },
    {
      key: '13',
      question: 'Can I integrate LLM Util with other tools?',
      answer: `Currently, LLM Util is available as a web application accessible through any modern browser. We're working on developing API access and integrations with popular tools like Google Docs, Microsoft Word, and content management systems. Business and enterprise customers can contact us for custom integration solutions. Stay tuned for updates on our API and plugin releases!`
    },
    {
      key: '14',
      question: 'What file formats are supported?',
      answer: `Currently, LLM Util accepts plain text input directly through our web interface. You can copy and paste content from any document format (Word, PDF, Google Docs, etc.) into our tools. The output is provided as text that you can copy and use in any application. We're working on adding direct file upload support for common formats like .docx, .pdf, .txt, and .rtf in future updates.`
    },
    {
      key: '15',
      question: 'Is there an API available?',
      answer: `We're actively developing a comprehensive RESTful API for developers and businesses who want to integrate our text processing capabilities into their applications. The API will support all our tools with simple HTTP requests and JSON responses. If you're interested in early access to our API or have specific integration needs, please contact us at dev@llm-util.com.`
    }
  ];

  const troubleshootingQuestions = [
    {
      key: '16',
      question: 'Why is my text not processing?',
      answer: `If your text isn't processing, try these solutions: 1) Check your internet connection, 2) Ensure you're logged in to your account, 3) Verify you haven't exceeded your daily usage limits, 4) Make sure your text isn't empty or too long (check the character limit), 5) Try refreshing the page and resubmitting. If problems persist, clear your browser cache or try a different browser. Contact support if the issue continues.`
    },
    {
      key: '17',
      question: 'How do I report a bug or issue?',
      answer: `To report a bug or technical issue, please contact us through our Contact page or email dev@llm-util.com. Include details such as: the tool you were using, the text you were processing (if not sensitive), any error messages you received, your browser and operating system, and steps to reproduce the issue. Screenshots are helpful! We typically respond within 24-48 hours and appreciate your help in improving our service.`
    },
    {
      key: '18',
      question: 'Can I delete my account and data?',
      answer: `Yes, you have full control over your account and data. To delete your account, email us at dev@llm-util.com with your account deletion request. We'll process your request within 72 hours. This will permanently delete your account information, usage history, and any stored preferences. Note that text you've processed is not permanently stored, so there's no content data to delete. You can create a new account anytime in the future.`
    },
    {
      key: '19',
      question: 'Why am I seeing an authentication error?',
      answer: `Authentication errors usually occur due to: 1) Session timeout - try logging in again, 2) Browser cookies disabled - enable cookies for our site, 3) Multiple tabs/devices - log out from other sessions, 4) Network issues - check your connection, 5) Ad blockers or privacy extensions - whitelist our domain. If you continue to experience issues, try signing out completely and signing back in with Google.`
    },
    {
      key: '20',
      question: 'How do I provide feedback or suggestions?',
      answer: `We love hearing from our users! Share your feedback, feature requests, or suggestions through our Contact page or email dev@llm-util.com. We review all feedback carefully and use it to guide our product development. Many of our best features come from user suggestions. You can also follow us on social media for updates and to join our community discussions about new features and improvements.`
    }
  ];

  return (
    <MainLayout>
      <div className={styles.faqContainer}>
        <div className={styles.header}>
          <QuestionCircleOutlined className={styles.headerIcon} />
          <Title level={1} className={styles.title}>Frequently Asked Questions</Title>
          <Paragraph className={styles.subtitle}>
            Find answers to common questions about LLM Util and our AI-powered text tools
          </Paragraph>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <Title level={2} className={styles.sectionTitle}>General Questions</Title>
            <Collapse
              bordered={false}
              className={styles.collapse}
              expandIconPosition="end"
            >
              {generalQuestions.map(item => (
                <Panel
                  header={<Text strong>{item.question}</Text>}
                  key={item.key}
                  className={styles.panel}
                >
                  <Paragraph className={styles.answer}>{item.answer}</Paragraph>
                </Panel>
              ))}
            </Collapse>
          </section>

          <Divider />

          <section className={styles.section}>
            <Title level={2} className={styles.sectionTitle}>About Our Tools</Title>
            <Collapse
              bordered={false}
              className={styles.collapse}
              expandIconPosition="end"
            >
              {toolQuestions.map(item => (
                <Panel
                  header={<Text strong>{item.question}</Text>}
                  key={item.key}
                  className={styles.panel}
                >
                  <Paragraph className={styles.answer}>{item.answer}</Paragraph>
                </Panel>
              ))}
            </Collapse>
          </section>

          <Divider />

          <section className={styles.section}>
            <Title level={2} className={styles.sectionTitle}>Technical Questions</Title>
            <Collapse
              bordered={false}
              className={styles.collapse}
              expandIconPosition="end"
            >
              {technicalQuestions.map(item => (
                <Panel
                  header={<Text strong>{item.question}</Text>}
                  key={item.key}
                  className={styles.panel}
                >
                  <Paragraph className={styles.answer}>{item.answer}</Paragraph>
                </Panel>
              ))}
            </Collapse>
          </section>

          <Divider />

          <section className={styles.section}>
            <Title level={2} className={styles.sectionTitle}>Troubleshooting & Support</Title>
            <Collapse
              bordered={false}
              className={styles.collapse}
              expandIconPosition="end"
            >
              {troubleshootingQuestions.map(item => (
                <Panel
                  header={<Text strong>{item.question}</Text>}
                  key={item.key}
                  className={styles.panel}
                >
                  <Paragraph className={styles.answer}>{item.answer}</Paragraph>
                </Panel>
              ))}
            </Collapse>
          </section>

          <div className={styles.stillNeedHelp}>
            <Title level={3}>Still Have Questions?</Title>
            <Paragraph>
              Can't find the answer you're looking for? Our support team is here to help!
            </Paragraph>
            <a href="/contact" className={styles.contactButton}>
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQPage;