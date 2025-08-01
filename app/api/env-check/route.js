export async function GET() {
  try {
    const envStatus = {
      mongoUri: !!process.env.MONGO_URI,
      nextAuthSecret: !!process.env.NEXTAUTH_SECRET,
      googleOAuth: !!(process.env.GOOGLE_ID && process.env.GOOGLE_SECRET),
      githubOAuth: !!(process.env.GITHUB_ID && process.env.GITHUB_SECRET),
      nextAuthUrl: process.env.NEXTAUTH_URL || 'Not set'
    }

    return Response.json(envStatus)
  } catch (error) {
    return Response.json({ error: 'Failed to check environment' }, { status: 500 })
  }
} 