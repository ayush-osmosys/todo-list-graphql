import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { schema } from "../../graphql/schema";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

// export default createYoga<{
//   req: NextApiRequest;
//   res: NextApiResponse;
// }>({
//   schema,
//   graphqlEndpoint: "/api/graphql",
// });
const server = new ApolloServer({
  schema,
});
// const main = async () => {
//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
//   });
// };
// main();
// export default server;
export default startServerAndCreateNextHandler(server);

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
