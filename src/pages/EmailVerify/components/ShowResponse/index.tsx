import React from 'react'
import {
	ButtonStyled,
	ButtonsWrapper,
	LinkStyled
} from '../../../../components/EmailVerify/index.styled'
import Modal from '../../../../components/Modal'
import riskBandTranslator from '../../../../utils/riskBandTranslator'
import FormattedResponse from './components/FormattedResponse'

interface Props {
	enum: any
	response: any
	setControl: any
	subControl: string
	stateModal: any
	setStateModal: any
}

const ShowResponse = (props: Props) => {
	const { response, setControl, subControl, stateModal, setStateModal } = props
	return (
		<>
			{subControl === 'Rapid' && (
				<>
					<h1>Resultado Rapid Score</h1>
					<FormattedResponse>
						<p>{riskBandTranslator(response.data.riskBand)}</p>
						<p>Razão: {response.data.reason}</p>
						<p>Empresa do provedora: {response.data.domain.company}</p>
					</FormattedResponse>
				</>
			)}
			{subControl === 'Classic' && (
				<>
					<h1>Resultado Classic Score</h1>
					<FormattedResponse>
						<p>E-mail: {response.data.email.address}</p>
						<p>Existe: {response.data.email.exists}</p>
						<p>Risco de fraude: {response.data.email.fraudRisk}</p>
						<p>{riskBandTranslator(response.data.emailAge.riskBandId)}</p>
						<p>Razão: {response.data.emailAge.reason}</p>
						<p>Empresa do provedora: {response.data.domain.company}</p>
					</FormattedResponse>

					<p>{response.reason}</p>
				</>
			)}
			<ButtonsWrapper>
				<ButtonStyled
					type="button"
					onClick={() => {
						setStateModal({
							modalShow: true,
							modalText: JSON.stringify(response.data, null, 2)
						})
					}}
				>
					Resposta Completa
				</ButtonStyled>
				<ButtonStyled
					type="button"
					onClick={() => {
						setControl(props.enum.None)
					}}
				>
					Nova Consulta
				</ButtonStyled>
			</ButtonsWrapper>
			<Modal
				onClick={() => setStateModal({ ...stateModal, modalShow: false })}
				show={stateModal.modalShow}
				modalText={stateModal.modalText}
			/>
		</>
	)
}

export default ShowResponse
