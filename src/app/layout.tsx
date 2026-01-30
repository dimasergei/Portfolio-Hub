"use client"

import { useEffect } from "react"
import "./globals.css"

// Wake up script to ping all backend URLs
const WAKE_UP_URLS = [
  "https://enterprise-rag-api.vercel.app/health",
  "https://codescan-ai-api.vercel.app/health", 
  "https://streampulse-api.vercel.app/health",
  "https://agentiq-api.vercel.app/health",
  "https://meetinggpt-api.vercel.app/health"
]

function wakeUpServices() {
  WAKE_UP_URLS.forEach(url => {
    fetch(url, { 
      method: "GET",
      mode: "no-cors",
      cache: "no-cache"
    }).catch(() => {
      // Expected to fail due to CORS, but will wake up the service
    })
  })
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Wake up services on page load
    wakeUpServices()
    
    // Wake up services every 10 minutes to keep them warm
    const interval = setInterval(wakeUpServices, 10 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
