export async function GET() {
  const googleConfig = {
    clientId: process.env.GOOGLE_ID ? 'Set' : 'Missing',
    clientSecret: process.env.GOOGLE_SECRET ? 'Set' : 'Missing',
    nextAuthUrl: process.env.NEXTAUTH_URL || 'Not set',
    nextAuthSecret: process.env.NEXTAUTH_SECRET ? 'Set' : 'Missing'
  }

  const expectedCallbackUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/auth/callback/google`

  return Response.json({
    googleConfig,
    expectedCallbackUrl,
    instructions: [
      '1. Go to Google Cloud Console: https://console.cloud.google.com/',
      '2. Create a new project or select existing one',
      '3. Enable Google+ API in "APIs & Services" → "Library"',
      '4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"',
      '5. Choose "Web application"',
      '6. Set Authorized JavaScript origins: http://localhost:3000',
      `7. Set Authorized redirect URIs: ${expectedCallbackUrl}`,
      '8. Copy Client ID and Client Secret to your .env.local file',
      '9. Restart the development server'
    ],
    troubleshooting: [
      'If you get "OAuth client was not found":',
      '- Check that Client ID and Secret are correct',
      '- Make sure redirect URI matches exactly',
      '- Verify the project is active and API is enabled',
      '- Check that you\'re using the right Google account'
    ]
  })
} 