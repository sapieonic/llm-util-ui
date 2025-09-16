# Google AdSense Integration Guide

## Overview
This application is configured to display Google AdSense advertisements throughout the site to generate revenue. The ad system is fully integrated and can be toggled on/off via environment variables.

## Current Status
✅ **Ads are now ENABLED** in the application

## Configuration

### Environment Variable
The ad system is controlled by a single environment variable in `.env.local`:
```
NEXT_PUBLIC_ENABLE_ADS=true
```
- Set to `true` to enable ads
- Set to `false` to disable ads

### AdSense Configuration
Located in `/src/config/adsense.ts`:
- **Publisher ID**: `ca-pub-9716996261393919`
- **Ad Units**: Multiple ad formats configured for different placements

## Ad Placements

### **Tool Pages Only** (`/tools/*`)
**Ads are configured to load ONLY on tool pages** as per business requirements:

- **Top Banner**: Horizontal banner (728x90) below the header
- **Sidebar**: Vertical banner (160x600) in the navigation sidebar
- **In-Content**: Fluid ad between input and output sections
- **Bottom**: Rectangle ad (336x280) at the bottom

### **No Ads on Other Pages**
- **Home Page**: Clean, ad-free experience
- **About Page**: No advertisements
- **Contact Page**: No advertisements
- **Legal Pages**: No advertisements
- **Demo Pages**: No advertisements

This focused approach ensures ads only appear when users are actively using the core tools, maximizing relevance and user experience.

## Ad Types Configured

1. **HORIZONTAL_BANNER**: Full-width responsive banner ads
2. **RECTANGLE**: Medium rectangle ads for content areas
3. **VERTICAL_BANNER**: Skyscraper ads for sidebars
4. **IN_FEED**: Native ads that blend with content
5. **IN_ARTICLE**: Fluid ads for article content
6. **MULTIPLEX**: Multiple ad units in one placement

## Responsive Behavior

### Desktop
- All ad placements visible
- Optimal sizes for larger screens
- Sidebar ads displayed

### Mobile (≤768px)
- Sidebar ads hidden
- Reduced ad container heights
- Responsive sizing for mobile screens

### Small Mobile (≤480px)
- Further reduced ad container heights
- Optimized for small screen real estate

## Implementation Details

### Components
1. **GoogleAd Component** (`/src/components/GoogleAd.tsx`)
   - Reusable ad component
   - Handles AdSense script loading
   - Responsive by default
   - Only renders when ads are enabled

2. **MainLayout** (`/src/components/MainLayout.tsx`)
   - Integrated top and bottom ad placements
   - Configurable via props (`showTopAd`, `showBottomAd`)

3. **ToolLayout** (`/src/components/ToolLayout.tsx`)
   - Sidebar ads for tool pages
   - Multiple ad placements

4. **ToolContainer** (`/src/components/ToolContainer.tsx`)
   - In-content ads for tool pages

### Styling
- Ad styles in `/src/styles/GoogleAd.module.css`
- Semi-transparent containers with rounded corners
- Consistent spacing and sizing
- Dark theme compatible

## Revenue Optimization Tips

1. **Ad Density**: Current setup maintains good balance between content and ads
2. **Placement Strategy**: Ads placed at natural break points in content
3. **User Experience**: Ads don't interfere with core functionality
4. **Mobile Optimization**: Responsive design ensures ads work on all devices

## Testing Checklist

- [x] Environment variable toggles ads on/off
- [x] AdSense script loads when ads enabled
- [x] All ad placements render correctly
- [x] Responsive behavior works on mobile
- [x] Build completes without errors
- [x] No console errors related to ads

## Next Steps for Production

1. **Create AdSense Account** (if not already done)
2. **Generate Ad Unit IDs** in Google AdSense dashboard
3. **Update Ad Slot IDs** in `/src/config/adsense.ts` with real IDs
4. **Verify Domain** in AdSense account settings
5. **Test Ads** with real ad units in production
6. **Monitor Performance** through AdSense dashboard

## Important Notes

- Ads only show when `NEXT_PUBLIC_ENABLE_ADS=true`
- Ad containers have minimum heights to prevent layout shift
- All ads are responsive and mobile-friendly
- AdSense script only loads when ads are enabled (performance optimization)
- Current ad slot IDs are placeholders - replace with real ones from AdSense

## Troubleshooting

If ads don't appear:
1. Check environment variable is set to `true`
2. Verify AdSense account is approved
3. Ensure domain is verified in AdSense
4. Check browser console for errors
5. Disable ad blockers for testing
6. Wait 24-48 hours for new ad units to start serving