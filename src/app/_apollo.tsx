import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
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

// const authLink = setContext((_, { headers }) => {
//   const token = jsCookie.get('bearer-token')

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   }
// })

const signLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((rawData) => {
    const searchField = {
      login: 'login',
      resetPassword: 'resetPassword',
    }[operation.operationName]

    if (
      operation.operationName === 'login' ||
      operation.operationName === 'resetPassword'
    ) {
      // TODO: ADD TYPES
      const data = rawData.data
      jsCookie.set('access-token', data[searchField]?.jwt ?? '')
      setUser(data[searchField]?.user)
    }

    return rawData
  })
})

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_API + '/graphql',
  cache: new InMemoryCache(),
  ssrMode: true,
  link: signLink.concat(httpLink),
})

interface Props {
  children: React.ReactNode
}

export const ApolloSetup: React.FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
