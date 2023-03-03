import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { LoginMutation } from '@generated'
import { setUser } from '@store'
import jsCookie from 'js-cookie'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_STRAPI_API + '/graphql',
})

// TODO:  CHECK TOKEN VALIDITY PER EACH REQUEST
// const logoutLink = onError(({ networkError }) => {
//   console.log(networkError)
// })

const authLink = setContext((_, { headers }) => {
  const token = jsCookie.get('access-token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
      )
    }

    return rawData
  })
})

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_API + '/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    q,
  },

  ssrMode: true,
  link: signLink.concat(authLink.concat(httpLink)),
})

interface Props {
  children: React.ReactNode
}

export const ApolloSetup: React.FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
