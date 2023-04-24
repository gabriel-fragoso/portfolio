import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Expletus+Sans:wght@700&family=Work+Sans:wght@300;600&display=swap" rel="stylesheet" />
      <link rel="shortcut icon" href="AXIOS.svg" type="image/x-icon" />
      <title>Portfólio Gabriel</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
