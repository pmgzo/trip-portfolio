import {Metadata} from 'next';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        </head>
        <body>
          {/* Layout UI */}
          <main>{children}</main>
        </body>
      </html>
    )
  }