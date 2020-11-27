import styled from 'styled-components'

const EmailVerifyContainerStyled = styled.div`
	padding: 60px 70px 50px;
	margin-top: 10vh;
	background-color: #fff;
	border-radius: 30px;
	width: 100%;
	height: fit-content;
	max-width: 1000px;
	display: flex;
	align-items: center;
	/* justify-content: center; */
	flex-direction: column;
	animation: ${({ out }: { out?: boolean }) => out && '.5s ease-out 1 slideToTop'};

	h1 {
		font-size: 2rem;
		text-align: center;
	}
	h2,
	h3 {
		text-align: center;
		margin: 15px 0 40px 0;
		color: #6d6d6d;
		width: 80%;
	}

	@media only screen and (max-width: 1200px) {
		width: auto;
	}

	@media only screen and (max-width: 960px) {
		padding: 30px 45px 25px;
		border-radius: 15px;
		height: auto;
	}
	@media only screen and (max-width: 500px) {
		width: 100%;
		padding: 35px 40px;
		margin: 0 2vw;
	}

	@keyframes slideToTop {
		0% {
			opacity: 1;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(-10%);
		}
	}
`

export default EmailVerifyContainerStyled
