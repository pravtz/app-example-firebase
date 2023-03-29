import { Header } from '@/components/header'
import { AuthProvider } from '@/contexts/AuthContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { useUserAuth } from '@/hooks/useUserAuth'

import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const userAuth = useUserAuth()
  console.log("userAuthBooton", !!userAuth?.isLogIn())

  return (
    <html lang="en">
      <body className='dark'>
        <AuthProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
