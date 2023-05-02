import './globals.css'

export const metadata = {
  title: 'Space',
  description: 'Created by Anton Holmgren',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
