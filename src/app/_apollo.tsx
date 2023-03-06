import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import jsCookie from 'js-cookie'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_STRAPI_API + '/graphql',
  credentials: 'same-origin',
})

// TODO:  CHECK TOKEN VALIDITY PER EACH REQUEST
// const logoutLink = onError(({ networkError }) => {
//   console.log(networkError)
// })

const authLink = setContext((_, { headers }) => {
  const token = jsCookie.get('access-token')

  return {
    headers: {
      authorization: token ? `bearer ${token}` : '',
      ...headers,
    },
  }
})

const signLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((rawData) => {
    if (
      operation.operationName === 'login' ||
      operation.operationName === 'resetPassword'
    ) {
      // TODO: REFACTOR
      const data = rawData.data
      jsCookie.set(
        'access-token',
        (data && data[operation.operationName as keyof typeof data]?.jwt) ?? '',
        { expires: 1 },
      )
    }

    return rawData
  })
})

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_API + '/graphql',
  cache: new InMemoryCache(),
  link: signLink.concat(authLink.concat(httpLink)),
  ssrMode: true,
  credentials: 'same-origin',
})

interface Props {
  children: React.ReactNode
}

export const ApolloSetup: React.FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
