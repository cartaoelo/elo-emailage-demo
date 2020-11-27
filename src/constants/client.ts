import { GraphQLClient } from 'graphql-request'
import { args } from '../configs/api'

export const client = new GraphQLClient(args.graphQLurl, {
	headers: {
		client_id: args.client_id
	}
})
