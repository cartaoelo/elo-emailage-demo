import React from 'react'
import {
	ModalClose,
	ModalContainerClose,
	ModalContentStyled,
	ModalStyled
} from './Modal.styled'

interface ModalProps {
	show: boolean
	modalText: string
}

const Modal = ({
	show,
	modalText,
	...rest
}: ModalProps & React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<ModalStyled show={show}>
			<ModalContentStyled>
				<ModalContainerClose>
					<h2>Resposta da Elo Emailage - Verificação do risco de e-mail</h2>
					<div></div>
					<ModalClose {...rest}>
						<box-icon name="x"></box-icon>
					</ModalClose>
				</ModalContainerClose>
				<pre>{modalText}</pre>
			</ModalContentStyled>
		</ModalStyled>
	)
}

export default Modal
