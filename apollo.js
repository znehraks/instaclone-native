import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";

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
const httpLink = createHttpLink({
  uri: "http://3c0d-222-235-17-212.ngrok.io/graphql",
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: tokenVar(),
    },
  };
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
  link: authLink.concat(httpLink),
});

export default client;
