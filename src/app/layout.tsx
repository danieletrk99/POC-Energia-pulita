'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbars/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavbarComponent/>
        </header>
        {children}
      </body>
    </html>

  )
}
