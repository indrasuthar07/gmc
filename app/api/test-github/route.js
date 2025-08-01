export async function GET() {
  const githubConfig = {
    clientId: process.env.GITHUB_ID ? 'Set' : 'Missing',
    clientSecret: process.env.GITHUB_SECRET ? 'Set' : 'Missing',
    nextAuthUrl: process.env.NEXTAUTH_URL || 'Not set',
    nextAuthSecret: process.env.NEXTAUTH_SECRET ? 'Set' : 'Missing'
  }

  const expectedCallbackUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/auth/callback/github`

  return Response.json({
    githubConfig,
    expectedCallbackUrl,
    instructions: [
      '1. Make sure your GitHub OAuth app has:',
      `   - Homepage URL: ${process.env.NEXTAUTH_URL || 'http://localhost:3000'}`,
      `   - Authorization callback URL: ${expectedCallbackUrl}`,
      '2. Copy the Client ID and Client Secret to your .env.local file',
      '3. Restart the development server'
    ]
  })
} 