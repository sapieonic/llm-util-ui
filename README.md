This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

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
NEXT_PUBLIC_ENABLE_ADS=true
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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
