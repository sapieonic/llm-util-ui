import React, { useEffect } from 'react';
import { ADSENSE_CONFIG } from '../config/adsense';

interface GoogleAdProps {
  client?: string;
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const GoogleAd: React.FC<GoogleAdProps> = ({
  client = ADSENSE_CONFIG.CLIENT_ID,
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  style = {},
}) => {
  useEffect(() => {
    // Add Google AdSense script if it doesn't exist
    const hasAdScript = document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
    
    if (!hasAdScript) {
      // This will be handled in _app.tsx to avoid duplication
      return;
    }

    // Push the ad to Google for rendering
    try {
      // Using type assertion to avoid TypeScript error
      // The actual type is defined in src/types/adsense.d.ts
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (error) {
      console.error('Error loading Google ad:', error);
    }
  }, []);

  return (
    <div className={className} style={style}>
      <ins
        className={`adsbygoogle ${responsive ? 'adsbygoogle-responsive' : ''}`}
        style={{
          display: 'block',
          ...(responsive ? { width: '100%' } : {}),
          ...style,
        }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default GoogleAd; 