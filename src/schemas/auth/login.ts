import { graphql } from "react-relay";

export const LoginMutation = graphql`
  mutation loginMutation($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
        username
        role {
          name
        }
      }
    }
  }
`;
