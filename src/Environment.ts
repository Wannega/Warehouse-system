import { Environment, Network, RecordSource, Store } from "relay-runtime";

const source = new RecordSource();
const store = new Store(source);
const network = Network.create((operation, variables) => {
  return fetch(process.env.GRAPHQL_API ?? "", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}); // see note below
const handlerProvider = null;

export const environment = new Environment({
  handlerProvider, // Can omit.
  network,
  store,
});
