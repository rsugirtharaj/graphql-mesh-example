const { ApolloGateway } = require('@apollo/gateway');
const { ApolloServer } = require('apollo-server');

const gateway = new ApolloGateway({
    serviceList: [
      { name: 'products', url: 'http://localhost:4001' },
      { name: 'reviews', url: 'http://localhost:4000/graphql' }
    ]
  });
  
  const server = new ApolloServer({ gateway, subscriptions: false });
  server.listen(4002).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
  