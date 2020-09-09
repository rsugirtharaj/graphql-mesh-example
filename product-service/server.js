const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');


const typeDefs = gql`
  type Query {
    getProduct(productId: ID): Product
  }

  type Product @key(fields: "productId") {
    productId: ID
    productName: String
  }
`;

const resolvers = {
  Query: {
    getProduct(_, args2) {
      return { productId: args2.productId, productName: "Keyboard tray" }
    }
  }
}

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

server.listen(4001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});