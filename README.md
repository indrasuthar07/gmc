# Get Me A Chai - Crowdfunding Platform

A modern crowdfunding platform built with Next.js, NextAuth.js, and MongoDB.

## Features

- 🔐 **Authentication**: Google and GitHub OAuth integration
- 💳 **Payment Processing**: Razorpay integration
- 👤 **User Profiles**: Customizable user profiles
- 📊 **Dashboard**: User dashboard for managing profile and payments
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS

## Prerequisites

- Node.js 18+ 
- MongoDB database
- Google OAuth credentials
- GitHub OAuth credentials
- Razorpay account (for payments)

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
cd gmc
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Connection
MONGO_URI=your_mongodb_connection_string_here

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_ID=your_google_client_id_here
GOOGLE_SECRET=your_google_client_secret_here

# GitHub OAuth
GITHUB_ID=your_github_client_id_here
GITHUB_SECRET=your_github_client_secret_here
```

### 3. OAuth Setup

#### Google OAuth Setup:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Set authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret to your `.env.local`

#### GitHub OAuth Setup:
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Set Homepage URL: `http://localhost:3000`
4. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
5. Copy Client ID and Client Secret to your `.env.local`

### 4. Generate NextAuth Secret

Generate a secure random string for NEXTAUTH_SECRET:

```bash
openssl rand -base64 32
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
gmc/
├── app/                    # Next.js 13+ app directory
│   ├── api/auth/          # NextAuth API routes
│   ├── dashboard/         # User dashboard
│   ├── login/            # Login page
│   └── [username]/       # Dynamic user profile pages
├── components/            # React components
├── models/               # MongoDB models
├── actions/              # Server actions
├── db/                   # Database connection
└── public/               # Static assets
```

## Authentication Flow

1. User clicks "Login with Google" or "Login with GitHub"
2. NextAuth handles OAuth flow
3. User data is stored in MongoDB
4. User is redirected to dashboard
5. User can update profile and manage payments

## Payment Integration

The platform uses Razorpay for payment processing. Users need to:
1. Create a Razorpay account
2. Add their Razorpay ID and Secret in the dashboard
3. Configure payment settings

## Technologies Used

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Payments**: Razorpay
- **Styling**: Tailwind CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
