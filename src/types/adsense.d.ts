// Type definitions for Google AdSense
interface AdsenseCommand {
  [key: string]: unknown;
}

declare global {
  interface Window {
    adsbygoogle: AdsenseCommand[];
  }
} 