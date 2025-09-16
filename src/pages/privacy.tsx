import React from 'react';
import { Typography, Divider } from 'antd';
import MainLayout from '@/components/MainLayout';
import styles from '../styles/Legal.module.css';

const { Title, Paragraph, Text } = Typography;

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'January 16, 2025';
  const companyEmail = 'contact@llm-util.com';

  return (
    <MainLayout>
      <div className={styles.legalContainer}>
        <Title level={1}>Privacy Policy</Title>
        <Paragraph className={styles.lastUpdated}>
          Last updated: {lastUpdated}
        </Paragraph>

        <Divider />

        <section className={styles.section}>
          <Title level={2}>1. Introduction</Title>
          <Paragraph>
            Welcome to LLM Util ("we," "our," or "us"). This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our website and services
            (collectively, the "Service"). Please read this privacy policy carefully. If you do not
            agree with the terms of this privacy policy, please do not access the Service.
          </Paragraph>
          <Paragraph>
            We reserve the right to make changes to this Privacy Policy at any time and for any reason.
            We will alert you about any changes by updating the "Last updated" date of this Privacy Policy.
            You are encouraged to periodically review this Privacy Policy to stay informed of updates.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>2. Information We Collect</Title>

          <Title level={3}>Personal Information</Title>
          <Paragraph>
            When you use our Service, we may collect personal information that you voluntarily provide to us, including:
          </Paragraph>
          <ul className={styles.list}>
            <li>Name and email address (through Google Authentication)</li>
            <li>Profile picture (from your Google account)</li>
            <li>Usage data and preferences</li>
            <li>Text content you submit for processing</li>
            <li>Communication preferences</li>
          </ul>

          <Title level={3}>Automatically Collected Information</Title>
          <Paragraph>
            When you access our Service, we may automatically collect certain information about your device and usage:
          </Paragraph>
          <ul className={styles.list}>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
            <li>Device information (mobile/desktop)</li>
            <li>Usage patterns and preferences</li>
          </ul>

          <Title level={3}>Cookies and Tracking Technologies</Title>
          <Paragraph>
            We use cookies and similar tracking technologies to track activity on our Service and hold
            certain information. Cookies are files with a small amount of data which may include an
            anonymous unique identifier. You can instruct your browser to refuse all cookies or to
            indicate when a cookie is being sent.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>3. How We Use Your Information</Title>
          <Paragraph>
            We use the information we collect in the following ways:
          </Paragraph>
          <ul className={styles.list}>
            <li>To provide and maintain our Service</li>
            <li>To authenticate users and manage accounts</li>
            <li>To process your text transformation requests</li>
            <li>To track usage and improve our services</li>
            <li>To communicate with you about updates and changes</li>
            <li>To respond to your comments and questions</li>
            <li>To detect, prevent, and address technical issues</li>
            <li>To comply with legal obligations</li>
            <li>To analyze usage patterns and optimize user experience</li>
            <li>To develop new features and services</li>
          </ul>
        </section>

        <section className={styles.section}>
          <Title level={2}>4. Data Processing and AI Services</Title>
          <Paragraph>
            <Text strong>Important:</Text> The text content you submit to our tools (rewriting, summarization,
            translation) is processed using third-party AI services. While we do not permanently store your
            submitted text, it may be temporarily processed through our API partners. We recommend not submitting
            sensitive, confidential, or personally identifiable information through our text processing tools.
          </Paragraph>
          <Paragraph>
            We implement appropriate technical and organizational measures to protect your data during processing,
            including encryption in transit and secure API communications.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>5. Information Sharing and Disclosure</Title>
          <Paragraph>
            We do not sell, trade, or rent your personal information to third parties. We may share your
            information in the following situations:
          </Paragraph>
          <ul className={styles.list}>
            <li><Text strong>Service Providers:</Text> We may share your information with third-party service
                providers that perform services on our behalf (e.g., Firebase for authentication, API services
                for text processing)</li>
            <li><Text strong>Legal Requirements:</Text> We may disclose your information if required to do so
                by law or in response to valid requests by public authorities</li>
            <li><Text strong>Business Transfers:</Text> In the event of a merger, acquisition, or sale of assets,
                your information may be transferred as part of that transaction</li>
            <li><Text strong>Protection of Rights:</Text> We may disclose information to protect our rights,
                property, or safety, or that of our users or the public</li>
            <li><Text strong>Consent:</Text> We may disclose your information for any other purpose with your consent</li>
          </ul>
        </section>

        <section className={styles.section}>
          <Title level={2}>6. Third-Party Services</Title>

          <Title level={3}>Google Firebase</Title>
          <Paragraph>
            We use Google Firebase for authentication and user management. When you sign in with Google,
            Firebase processes your authentication data according to Google's Privacy Policy. You can review
            Google's privacy practices at: https://policies.google.com/privacy
          </Paragraph>

          <Title level={3}>Google AdSense</Title>
          <Paragraph>
            We may display advertisements through Google AdSense. Google uses cookies to serve ads based on
            your prior visits to our website or other websites. You can opt out of personalized advertising
            by visiting Google's Ads Settings: https://www.google.com/settings/ads
          </Paragraph>

          <Title level={3}>External APIs</Title>
          <Paragraph>
            Our text processing services utilize external API providers. While we ensure secure transmission
            of data, please review the privacy policies of any third-party services we integrate with.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>7. Data Security</Title>
          <Paragraph>
            We implement appropriate technical and organizational security measures to protect your personal
            information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure,
            or access. These measures include:
          </Paragraph>
          <ul className={styles.list}>
            <li>Encryption of data in transit using HTTPS/TLS</li>
            <li>Secure authentication through Firebase</li>
            <li>Regular security audits and updates</li>
            <li>Limited access to personal information by authorized personnel only</li>
            <li>Secure API communications with authentication tokens</li>
          </ul>
          <Paragraph>
            However, no method of transmission over the Internet or electronic storage is 100% secure, and we
            cannot guarantee absolute security of your information.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>8. Data Retention</Title>
          <Paragraph>
            We retain your personal information only for as long as necessary to fulfill the purposes for which
            it was collected, including to satisfy any legal, accounting, or reporting requirements. Text content
            submitted for processing is not permanently stored and is deleted after processing is complete.
          </Paragraph>
          <Paragraph>
            Account information is retained as long as your account is active. You may request deletion of your
            account and associated data by contacting us at {companyEmail}.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>9. Your Rights and Choices</Title>
          <Paragraph>
            Depending on your location, you may have the following rights regarding your personal information:
          </Paragraph>
          <ul className={styles.list}>
            <li><Text strong>Access:</Text> Request access to your personal information</li>
            <li><Text strong>Correction:</Text> Request correction of inaccurate or incomplete information</li>
            <li><Text strong>Deletion:</Text> Request deletion of your personal information</li>
            <li><Text strong>Portability:</Text> Request a copy of your data in a portable format</li>
            <li><Text strong>Opt-out:</Text> Opt-out of marketing communications</li>
            <li><Text strong>Withdraw Consent:</Text> Withdraw consent for data processing where applicable</li>
          </ul>
          <Paragraph>
            To exercise these rights, please contact us at {companyEmail}. We will respond to your request
            within a reasonable timeframe and in accordance with applicable laws.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>10. Children's Privacy</Title>
          <Paragraph>
            Our Service is not intended for children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us immediately at {companyEmail}.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>11. International Data Transfers</Title>
          <Paragraph>
            Your information may be transferred to and maintained on servers located outside of your jurisdiction.
            By using our Service, you consent to the transfer of your information to countries that may have
            different data protection laws than your country of residence.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>12. California Privacy Rights</Title>
          <Paragraph>
            If you are a California resident, you have additional rights under the California Consumer Privacy
            Act (CCPA), including the right to know what personal information we collect, the right to delete
            your information, and the right to opt-out of the sale of your information (which we do not do).
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>13. Changes to This Privacy Policy</Title>
          <Paragraph>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review
            this Privacy Policy periodically for any changes.
          </Paragraph>
        </section>

        <section className={styles.section}>
          <Title level={2}>14. Contact Information</Title>
          <Paragraph>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
            please contact us at:
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
          By using LLM Util, you acknowledge that you have read and understood this Privacy Policy and agree
          to its terms and conditions.
        </Paragraph>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;