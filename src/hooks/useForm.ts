import { useState } from 'react'
import { AddressVerifyEmailScoreInput } from '../constants/sdk'

interface ValoresIniciais {
	email: string
	ipAddress?: string
	firstName?: string
	lastName?: string
	phoneNumber?: string
	cpf?: string
	numberBin?: string
	address?: AddressVerifyEmailScoreInput[]
}

const useForm = (valoresIniciais: ValoresIniciais) => {
	const [values, setValues] = useState(valoresIniciais)

	const setValue = (chave: string, valor: any) => {
		setValues({
			...values,
			[chave]: valor
		})
	}
	const handleChange = e => {
		setValue(e.target.getAttribute('name'), e.target.value)
	}
	const clearForm = valoresIniciais => {
		setValues(valoresIniciais)
	}

	return {
		values,
		setValues,
		handleChange,
		clearForm
	}
}

export default useForm
