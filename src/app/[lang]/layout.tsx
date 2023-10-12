import '../../styles/global.scss';
import '../../styles/Home.modules.scss';

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
