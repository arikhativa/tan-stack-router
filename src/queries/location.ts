import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query {
    books {
      id
      title
    }
}
`;

export const AAA = gql`
  query {
    hello
}
`;