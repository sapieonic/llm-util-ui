// Google AdSense Configuration
// Replace these values with your actual AdSense publisher ID and ad unit IDs

export const ADSENSE_CONFIG = {
  // Publisher ID
  CLIENT_ID: 'ca-pub-9716996261393919',
  
  // Ad Units
  AD_UNITS: {
    // Horizontal banner (728x90)
    HORIZONTAL_BANNER: {
      SLOT: '1234567890',
      FORMAT: 'horizontal',
    },
    
    // Rectangle (300x250)
    RECTANGLE: {
      SLOT: '0987654321',
      FORMAT: 'rectangle',
    },
    
    // Vertical banner (160x600)
    VERTICAL_BANNER: {
      SLOT: '1357924680',
      FORMAT: 'vertical',
    },
    
    // In-article ad
    IN_ARTICLE: {
      SLOT: '2468013579',
      FORMAT: 'fluid',
    },
  },
};

export default ADSENSE_CONFIG; 