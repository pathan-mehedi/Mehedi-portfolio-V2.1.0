# Email Setup Guide for Netlify Deployment

## Prerequisites

1. **Resend Account**: Sign up at [resend.com](https://resend.com) (free tier available)
2. **Netlify Account**: Your portfolio is hosted on Netlify (free tier available)

## Setup Steps

### 1. Get Resend API Key

1. Go to [resend.com](https://resend.com) and create an account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key

### 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 3. Update Email Configuration

Edit `actions/contact.ts` and replace the following:

```typescript
// Replace this line:
to: ["your-email@gmail.com"], // Replace with your Gmail address

// With your actual Gmail address:
to: ["your-actual-email@gmail.com"],
```

The `from` field is already configured to use Resend's sandbox domain (`onboarding@resend.dev`), which works perfectly for free hosting.

### 4. Netlify Environment Variables

For Netlify deployment, add your environment variables:

1. Go to your Netlify dashboard
2. Navigate to Site settings > Environment variables
3. Add a new variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key

### 5. Deploy to Netlify

1. Push your changes to your Git repository
2. Netlify will automatically deploy with the new environment variables
3. Your contact form will work on your live site!

### 6. Testing

**Local Testing:**
1. Create a `.env.local` file in your project root
2. Add: `RESEND_API_KEY=your_resend_api_key_here`
3. Start your development server: `npm run dev`
4. Fill out the contact form
5. Check your Gmail inbox for the test email

**Live Testing:**
1. After deploying to Netlify, visit your live site
2. Fill out the contact form
3. Check your Gmail inbox for the email

## Validation Features

The contact form now includes:

- **Name validation**: 2-50 characters, letters and spaces only
- **Email validation**: Valid email format, 5-100 characters
- **Message validation**: 10-1000 characters, alphanumeric and common punctuation
- **Real-time error display**: Shows validation errors with red borders and icons
- **Success/error messages**: Clear feedback for form submission

## Troubleshooting

- **API Key Issues**: Ensure your Resend API key is correct and active
- **Netlify Environment Variables**: Make sure `RESEND_API_KEY` is set in your Netlify dashboard
- **Email Not Received**: Check spam folder and Resend dashboard for delivery status
- **Sandbox Domain**: Using `onboarding@resend.dev` is perfect for free hosting - no domain verification needed
- **Free Tier Limits**: Resend free tier allows 100 emails/day, which is perfect for a portfolio site 