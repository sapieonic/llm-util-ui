import React, { ReactNode } from 'react';
import { Spin } from 'antd';
import ToolLayout from './ToolLayout';
import GoogleAd from './GoogleAd';
import adStyles from '../styles/GoogleAd.module.css';
import containerStyles from '../styles/ToolContainer.module.css';
import { ADSENSE_CONFIG, IS_ADS_ENABLED } from '../config/adsense';
import ToolResult from './ToolResult';

interface ToolContainerProps {
  title: string;
  loading: boolean;
  result: string;
  resultTitle: string;
  onCopy: () => void;
  children: ReactNode;
  className: string;
}

const ToolContainer: React.FC<ToolContainerProps> = ({
  title,
  loading,
  result,
  resultTitle,
  onCopy,
  children,
  className,
}) => {
  return (
    <ToolLayout>
      <div className={className}>
        <h1>{title}</h1>
        
        {children}
        
        {loading && <Spin size="large" className={containerStyles.spinner} />}
        
        {/* In-content Ad Container - Only rendered if ads are enabled */}
        {IS_ADS_ENABLED && (
          <div className={adStyles.adContainer}>
            <GoogleAd
              slot={ADSENSE_CONFIG.AD_UNITS.IN_ARTICLE.SLOT}
              format={ADSENSE_CONFIG.AD_UNITS.IN_ARTICLE.FORMAT}
              responsive={true}
            />
          </div>
        )}
        
        {result && (
          <ToolResult
            result={result}
            title={resultTitle}
            onCopy={onCopy}
          />
        )}
      </div>
    </ToolLayout>
  );
};

export default ToolContainer;
