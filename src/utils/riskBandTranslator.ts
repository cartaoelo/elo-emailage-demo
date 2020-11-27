export const riskBandTranslator = (riskBand: number) => {
	switch (riskBand) {
		case 1:
			return 'Score de Fraude entre 0 e 100'
			break
		case 2:
			return 'Score de Fraude entre 101 e 300'
			break
		case 3:
			return 'Score de Fraude entre 301 e 600'
			break
		case 4:
			return 'Score de Fraude entre 601 e 799'
			break
		case 5:
			return 'Score de Fraude entre 800 e 899'
			break
		case 6:
			return 'Score de Fraude entre 900 e 999'
			break

		default:
			return 'Score desconhecido'
			break
	}
}

export default riskBandTranslator
