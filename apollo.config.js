module.exports = {
	client: {
		service: {
			name: 'elo-api',
			url: 'https://hml-api.elo.com.br/graphql',
			headers: {
				client_id: '8661a9bc-37a7-3cda-8234-2cb20f4ed209'
			}
		},
		includes: ['./src/services/graphQL/*.ts']
	}
}
