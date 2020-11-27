import React, { useReducer, useState } from 'react'
import { args } from '../../configs/api'
import { callApi } from '../../services/graphQL/api'

import { createChallenge, generateBcryptPassword } from '../../services/Challenge'

import { ContextActions, ContextTypes } from '../../types/context'

import FormStyled from '../../styles/Home/LoginForm.styled'
import LoginContainerStyled from '../../styles/Home/LoginContainer.styled'
import FormButtonStyled from '../../components/Form/FormButton/FormButton.styled'

import FormInput from '../../components/Form/FormInput'
import iziToast from 'izitoast'
import BackgroundContainerStyled from '../../styles/Background'

import { useHistory } from 'react-router-dom'

import { EMAILVERIFY } from '../../constants/routes'
import { useForm } from 'react-hook-form'

interface FormData {
	username: string
	password: string
}

const { authorization } = args

const Home = () => {
	const { register, handleSubmit } = useForm<FormData>()

	const history = useHistory()

	const [stateLogin, setStateLogin] = useState({
		error: false,
		errorValue: '',
		errorFields: false,
		googleDisabled: false,
		ended: false
	})

	const [state, dispatch] = useReducer(
		(state: Pick<ContextTypes, 'access_token'>, { type, payload }: ContextActions) => {
			switch (type) {
				case 'CHANGE_ACCESSTOKEN':
					return {
						...state,
						access_token: payload
					}

				default:
					return state
			}
		},
		{
			access_token: ''
		}
	)

	const onSubmit = handleSubmit(async values => {
		const { username, password } = values
		if (username === '' || password === '') {
			setStateLogin({ ...stateLogin, errorFields: true })
			iziToast.error({
				title: 'Erro',
				message: 'Veja se você preencheu todos os campos!'
			})
			return false
		}

		const eloRes = await callApi('createLoginSalt', 'createLoginSalt', {
			variables: {
				username
			}
		})

		if (eloRes.data === undefined) {
			return iziToast.error({
				title: 'Erro',
				message: `Erro desconhecido, recarregue a página e tente novamente.`
			})
		}

		const { salt: eloSalt } = eloRes.data

		const bcryptPassword = generateBcryptPassword({
			username,
			password
		})

		const challenge = createChallenge({ eloSalt, bcryptPassword })

		const resLoginJSON = await callApi('login', 'login', {
			variables: {
				challenge,
				username
			},
			authorization
		})

		if (resLoginJSON.data === undefined) {
			return iziToast.error({
				title: 'Erro',
				message: 'Usuário ou senha incorreto (a)!'
			})
		}

		if (resLoginJSON.data === undefined) {
			return false
		}
		const { accessToken } = resLoginJSON.data

		dispatch({ type: 'CHANGE_ACCESSTOKEN', payload: accessToken })

		localStorage.setItem('accessToken', accessToken)

		iziToast.success({
			title: 'Sucesso',
			message: `Aqui está seu Access Token: ${accessToken}`
		})

		setTimeout(() => setStateLogin({ ...stateLogin, ended: true }), 1000)
		setTimeout(() => history.push(EMAILVERIFY), 1500)

		setStateLogin({
			...stateLogin,
			error: false
		})
	})

	return (
		<BackgroundContainerStyled>
			<img src="https://www.elo.com.br/themes/custom/elo/img/logo.svg" alt="ELO Logo" />
			<LoginContainerStyled out={stateLogin.ended}>
				<h1>Faça Login no Portal Elo</h1>
				<FormStyled onSubmit={onSubmit}>
					<FormInput
						boxIcons={{ name: 'envelope', type: 'solid' }}
						placeholder="Username"
						name="username"
						ref={register}
					/>
					<FormInput
						boxIcons={{ name: 'lock', type: 'solid' }}
						placeholder="Password"
						name="password"
						type="password"
						ref={register}
					/>
					<FormButtonStyled type="submit">Entrar</FormButtonStyled>
				</FormStyled>
			</LoginContainerStyled>
		</BackgroundContainerStyled>
	)
}

export default Home
