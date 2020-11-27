import gql from 'graphql-tag'

export const SERVER_KEYS = gql`
	query serverPublicKey {
		serverPublicKey {
			key
		}
	}
`
export const RAPID_SCORE = gql`
	query rapidScore(
		$email: String!
		$firstName: String
		$lastName: String
		$phoneNumber: String
		$cpf: String!
		$numberBin: String
		$address: [AddressVerifyEmailScoreInput]
	) {
		verifyEmailRapidScore(
			email: $email
			firstName: $firstName
			lastName: $lastName
			phoneNumber: $phoneNumber
			legalId: { cpf: $cpf }
			transaction: { numberBin: $numberBin }
			address: $address
		) {
			correlationId
			version
			created
			trackingId
			reason
			riskBand
			email {
				exists
				ownerNameMatch
				totalHits
				uniqueHits
				firstVerificationDate
				created
				dateOfBirth
				lastFlaggedOn
				ownerName
				gender
				company
				title
				lastFlaggedIndustry
				score {
					reason
					riskLevel
					relevantInfoId
				}
				socialMedia {
					socialMediaFriends
					image
					socialMediaLinks {
						source
						link
					}
				}
			}
			domain {
				exists
				categoryCode
				corporate
				created
				name
				company
				country
				score {
					reason
					riskLevel
					relevantInfoId
				}
			}
			transaction {
				id
				cardType
				isPrepaid
				issuerBank
				issuerBrand
				issuerCountry
				cardCategory
				score {
					reason
					riskLevel
					relevantInfoId
				}
			}
			device {
				source
				id
				score {
					reason
					riskLevel
					relevantInfoId
				}
			}
			ip {
				address
				isCorporateProxy
				isRiskCountry
				isCountryMatch
				isAnonymous
				reputation
				proxyType
				proxyIdentification
				billingAddressDistance
				registration {
					isp
					org
					asnum
					domain
					userType
					netSpeedCell
				}
				location {
					continentCode
					countryCode
					regionCode
					city
					postalCode
					regionConfidence
					timezoneOffset
					cityConfidence
					countryConfidence
					postalCodeConfidence
					callingCode
					metroCode
					latitude
					longitude
				}
				score {
					reason
					riskLevel
					relevantInfoId
				}
			}
			service {
				existingCustomer
				location
				detail
				category
				deliveryType
				date
				score {
					reason
					riskLevel
					relevantInfoId
				}
			}
			digitalIdentity {
				overallScore
				emailToIpConfidence
				emailToPhoneConfidence
				emailToBillAddressConfidence
				emailToShipAddressConfidence
				emailToFullNameConfidence
				emailToLastNameConfidence
				ipToPhoneConfidence
				ipToBillAddressConfidence
				phoneToFullNameConfidence
				phoneToLastNameConfidence
				shipAddressToBillAddressConfidence
				shipAddressToFullNameConfidence
				shipAddressToLastNameConfidence
				billAddressToLastNameConfidence
			}
			phone {
				isBillingLocation
				number
				ownerNameMatch
				countryCode
				carrier
				ownerName
				ownerType
				score {
					reason
					riskLevel
					relevantInfoId
				}
			}
			address {
				isShipForward
				isShipCityPostalMatch
				isBillCityPostalMatch
				addressCheck
				street1
				street2
				city
				regionCode
				postalCode
				countryCode
				company
				type
				score {
					reason
					riskLevel
					relevantInfoId
				}
			}
		}
	}
`
export const CLASSIC_SCORE = gql`
	query classicScore(
		$email: String!
		$firstName: String
		$lastName: String
		$phoneNumber: String
		$cpf: String!
		$numberBin: String
		$address: [AddressVerifyEmailScoreInput]
	) {
		verifyEmailClassicScore(
			email: $email
			firstName: $firstName
			lastName: $lastName
			phoneNumber: $phoneNumber
			legalId: { cpf: $cpf }
			transaction: { numberBin: $numberBin }
			address: $address
		) {
			domain {
				exists
				name
				company
				country
				category
				corporate
				riskLevel
				relevantInfo
				risklevelId
				countryMatch
				riskCountry
			}
			digitalIdentity {
				overallScore
				emailToIpConfidence
				emailToPhoneConfidence
				emailToBillAddressConfidence
				emailToShipAddressConfidence
				emailToFullNameConfidence
				emailToLastNameConfidence
				ipToPhoneConfidence
				ipToBillAddressConfidence
				phoneToFullNameConfidence
				phoneToLastNameConfidence
				shipAddressToBillAddressConfidence
				shipAddressToFullNameConfidence
				shipAddressToLastNameConfidence
				billAddressToLastNameConfidence
			}
			ip {
				riskLevelId
				riskReasonId
				riskLevel
				riskReason
				reputation
				anonymousDetected
				proxyType
				isp
				org
				userType
				netSpeedCell
				corporateProxy
				continentCode
				country
				countryCode
				city
				callingcode
				metroCode
				map
				countrymatch
				latitude
				latitude
				longitude
			}
			emailAge {
				score
				statusId
				reasonId
				adviceId
				riskBandId
				status
				reason
				advice
				riskBand
			}
			email {
				address
				exists
				gender
				location
				company
				title
				nameMatch
				countryMatch
				sourceIndustry
				dateOfBirth
				fraudRisk
				fraudType
				billRiskCountry
				totalHits
				uniqueHits
				firstVerification
				lastVerification
				lastFlaggEdon
				socialMedia {
					socialMediaFriends
					image
					socialMediaLinks {
						source
						link
					}
				}
			}
			phone {
				number
				status
				countryCode
				carrier
				carrierType
				ownerName
				ownerNameMatch
				ownerType
			}
			transaction {
				issuerBank
				issuerBrand
				issuerCountry
				cardCategory
				cardType
			}
		}
	}
`
