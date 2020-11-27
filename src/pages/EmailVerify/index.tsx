import React, { useState } from 'react'
import { ButtonStyled, ButtonsWrapper } from '../../components/EmailVerify/index.styled'
import EmailVerifyContainerStyled from '../../styles/EmailVerify/EmailVerifyContainer.styled'

import BackgroundCenterContainerStyled from '../../styles/BackgroundCenter'
import RapidScore from './components/RapidScore'
import ShowResponse from './components/ShowResponse'
import ClassicScore from './components/ClassicScore'

enum Control {
	None = '',
	Rapid = 'RapidScore',
	Classic = 'ClassicScore',
	Response = 'Response'
}

const EmailVerify = () => {
	const [control, setControl] = useState('')
	const [response, setResponse] = useState('')
	const [subControl, setSubControl] = useState('')
	const [stateModal, setStateModal] = useState({
		modalShow: false,
		modalText: ''
	})

	return (
		<BackgroundCenterContainerStyled>
			<EmailVerifyContainerStyled>
				{control === Control.None && (
					<>
						<h1>Elo Emailage - Verificação de risco de e-mail</h1>
						<h2>
							Avalie o risco de fraude credencial de e-mails e sua combinação com outros
							dados cadastrais
						</h2>
						<ButtonsWrapper>
							<ButtonStyled type="button" onClick={() => setControl(Control.Rapid)}>
								Rapid Score
							</ButtonStyled>
							<ButtonStyled type="button" onClick={() => setControl(Control.Classic)}>
								Classic Score
							</ButtonStyled>
						</ButtonsWrapper>
					</>
				)}
				{control === Control.Rapid && (
					<RapidScore
						setResponse={setResponse}
						setControl={setControl}
						setSubControl={setSubControl}
						enum={Control}
					/>
				)}
				{control === Control.Classic && (
					<ClassicScore
						setResponse={setResponse}
						setControl={setControl}
						setSubControl={setSubControl}
						enum={Control}
					/>
				)}
				{control === Control.Response && (
					<ShowResponse
						response={response}
						setControl={setControl}
						subControl={subControl}
						stateModal={stateModal}
						setStateModal={setStateModal}
						enum={Control}
					/>
				)}
			</EmailVerifyContainerStyled>
		</BackgroundCenterContainerStyled>
	)
}

export default EmailVerify
