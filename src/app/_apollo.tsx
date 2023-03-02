import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import jsCookie from 'js-cookie'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_STRAPI_API,
})

const logoutLink = onError(({ networkError }) => {
  console.log(networkError)
})

const authLink = setContext((_, { headers }) => {
  const token = jsCookie.get('bearer-token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_API + '/graphql',
  link: logoutLink.concat(httpLink),
  cache: new InMemoryCache(),
})

interface Props {
  children: React.ReactNode
}

export const ApolloSetup: React.FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
