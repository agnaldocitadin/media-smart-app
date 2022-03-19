import expressGraphql from 'express-graphql'
import { schema } from '../graphql/Schema'
import { resolvers } from '../graphql/Resolvers'

export const expressGraphqlConfig = expressGraphql({
    schema,
    rootValue: resolvers,
    graphiql: true
})