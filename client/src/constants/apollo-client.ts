import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "./urls";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${API_URL}/graphql`,
});
