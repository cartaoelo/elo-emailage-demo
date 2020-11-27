import iziToast from 'izitoast'
import React, { useState, useContext } from 'react'
import FormButtonStyled from '../../../../components/Form/FormButton/FormButton.styled'
import FormInput from '../../../../components/Form/FormInput'
import FormStyled from '../../../../styles/Home/LoginForm.styled'
import useForm from '../../../../hooks/useForm'

import { callApi } from '../../../../services/graphQL/api'

import AppContext from '../../../../store'

import { LinkStyled } from '../../../../components/EmailVerify/index.styled'
import { AddressVerifyEmailScoreInput } from '../../../../constants/sdk'

interface Props {
	enum: any
	setControl: any
	setResponse: any
	setSubControl: any
}

const RapidScore = (props: Props) => {
	const { setControl, setResponse, setSubControl } = props
	const { access_token } = useContext(AppContext)

	const { handleChange, values, setValues } = useForm({
		email: '',
		ipAddress: '',
		firstName: '',
		lastName: '',
		phoneNumber: '',
		cpf: '',
		numberBin: '',
		address: []
	})

	const [stateButton, setStateButton] = useState({
		buttonDisabled: false,
		buttonText: 'Validar'
	})

	const handleSubmit = async e => {
		e.preventDefault()

		const { email, cpf, numberBin } = values

		if (email === '') {
			return iziToast.error({
				title: 'Erro',
				message: 'O campo de email é obrigatório!'
			})
		}

		if (email === undefined) {
			return iziToast.error({
				title: 'Erro',
				message: `Erro desconhecido, recarregue a página e tente novamente.`
			})
		}
		console.log('[values]', values)

		const eloRes = await callApi('rapidScore', 'verifyEmailRapidScore', {
			access_token,
			variables: {
				...values,
				cpf: numberBin === '' ? '00000000000' : cpf.replace(/[-()\s]/g, ''),
				numberBin: numberBin === '' ? '655000' : numberBin
			}
		})

		if (eloRes.data) {
			setResponse(eloRes)
			setSubControl('Rapid')
			setControl(props.enum.Response)
		}
	}

	const handleChangeAddress = (key: keyof AddressVerifyEmailScoreInput, index: number) => (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setValues(prevValues => ({
			...prevValues,
			address: prevValues.address.map((address, i) => {
				if (i === index) {
					return {
						...address,
						[key]:
							e.target.getAttribute('name').substr(0, 6) === 'number'
								? parseInt(e.target.value)
								: e.target.value
					}
				}
				return address
			})
		}))
	}

	return (
		<>
			<div style={{ display: 'flex', width: '100%' }}>
				<LinkStyled onClick={() => setControl(props.enum.None)}>Voltar</LinkStyled>
			</div>
			<h1>Rapid Score</h1>
			<h3 style={{ color: '#6d6d6d' }}>Verificação rápida de score</h3>
			<FormStyled onSubmit={handleSubmit}>
				<FormInput
					boxIcons={{ name: 'mail-send', type: 'regular' }}
					placeholder="E-mail"
					name="email"
					type="email"
					onChange={handleChange}
					required
				/>
				<FormInput
					boxIcons={{ name: 'current-location', type: 'regular' }}
					placeholder="Endereço IP"
					name="ipAddress"
					onChange={handleChange}
				/>
				<FormInput
					boxIcons={{ name: 'user-circle', type: 'solid' }}
					placeholder="Primeiro Nome"
					name="firstName"
					onChange={handleChange}
				/>
				<FormInput
					boxIcons={{ name: 'user-circle', type: 'solid' }}
					placeholder="Sobrenome"
					name="lastName"
					onChange={handleChange}
				/>
				<FormInput
					boxIcons={{ name: 'phone', type: 'solid' }}
					mask="+99 (99) 99999-9999"
					onChange={handleChange}
					placeholder="Telefone"
					name="phoneNumber"
				/>
				<FormInput
					boxIcons={{ name: 'user-circle', type: 'solid' }}
					mask="999.999.999-99"
					onChange={handleChange}
					placeholder="CPF"
					name="cpf"
				/>
				<FormInput
					boxIcons={{ name: 'credit-card-front', type: 'solid' }}
					placeholder="BIN"
					name="numberBin"
					onChange={handleChange}
				/>

				{values.address.map((anAddress, index) => {
					return (
						<>
							<div style={{ display: 'flex', width: '100%' }}>
								<h3>Endereço {index + 1} &nbsp;</h3>
								<LinkStyled
									type="button"
									onClick={() =>
										setValues({
											...values,
											address: values.address.filter((_value, index2) => {
												return index !== index2
											})
										})
									}
								>
									Remover
								</LinkStyled>
							</div>
							<FormInput
								boxIcons={{ name: 'target-lock', type: 'regular' }}
								mask="99999-999"
								onChange={handleChangeAddress('zip', index)}
								placeholder="CEP"
								name={`zip${index + 1}`}
							/>
							<FormInput
								boxIcons={{ name: 'location-plus', type: 'solid' }}
								placeholder="Logradouro"
								name={`place${index + 1}`}
								onChange={handleChangeAddress('place', index)}
							/>
							<FormInput
								boxIcons={{ name: 'home', type: 'solid' }}
								type="number"
								onChange={handleChangeAddress('number', index)}
								placeholder="Número"
								name={`number${index + 1}`}
							/>
							<FormInput
								boxIcons={{ name: 'city', type: 'solid' }}
								placeholder="Cidade"
								name={`city${index + 1}`}
								onChange={handleChangeAddress('city', index)}
							/>
							<FormInput
								boxIcons={{ name: '', type: 'solid' }}
								placeholder="Estado"
								name={`state${index + 1}`}
								onChange={handleChangeAddress('state', index)}
							/>
							<FormInput
								boxIcons={{ name: '', type: 'solid' }}
								placeholder="País"
								name={`country${index + 1}`}
								onChange={handleChangeAddress('country', index)}
							/>
							<FormInput
								boxIcons={{ name: '', type: 'solid' }}
								placeholder="SHIPPING ou BILLING"
								name={`type${index + 1}`}
								required
								onChange={handleChangeAddress('type', index)}
							/>
						</>
					)
				})}
				<div style={{ display: 'flex', width: '100%' }}>
					<LinkStyled
						type="button"
						onClick={() =>
							setValues({
								...values,
								address: [
									...values.address,
									{
										zip: '',
										place: '',
										number: 0,
										city: '',
										state: '',
										country: '',
										type: null
									}
								]
							})
						}
					>
						+ Endereço
					</LinkStyled>
				</div>
				<FormButtonStyled type="submit" disabled={stateButton.buttonDisabled}>
					{stateButton.buttonText}
				</FormButtonStyled>
			</FormStyled>
		</>
	)
}

export default RapidScore
