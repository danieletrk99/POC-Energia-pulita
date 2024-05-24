'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import { SSRProvider } from 'react-bootstrap';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SSRProvider>
    <html lang="en">
      <body>
        <header>
          <NavbarComponent/>
        </header>
        {children}
      </body>
    </html>
    </SSRProvider>

  )
}
