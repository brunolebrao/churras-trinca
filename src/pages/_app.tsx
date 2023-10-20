import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import { TransactionsProvider } from 'services/hooks/useTransaction'

import { Model, createServer, Response } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'EAI',
          type: 'deposit',
          category: 'salário',
          amount: 17000,
          createdAt: new Date('2021-09-24 09:00:00')
        },
        {
          id: 2,
          title: 'Prestação casa',
          type: 'withdraw',
          category: 'casa',
          amount: 4000,
          createdAt: new Date('2021-09-25 19:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.get('/auth', (schema, request) => {
      console.log('%c⧭', 'color: #aa00ff', request)
      if (request.queryParams.email && request.queryParams.password) {
        return '/agenda'
      }
      return new Response(
        400,
        { some: 'header' },
        { errors: 'Usuário ou senha inválidos' }
      )
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <TransactionsProvider>
        <Component {...pageProps} />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default App
