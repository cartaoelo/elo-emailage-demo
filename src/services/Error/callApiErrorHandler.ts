import iziToast from 'izitoast'
import errorHandler from './errorHandler'

interface ErrorHandler {
	res: any
}

const callApiErrorHandler = async ({ res }: ErrorHandler): Promise<boolean> => {
	if (res.data === null || res.data === undefined) {
		if (
			typeof res.errors[0].message === undefined ||
			typeof res.errors[0].message[0] === undefined
		) {
			iziToast.error({
				title: 'Erro',
				message: `Erro desconhecido, recarregue a página e tente novamente.`
			})
			return false
		}

		if (res.data === null || res.data === undefined) {
			if (
				res.errors[0].extensions !== undefined &&
				res.errors[0].extensions.code === 'INTERNAL_SERVER_ERROR'
			) {
				const { code } = res.errors[0].extensions

				iziToast.error({
					title: 'Erro',
					message: `Houve um erro na chamada da API: ${code}. Contate o suporte!`
				})
				return false
			}

			if (res.errors[0].extensions.code === '401') {
				const { error } = JSON.parse(res.errors[0].message)
				iziToast.error({
					title: 'Erro',
					message: `Houve um erro na chamada da API: [${res.errors[0].extensions.code}] ${error}`
				})
				return false
			}
			if (res.errors.length > 1) {
				res.errors.forEach(error => {
					iziToast.error({
						title: 'Erro',
						message: `Houve um erro na chamada da API: ${error.message}`
					})
				})
				return false
			}
			const { code, description } = JSON.parse(res.errors[0].message)[0]
			iziToast.error({
				title: 'Erro',
				message: `Houve um erro na chamada da API, com código: ${code} e descrição: ${description}`
			})
			return false
		}
	}

	return true
}

export default callApiErrorHandler
