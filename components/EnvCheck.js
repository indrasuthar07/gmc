"use client"
import { useEffect, useState } from 'react'

const EnvCheck = () => {
  const [envStatus, setEnvStatus] = useState({})

  useEffect(() => {
    const checkEnv = async () => {
      try {
        const [envResponse, githubResponse, googleResponse] = await Promise.all([
          fetch('/api/env-check'),
          fetch('/api/test-github'),
          fetch('/api/test-google')
        ])
        const envData = await envResponse.json()
        const githubData = await githubResponse.json()
        const googleData = await googleResponse.json()
        setEnvStatus({ ...envData, githubDetails: githubData, googleDetails: googleData })
      } catch (error) {
        console.error('Error checking environment:', error)
        setEnvStatus({ error: 'Failed to check environment' })
      }
    }

    checkEnv()
  }, [])

  if (Object.keys(envStatus).length === 0) {
    return <div className="text-gray-400">Checking environment...</div>
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold text-blue-400 mb-2">Environment Status</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>MongoDB URI:</span>
          <span className={envStatus.mongoUri ? 'text-green-400' : 'text-red-400'}>
            {envStatus.mongoUri ? '✓ Set' : '✗ Missing'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>NextAuth Secret:</span>
          <span className={envStatus.nextAuthSecret ? 'text-green-400' : 'text-red-400'}>
            {envStatus.nextAuthSecret ? '✓ Set' : '✗ Missing'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Google OAuth:</span>
          <span className={envStatus.googleOAuth ? 'text-green-400' : 'text-red-400'}>
            {envStatus.googleOAuth ? '✓ Configured' : '✗ Missing'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>GitHub OAuth:</span>
          <span className={envStatus.githubOAuth ? 'text-green-400' : 'text-red-400'}>
            {envStatus.githubOAuth ? '✓ Configured' : '✗ Missing'}
          </span>
        </div>
      </div>
      {envStatus.error && (
        <div className="text-red-400 mt-2">{envStatus.error}</div>
      )}
      
      {envStatus.githubDetails && (
        <div className="mt-4 p-3 bg-gray-700 rounded">
          <h4 className="text-sm font-semibold text-blue-300 mb-2">GitHub OAuth Details:</h4>
          <div className="text-xs space-y-1">
            <div>Expected Callback: <span className="text-green-300">{envStatus.githubDetails.expectedCallbackUrl}</span></div>
            <div className="mt-2">
              <div className="font-semibold text-yellow-300">Instructions:</div>
              {envStatus.githubDetails.instructions.map((instruction, index) => (
                <div key={index} className="ml-2 text-gray-300">{instruction}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {envStatus.googleDetails && (
        <div className="mt-4 p-3 bg-gray-700 rounded">
          <h4 className="text-sm font-semibold text-blue-300 mb-2">Google OAuth Details:</h4>
          <div className="text-xs space-y-1">
            <div>Expected Callback: <span className="text-green-300">{envStatus.googleDetails.expectedCallbackUrl}</span></div>
            <div className="mt-2">
              <div className="font-semibold text-yellow-300">Instructions:</div>
              {envStatus.googleDetails.instructions.map((instruction, index) => (
                <div key={index} className="ml-2 text-gray-300">{instruction}</div>
              ))}
            </div>
            <div className="mt-2">
              <div className="font-semibold text-red-300">Troubleshooting:</div>
              {envStatus.googleDetails.troubleshooting.map((tip, index) => (
                <div key={index} className="ml-2 text-gray-300">{tip}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EnvCheck 