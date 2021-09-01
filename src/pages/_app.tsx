import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Layout from 'components/Layout'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <Layout component={Component} pageProps={pageProps}/>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
