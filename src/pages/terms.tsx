import React from 'react';
import { Typography, Divider } from 'antd';
import MainLayout from '@/components/MainLayout';
import styles from '../styles/Legal.module.css';

const { Title, Paragraph, Text } = Typography;

const TermsOfService: React.FC = () => {
  const lastUpdated = 'January 16, 2025';
  const companyEmail = 'contact@llm-util.com';

  return (
    <MainLayout>
      <div className={styles.legalContainer}>
        <Title level={1}>Terms of Service</Title>
        <Paragraph className={styles.lastUpdated}>
          Last updated: {lastUpdated}
        </Paragraph>

        <Divider />

        <section className={styles.section}>
          <Title level={2}>1. Agreement to Terms</Title>
          <Paragraph>
            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your")
            and LLM Util, operated by Curly Braces PVT LTD ("we," "us," or "our"), concerning your access to and use of
            the LLM Util website and services (collectively, the "Service").
          </Paragraph>
          <Paragraph>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of
            these terms, then you may not access the Service. You must be at least 13 years old to use our Service.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>2. Description of Service</Title>
          <Paragraph>
            LLM Util provides AI-powered text processing utilities including but not limited to:
          </Paragraph>
          <ul className={styles.list}>
            <li>Text rewriting and paraphrasing</li>
            <li>Text summarization</li>
            <li>Language translation</li>
            <li>Other text transformation services</li>
          </ul>
          <Paragraph>
            Our Service utilizes large language models and artificial intelligence to process and transform text
            according to your requests. The Service is provided on an "as-is" basis and we reserve the right to
            modify, suspend, or discontinue any part of the Service at any time.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>3. User Accounts</Title>

          <Title level={3}>Account Creation</Title>
          <Paragraph>
            To access certain features of our Service, you must create an account using Google Authentication.
            You are responsible for maintaining the confidentiality of your account credentials and for all
            activities that occur under your account.
          </Paragraph>

          <Title level={3}>Account Responsibilities</Title>
          <ul className={styles.list}>
            <li>Provide accurate and current information</li>
            <li>Maintain the security of your account</li>
            <li>Promptly notify us of any unauthorized use</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <Title level={3}>Account Termination</Title>
          <Paragraph>
            We reserve the right to suspend or terminate your account at any time for violations of these Terms,
            suspected fraudulent activity, extended periods of inactivity, or for any other reason at our sole discretion.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>4. Acceptable Use Policy</Title>
          <Paragraph>
            You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
          </Paragraph>
          <ul className={styles.list}>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Process content that infringes on intellectual property rights</li>
            <li>Submit content that is offensive, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
            <li>Transmit viruses, malware, or any code of a destructive nature</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Use the Service to generate spam, phishing content, or misleading information</li>
            <li>Engage in any activity that disrupts or interferes with the Service</li>
            <li>Use automated systems or bots to access the Service without permission</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Use the Service to create competing products or services</li>
            <li>Exceed reasonable usage limits or abuse the Service</li>
          </ul>
        </section>

        <section className={styles.section}>
          <Title level={2}>5. Content and Intellectual Property</Title>

          <Title level={3}>Your Content</Title>
          <Paragraph>
            You retain ownership of the content you submit to our Service for processing. By submitting content,
            you grant us a limited, non-exclusive, worldwide, royalty-free license to process, transform, and
            display your content solely for the purpose of providing the Service to you.
          </Paragraph>

          <Title level={3}>Service Content</Title>
          <Paragraph>
            The Service, including its original content, features, and functionality, is and will remain the
            exclusive property of LLM Util and its licensors. The Service is protected by copyright, trademark,
            and other intellectual property laws.
          </Paragraph>

          <Title level={3}>Output Content</Title>
          <Paragraph>
            The transformed or processed content generated by our Service ("Output") is provided to you under a
            license for your use. However, we do not guarantee the uniqueness, accuracy, or originality of the
            Output, as similar results may be generated for other users with similar inputs.
          </Paragraph>

          <Title level={3}>Feedback</Title>
          <Paragraph>
            Any feedback, suggestions, or ideas you provide about the Service become our property and may be used
            without compensation or attribution to you.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>6. Usage Limits and Restrictions</Title>
          <Paragraph>
            We may impose limits on:
          </Paragraph>
          <ul className={styles.list}>
            <li>The number of requests you can make per day/month</li>
            <li>The size of text that can be processed</li>
            <li>The storage space available for your account</li>
            <li>The processing time for requests</li>
            <li>Access to certain features based on your account type</li>
          </ul>
          <Paragraph>
            We reserve the right to modify these limits at any time. Excessive use that impacts Service performance
            for other users may result in temporary or permanent suspension of your account.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>7. Privacy and Data Protection</Title>
          <Paragraph>
            Your use of our Service is also governed by our Privacy Policy, which describes how we collect, use,
            and protect your information. By using the Service, you consent to our collection and use of information
            as described in the Privacy Policy.
          </Paragraph>
          <Paragraph>
            <Text strong>Important:</Text> Do not submit sensitive, confidential, or personally identifiable information
            through our text processing tools unless necessary, as the content may be processed through third-party
            AI services.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>8. Third-Party Services</Title>
          <Paragraph>
            Our Service may contain links to third-party websites or services that are not owned or controlled by us.
            We have no control over and assume no responsibility for the content, privacy policies, or practices of
            any third-party websites or services.
          </Paragraph>
          <Paragraph>
            We use various third-party services including:
          </Paragraph>
          <ul className={styles.list}>
            <li>Google Firebase for authentication</li>
            <li>AI/ML APIs for text processing</li>
            <li>Google AdSense for advertising (when applicable)</li>
            <li>Analytics services for usage tracking</li>
          </ul>
        </section>

        <section className={styles.section}>
          <Title level={2}>9. Disclaimers and Limitations</Title>

          <Title level={3}>No Warranty</Title>
          <Paragraph>
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND,
            EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY OF RESULTS.
          </Paragraph>

          <Title level={3}>AI-Generated Content Disclaimer</Title>
          <Paragraph>
            The Output generated by our AI-powered tools may contain errors, inaccuracies, or inappropriate content.
            We do not guarantee the accuracy, completeness, reliability, or suitability of any AI-generated content.
            You are solely responsible for reviewing and verifying any Output before use.
          </Paragraph>

          <Title level={3}>No Professional Advice</Title>
          <Paragraph>
            The Service is not intended to provide professional advice (legal, medical, financial, etc.). Any Output
            should not be relied upon as professional advice. Always consult with qualified professionals for
            specific advice related to your situation.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>10. Limitation of Liability</Title>
          <Paragraph>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, LLM UTIL AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS,
            PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY,
            OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
          </Paragraph>
          <ul className={styles.list}>
            <li>Your use or inability to use the Service</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
            <li>Any interruption or cessation of transmission to or from the Service</li>
            <li>Any bugs, viruses, or similar code transmitted through the Service</li>
            <li>Any errors or omissions in any content or Output</li>
            <li>Any loss or damage incurred as a result of your use of any content or Output from the Service</li>
          </ul>
          <Paragraph>
            IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OR USING
            THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>11. Indemnification</Title>
          <Paragraph>
            You agree to defend, indemnify, and hold harmless LLM Util and its affiliates, officers, employees,
            agents, partners, and licensors from and against any claims, liabilities, damages, judgments, awards,
            losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
          </Paragraph>
          <ul className={styles.list}>
            <li>Your violation of these Terms</li>
            <li>Your use or misuse of the Service</li>
            <li>Your violation of any third-party rights</li>
            <li>Your content submitted to the Service</li>
            <li>Your violation of any applicable laws or regulations</li>
          </ul>
        </section>

        <section className={styles.section}>
          <Title level={2}>12. Governing Law and Disputes</Title>
          <Paragraph>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where
            Curly Braces PVT LTD is incorporated, without regard to its conflict of law provisions. Any disputes
            arising from these Terms or your use of the Service shall be resolved through binding arbitration in
            accordance with the applicable arbitration rules.
          </Paragraph>
          <Paragraph>
            You waive any right to a jury trial or to participate in a class action lawsuit against us. Any claim
            must be brought in your individual capacity and not as part of any purported class or representative action.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>13. Changes to Terms</Title>
          <Paragraph>
            We reserve the right to modify or replace these Terms at any time at our sole discretion. If we make
            material changes, we will provide notice through the Service or by other means. Your continued use of
            the Service after any changes constitutes acceptance of the new Terms.
          </Paragraph>
          <Paragraph>
            It is your responsibility to review these Terms periodically for changes. The "Last updated" date at
            the top of this page indicates when the Terms were last revised.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>14. Severability and Waiver</Title>
          <Paragraph>
            If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall
            continue in full force and effect. Our failure to enforce any right or provision of these Terms shall
            not be considered a waiver of those rights.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>15. Entire Agreement</Title>
          <Paragraph>
            These Terms, together with our Privacy Policy and any other legal notices published by us on the Service,
            constitute the entire agreement between you and LLM Util regarding your use of the Service and supersede
            all prior agreements and understandings.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>16. Contact Information</Title>
          <Paragraph>
            For questions, concerns, or disputes regarding these Terms of Service, please contact us at:
          </Paragraph>
          <div className={styles.contactInfo}>
            <Paragraph>
              <Text strong>LLM Util</Text><br />
              Curly Braces PVT LTD<br />
              D Block, Aakriti Apartments<br />
              Hyderabad, Telangana, India<br />
              <br />
              <Text strong>Contact Information:</Text><br />
              Email: {companyEmail}<br />
              Owner Email: me@manasranjan.dev<br />
              Website: https://llm-util.com<br />
              Owner: Manas Ranjan<br />
              Owner Website: https://manasranjan.dev
            </Paragraph>
          </div>
        </section>

        <Divider />

        <Paragraph className={styles.footer}>
          By using LLM Util, you acknowledge that you have read, understood, and agree to be bound by these
          Terms of Service.
        </Paragraph>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;