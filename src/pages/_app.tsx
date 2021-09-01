import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useEffect } from 'react';

import Layout from 'components/Layout'
import useAuthentication from 'hooks/useAuthentication';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  const { checkIfUserIsAuthenticated } = useAuthentication()

  useEffect(() => {
    checkIfUserIsAuthenticated()
  }, [])

  return (
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <Layout component={Component} pageProps={pageProps}/>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
