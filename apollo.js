import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { offsetLimitPagination } from "@apollo/client/utilities";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");
const TOKEN = "token";

export const logUserIn = async (token) => {
  await AsyncStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
  tokenVar(token);
};
export const logUserOut = async () => {
  await AsyncStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  tokenVar(null);
};
const httpLink = createHttpLink({});

const uploadHttpLink = createUploadLink({
  uri: "http://0fb2-222-235-17-212.ngrok.io/graphql",
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: tokenVar(),
    },
  };
});
const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(`graphQLErrors`, graphQLErrors);
  }
  if (networkError) {
    console.log(`networkError`, networkError);
  }
});
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        seeFeed: offsetLimitPagination(),
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(onErrorLink).concat(uploadHttpLink),
});

export default client;
