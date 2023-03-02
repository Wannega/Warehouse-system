import { client } from '@app/_apollo'
import {
  LoginDocument,
  LoginMutation,
  UsersPermissionsLoginInput,
} from '@generated'
import cookies from 'js-cookie'

export const useAuth = () => {
  return {
    login: async (formData: UsersPermissionsLoginInput) => {
      const result = await client.mutate<LoginMutation>({
        mutation: LoginDocument,
        variables: { input: formData },
      })

      cookies.set('access-token', result.data?.login.jwt ?? '', { expires: 1 })

      return result
    },
    logout: async () => {
      cookies.remove('access-token')
    },
  }
}
