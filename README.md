# LLM Util - AI-Powered Text Utilities

LLM Util is a modern web application that provides a suite of AI-powered text utilities to help improve writing, save time, and enhance productivity. The platform offers tools for text rewriting, summarization, translation, and more, all powered by large language models.

![LLM Util Screenshot](public/logo.jpeg)

## Features

- **Text Rewriting**: Transform and improve your text while maintaining the original meaning
- **Summarization**: Create concise summaries of longer documents
- **Translation**: Translate text between multiple languages
- **User Authentication**: Secure login with Google account
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **User Profiles**: Track usage statistics and history
- **Modern UI**: Clean, intuitive interface with dark mode

## Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: CSS Modules, Ant Design
- **Authentication**: Firebase Authentication
- **Analytics**: (Optional) Google Analytics integration
- **Monetization**: (Optional) Google AdSense integration

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Firebase Authentication Setup

This project uses Firebase for authentication. Follow these steps to set up Firebase:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Google Authentication in the Firebase Authentication section
3. Register your app in the Firebase project settings
4. Copy the Firebase configuration values
5. Create a `.env.local` file in the root directory (you can copy from `.env.local.example`)
6. Fill in your Firebase configuration values in the `.env.local` file

Example `.env.local` file:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Set to 'true' to enable ads, any other value or not set to disable ads
NEXT_PUBLIC_ENABLE_ADS=false
```

## User Authentication and Token Tracking

The application includes:
- Google Sign-In authentication
- Protected routes for tool access
- User profile page with usage statistics
- Token usage tracking per user

## Ads Configuration

The application includes Google AdSense integration that can be enabled or disabled via an environment variable:

- Set `NEXT_PUBLIC_ENABLE_ADS=true` in your `.env.local` file to enable ads
- Set `NEXT_PUBLIC_ENABLE_ADS=false` or remove the variable to disable ads

When ads are disabled:
- No AdSense script is loaded
- No ad containers are rendered in the UI
- The GoogleAd component doesn't render anything

This feature allows for easy toggling between development/testing environments (ads off) and production environments (ads on).

## Mobile Responsiveness

LLM Util is designed to work seamlessly across all device sizes:
- Responsive layout that adapts to screen size
- Mobile-friendly navigation with collapsible menu
- Optimized input and output areas for touch interfaces
- Consistent experience on desktop, tablet, and mobile

## Deployment

The easiest way to deploy this application is to use the [Vercel Platform](https://vercel.com/new) which offers seamless integration with Next.js projects.

## Contact

For questions or support, please contact: dev@llm-util.com

## License

This project is licensed under the ISC License - see the package.json file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
