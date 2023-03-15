import '../styles/globals.css'
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
