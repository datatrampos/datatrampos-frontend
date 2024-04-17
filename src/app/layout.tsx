import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import Head from 'next/head'
import GlobalStyles from './GlobalStyles'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DataTrampos - As melhores vagas do Brasil para Dados',
  description:
    'Encontre as melhores vagas de emprego na área de dados, disponíveis em todo o Brasil. Nós agrupamos as melhores oportunidades em diversas Startups e Unicórnios',
  keywords: [
    'vagas',
    'trabalho',
    'dados',
    'data',
    'estagio',
    'oportunidades',
    'datatrampos',
    'trampos',
    'jobs',
    'vacancies',
    'openings',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <link rel="shortcut-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body className={raleway.className}>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
