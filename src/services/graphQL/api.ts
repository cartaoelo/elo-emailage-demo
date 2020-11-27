import { GraphQLClient } from 'graphql-request'
import { getSdk, Sdk } from '../../constants/sdk'
import { args } from '../../configs/api'
import callApiErrorHandler from '../Error/callApiErrorHandler'

interface Props<V> {
	variables: V
	access_token?: string
	authorization?: string
}

type UnpackPromise<T> = T extends Promise<infer U> ? U : T

export const callApi = async <
	T extends keyof Sdk,
	K extends keyof U['data'],
	U extends UnpackPromise<ReturnType<Sdk[T]>> = UnpackPromise<ReturnType<Sdk[T]>>
>(
	query: T,
	key: K,
	{ access_token, variables, authorization }: Props<Parameters<Sdk[T]>[0]>
): Promise<Omit<U, 'data'> & { data?: U['data'][K] }> => {
	const client = new GraphQLClient(args.graphQLurl, {
		headers: { access_token, authorization, client_id: args.client_id }
	})
	const sdk = getSdk(client, action => {
		return action()
			.then(res => {
				return res
			})
			.catch(err => {
				callApiErrorHandler({ res: err.response })
				return err.response
			})
	})
	// @ts-ignore
	const res = await sdk[query](variables)
	// @ts-ignore
	return {
		...res,
		// @ts-ignore
		data: res.data?.[key]
	}
}
