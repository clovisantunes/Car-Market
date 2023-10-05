import '../../styles/global.scss';

interface RootLayoutProps{
  children: React.ReactNode;
  params: {
    lang: string;
  }
}

export default function RootLayout({children, params}: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}
