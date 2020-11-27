import styled from 'styled-components'

export const ModalStyled = styled.div`
	display: ${({ show }: { show: boolean }) => (show ? 'flex' : 'none')};
	position: absolute;
	padding-top: 40px;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	min-height: 100%;
	overflow: auto;
	justify-content: center;
	animation: ${({ show }: { show: boolean }) => show && 'FadeIn .4s 1 ease-out'};

	@keyframes FadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`

export const ModalContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	background-color: #fefefe;
	border: 1px solid #888;
	width: 50%;
	border-radius: 7px;
	align-self: center;
	justify-content: center;
	transition: all 0.4s ease-out;
	padding: 20px;

	pre {
		font-size: 15px;
	}

	@media only screen and (max-width: 768px) {
		width: 90%;
	}

	@keyframes fadeByBottom {
		0% {
			opacity: 0;
			transform: translateY(-80%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`

export const ModalContainerClose = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	div {
		display: block;
		position: fixed;
		z-index: -1;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background: linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9) 100%);
		background-color: rgba(0, 0, 0, 0.4);
		color: rgba(0, 0, 0, 0);
	}
`

export const ModalClose = styled.span`
	font-size: 28px;
	font-weight: bold;

	&:hover,
	&:focus {
		text-decoration: none;
		cursor: pointer;
	}
`
