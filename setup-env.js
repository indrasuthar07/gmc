#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

console.log('🚀 Setting up environment variables for Get Me A Chai...\n');

const envPath = path.join(__dirname, '.env.local');

if (fs.existsSync(envPath)) {
  console.log('⚠️  .env.local already exists. Please backup and remove it first if you want to regenerate.');
  process.exit(1);
}

const generateSecret = () => crypto.randomBytes(32).toString('base64');

const envContent = `# MongoDB Connection
MONGO_URI=your_mongodb_connection_string_here

# NextAuth Configuration
NEXTAUTH_SECRET=${generateSecret()}
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_ID=your_google_client_id_here
GOOGLE_SECRET=your_google_client_secret_here

# GitHub OAuth
GITHUB_ID=your_github_client_id_here
GITHUB_SECRET=your_github_client_secret_here
`;

fs.writeFileSync(envPath, envContent);

console.log('✅ .env.local file created successfully!');
console.log('\n📝 Next steps:');
console.log('1. Replace the placeholder values in .env.local with your actual credentials');
console.log('2. Set up Google OAuth: https://console.cloud.google.com/');
console.log('3. Set up GitHub OAuth: https://github.com/settings/developers');
console.log('4. Get your MongoDB connection string');
console.log('\n🔗 For detailed setup instructions, see README.md'); 