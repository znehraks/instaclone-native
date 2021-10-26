import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://d45e-222-237-116-74.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default client;
