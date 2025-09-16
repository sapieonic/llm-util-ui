// Google AdSense Configuration
// Replace these values with your actual AdSense publisher ID and ad unit IDs

// Check if ads are enabled via environment variable
// Defaults to false if not specified
export const IS_ADS_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ADS === 'true';

export const ADSENSE_CONFIG = {
  // Publisher ID
  CLIENT_ID: 'ca-pub-9716996261393919',

  // Ad Units - You'll need to create these in your Google AdSense account
  AD_UNITS: {
    // Horizontal banner (728x90) - For page headers
    HORIZONTAL_BANNER: {
      SLOT: '662346343',
      FORMAT: 'auto',
      FULL_WIDTH: true,
    },

    // Rectangle (336x280) - For content areas
    RECTANGLE: {
      SLOT: '8451550405',
      FORMAT: 'auto',
      FULL_WIDTH: true,
    },

    // Vertical banner (160x600) - For sidebars
    VERTICAL_BANNER: {
      SLOT: '5797413002',
      FORMAT: 'vertical',
      FULL_WIDTH: false,
    },

    // In-feed ad - For between list items
    IN_FEED: {
      SLOT: '4835685127',
      FORMAT: 'fluid',
      LAYOUT_KEY: '-6t+ed+2i-1n-4w',
    },

    // In-article ad - For within content
    IN_ARTICLE: {
      SLOT: '6779322187',
      FORMAT: 'fluid',
      LAYOUT: 'in-article',
      FULL_WIDTH: true,
    },

    // Multiplex ad - For displaying multiple ads
    MULTIPLEX: {
      SLOT: '4512305396',
      FORMAT: 'autorelaxed',
      FULL_WIDTH: true,
    },
  },

  // Ad placement strategies for different page types
  PLACEMENT_STRATEGY: {
    HOME_PAGE: ['HORIZONTAL_BANNER', 'IN_FEED', 'RECTANGLE'],
    TOOL_PAGE: ['HORIZONTAL_BANNER', 'IN_ARTICLE', 'RECTANGLE'],
    CATALOGUE_PAGE: ['HORIZONTAL_BANNER', 'IN_FEED', 'MULTIPLEX'],
    ABOUT_PAGE: ['HORIZONTAL_BANNER', 'RECTANGLE'],
    PROFILE_PAGE: ['RECTANGLE'],
  },
};

export default ADSENSE_CONFIG;
