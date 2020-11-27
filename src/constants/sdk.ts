import { GraphQLClient } from 'graphql-request'
import { print } from 'graphql'
import { GraphQLError } from 'graphql-request/dist/types'
import { Headers } from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	Date: any
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: any
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTimeZone: any
	LengthValidator: any
}

export type Query = {
	__typename?: 'Query'
	node?: Maybe<Node>
	personOccupations?: Maybe<Array<PersonOccupation>>
	verifyEmailClassicScore: EmailAgeClassicScoreResponse
	verifyEmailRapidScore: EmailAgeRapidScoreResponse
	maskedUserContacts?: Maybe<Array<MaskedUserContact>>
	verifyProfileScore: ProfileScore
	settlementLetter: SettlementLetter
	settlementLetterPdf: SettlementLetterPdf
	bin?: Maybe<Bin>
	binTable?: Maybe<BinTable>
	cardProducts?: Maybe<CardProductsConnection>
	cardBrands?: Maybe<CardBrandsConnection>
	cardCaptures?: Maybe<CardCapturesConnection>
	cardCapture?: Maybe<CardCapture>
	cardUsages?: Maybe<CardUsagesConnection>
	cardUsage?: Maybe<CardUsage>
	cardNetworks?: Maybe<CardNetworksConnection>
	cardInterfaceByHash?: Maybe<CardInterface>
	cards?: Maybe<CardsConnection>
	cardTokens?: Maybe<CardTokensConnection>
	cardHolders?: Maybe<CardHoldersConnection>
	insuranceProductCategory: Array<InsuranceProductCategory>
	cardIssuers?: Maybe<CardIssuersConnection>
	merchants?: Maybe<MerchantsConnection>
	merchant?: Maybe<Merchant>
	merchantCategories?: Maybe<MerchantCategoriesConnection>
	merchantCategory?: Maybe<MerchantCategory>
	psp?: Maybe<Psp>
	homeAssistence: HomeAssistence
	schedule: Array<Maybe<Schedule>>
	keyLabels?: Maybe<KeyLabelConnection>
	acquirers?: Maybe<Array<Maybe<Acquirer>>>
	verifyPaymentAccounts?: Maybe<VerifyPaymentAccountsConnection>
	documents?: Maybe<DocumentConnection>
	simSwap: SimSwap
	benefitUsages?: Maybe<Array<Maybe<BenefitUsage>>>
	availableBenefits?: Maybe<BenefitCatalog>
	issuedBenefits?: Maybe<Array<Maybe<IssuedBenefit>>>
	providers?: Maybe<Array<Maybe<Provider>>>
	serverPublicKey?: Maybe<ServerPublicKey>
	user?: Maybe<User>
	users?: Maybe<UsersConnection>
	provisionedUsers?: Maybe<ProvisionedUsersConnection>
	agreementTerms?: Maybe<AgreementTermsConnection>
	cardTokenForUserAsyncStatus: CardTokenForUserAsyncStatusPayload
	promotions?: Maybe<PromotionsPage>
	userPromotions?: Maybe<PromotionsPage>
	userInterests?: Maybe<Array<UserInterest>>
	interests?: Maybe<InterestsConnection>
	communicationChannelBlock: CommunicationChannelBlock
}

export type QueryNodeArgs = {
	id: Scalars['ID']
}

export type QueryPersonOccupationsArgs = {
	language?: Maybe<Scalars['String']>
}

export type QueryVerifyEmailClassicScoreArgs = {
	email: Scalars['String']
	ipAddress?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	phoneNumber?: Maybe<Scalars['String']>
	legalId?: Maybe<LegalIdsPersonInput>
	address?: Maybe<Array<Maybe<AddressVerifyEmailScoreInput>>>
	transaction?: Maybe<TransactionVerifyEmailAgeInput>
}

export type QueryVerifyEmailRapidScoreArgs = {
	email: Scalars['String']
	ipAddress?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	phoneNumber?: Maybe<Scalars['String']>
	legalId?: Maybe<LegalIdsPersonInput>
	address?: Maybe<Array<Maybe<AddressVerifyEmailScoreInput>>>
	transaction?: Maybe<TransactionVerifyEmailAgeInput>
}

export type QueryMaskedUserContactsArgs = {
	legalIds: LegalIdsInputCpfCnpjInput
}

export type QueryVerifyProfileScoreArgs = {
	cpf: Scalars['String']
}

export type QuerySettlementLetterArgs = {
	filter: SettlementLetterFilterInput
}

export type QuerySettlementLetterPdfArgs = {
	filter: SettlementLetterFilterPdfInput
}

export type QueryBinArgs = {
	number: Scalars['String']
}

export type QueryBinTableArgs = {
	ifModifiedSince?: Maybe<Scalars['DateTime']>
	ifNoneMatch?: Maybe<Scalars['String']>
	cardIssuerName?: Maybe<Scalars['String']>
	codeProduct?: Maybe<CodeProduct>
}

export type QueryCardProductsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
}

export type QueryCardBrandsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
}

export type QueryCardCapturesArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
}

export type QueryCardCaptureArgs = {
	code: Scalars['Int']
}

export type QueryCardUsagesArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
}

export type QueryCardUsageArgs = {
	code: Scalars['Int']
}

export type QueryCardNetworksArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
}

export type QueryCardInterfaceByHashArgs = {
	sha256: Scalars['String']
}

export type QueryCardsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardFilterInput>
}

export type QueryCardTokensArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardTokenFilterInput>
}

export type QueryCardHoldersArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<SearchFilterInput>
}

export type QueryInsuranceProductCategoryArgs = {
	productCategoryId?: Maybe<Scalars['ID']>
	displayContains?: Maybe<Scalars['String']>
}

export type QueryCardIssuersArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<SearchFilterInput>
}

export type QueryMerchantsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<MerchantFilterInput>
}

export type QueryMerchantArgs = {
	legalIds: CompanyLegalIdsInput
}

export type QueryMerchantCategoriesArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<MerchantCategoryFilterInput>
}

export type QueryMerchantCategoryArgs = {
	iso: Scalars['Int']
}

export type QueryHomeAssistenceArgs = {
	id: Scalars['ID']
}

export type QueryScheduleArgs = {
	id: Scalars['ID']
}

export type QueryKeyLabelsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<KeyLabelFilterInput>
}

export type QueryAcquirersArgs = {
	filter?: Maybe<AcquirerFilterInput>
}

export type QueryVerifyPaymentAccountsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<VerifyPaymentAccountFilterInput>
}

export type QueryDocumentsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter: DocumentsForUserFilterInput
}

export type QuerySimSwapArgs = {
	phone: Scalars['String']
}

export type QueryBenefitUsagesArgs = {
	filter?: Maybe<BenefitUsagesFilterInput>
}

export type QueryAvailableBenefitsArgs = {
	filter?: Maybe<AvailableBenefitFilterInput>
}

export type QueryIssuedBenefitsArgs = {
	filter?: Maybe<BenefitFilterInput>
}

export type QueryUserArgs = {
	id?: Maybe<Scalars['String']>
	username?: Maybe<Scalars['String']>
	legalId?: Maybe<LegalIdsInput>
	socialNetwork?: Maybe<SocialNetworkInput>
	cardHolderId?: Maybe<Scalars['String']>
	merchantId?: Maybe<Scalars['String']>
}

export type QueryUsersArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<UserFilterInput>
}

export type QueryProvisionedUsersArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<ProvisionedUserFilterInput>
}

export type QueryAgreementTermsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<AgreementTermFilterInput>
}

export type QueryCardTokenForUserAsyncStatusArgs = {
	cardTokenRequestId: Scalars['ID']
}

export type QueryPromotionsArgs = {
	limit: Scalars['Int']
	offset: Scalars['Int']
	filter?: Maybe<PromotionsFilterInput>
}

export type QueryUserPromotionsArgs = {
	limit: Scalars['Int']
	offset: Scalars['Int']
	filter: RootUserPromotionsFilterInput
}

export type QueryUserInterestsArgs = {
	filter: UserInterestsFilter
}

export type QueryInterestsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<InterestsFilterInput>
}

export type QueryCommunicationChannelBlockArgs = {
	id: Scalars['ID']
}

export type Node = {
	id: Scalars['ID']
}

export type PersonOccupation = {
	__typename?: 'PersonOccupation'
	id: Scalars['ID']
	display: Scalars['String']
}

export type LegalIdsPersonInput = {
	cpf: Scalars['String']
}

export type AddressVerifyEmailScoreInput = {
	zip?: Maybe<Scalars['String']>
	place?: Maybe<Scalars['String']>
	number?: Maybe<Scalars['Int']>
	city?: Maybe<Scalars['String']>
	state?: Maybe<Scalars['String']>
	country?: Maybe<Scalars['String']>
	countryCode?: Maybe<Scalars['String']>
	type: AddressVerifyEmailScoreEnum
}

export type AddressVerifyEmailScoreEnum = 'SHIPPING' | 'BILLING'

export type TransactionVerifyEmailAgeInput = {
	numberBin?: Maybe<Scalars['String']>
}

export type EmailAgeClassicScoreResponse = {
	__typename?: 'EmailAgeClassicScoreResponse'
	domain?: Maybe<DomainEmailAgeClassicResponse>
	digitalIdentity?: Maybe<DigitalIdentityEmailAgeResponse>
	ip?: Maybe<IpEmailAgeClassicResponse>
	emailAge?: Maybe<EaEmailAgeClassicResponse>
	email?: Maybe<EmailEmailAgeClassicResponse>
	phone?: Maybe<PhoneEmailAgeClassicResponse>
	transaction?: Maybe<TransactionEmailAgeClassicResponse>
}

export type DomainEmailAgeClassicResponse = {
	__typename?: 'DomainEmailAgeClassicResponse'
	exists?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	company?: Maybe<Scalars['String']>
	country?: Maybe<Scalars['String']>
	category?: Maybe<Scalars['String']>
	corporate?: Maybe<Scalars['String']>
	riskLevel?: Maybe<Scalars['String']>
	relevantInfo?: Maybe<Scalars['String']>
	risklevelId?: Maybe<Scalars['String']>
	relevantInfoId?: Maybe<Scalars['String']>
	countryMatch?: Maybe<Scalars['String']>
	riskCountry?: Maybe<Scalars['String']>
}

export type DigitalIdentityEmailAgeResponse = {
	__typename?: 'DigitalIdentityEmailAgeResponse'
	overallScore?: Maybe<Scalars['Int']>
	emailToIpConfidence?: Maybe<Scalars['Int']>
	emailToPhoneConfidence?: Maybe<Scalars['Int']>
	emailToBillAddressConfidence?: Maybe<Scalars['Int']>
	emailToShipAddressConfidence?: Maybe<Scalars['Int']>
	emailToFullNameConfidence?: Maybe<Scalars['Int']>
	emailToLastNameConfidence?: Maybe<Scalars['Int']>
	ipToPhoneConfidence?: Maybe<Scalars['Int']>
	ipToBillAddressConfidence?: Maybe<Scalars['Int']>
	ipToShipAddressConfidence?: Maybe<Scalars['Int']>
	ipToFullNameConfidence?: Maybe<Scalars['Int']>
	ipToLastNameConfidence?: Maybe<Scalars['Int']>
	phoneToBillAddressConfidence?: Maybe<Scalars['Int']>
	phoneToShipAddressConfidence?: Maybe<Scalars['Int']>
	phoneToFullNameConfidence?: Maybe<Scalars['Int']>
	phoneToLastNameConfidence?: Maybe<Scalars['Int']>
	billAddressToFullNameConfidence?: Maybe<Scalars['Int']>
	billAddressToLastNameConfidence?: Maybe<Scalars['Int']>
	shipAddressToBillAddressConfidence?: Maybe<Scalars['Int']>
	shipAddressToFullNameConfidence?: Maybe<Scalars['Int']>
	shipAddressToLastNameConfidence?: Maybe<Scalars['Int']>
}

export type IpEmailAgeClassicResponse = {
	__typename?: 'IpEmailAgeClassicResponse'
	riskLevelId?: Maybe<Scalars['Int']>
	riskReasonId?: Maybe<Scalars['Int']>
	riskLevel?: Maybe<Scalars['String']>
	riskReason?: Maybe<Scalars['String']>
	reputation?: Maybe<Scalars['String']>
	anonymousDetected?: Maybe<Scalars['String']>
	proxyType?: Maybe<Scalars['String']>
	isp?: Maybe<Scalars['String']>
	org?: Maybe<Scalars['String']>
	userType?: Maybe<Scalars['String']>
	netSpeedCell?: Maybe<Scalars['String']>
	corporateProxy?: Maybe<Scalars['String']>
	continentCode?: Maybe<Scalars['String']>
	country?: Maybe<Scalars['String']>
	countryCode?: Maybe<Scalars['String']>
	city?: Maybe<Scalars['String']>
	callingcode?: Maybe<Scalars['String']>
	metroCode?: Maybe<Scalars['String']>
	map?: Maybe<Scalars['String']>
	countrymatch?: Maybe<Scalars['String']>
	latitude?: Maybe<Scalars['Float']>
	longitude?: Maybe<Scalars['Float']>
}

export type EaEmailAgeClassicResponse = {
	__typename?: 'EaEmailAgeClassicResponse'
	score?: Maybe<Scalars['Int']>
	statusId?: Maybe<Scalars['Int']>
	reasonId?: Maybe<Scalars['Int']>
	adviceId?: Maybe<Scalars['Int']>
	riskBandId?: Maybe<Scalars['Int']>
	status?: Maybe<Scalars['String']>
	reason?: Maybe<Scalars['String']>
	advice?: Maybe<Scalars['String']>
	riskBand?: Maybe<Scalars['String']>
}

export type EmailEmailAgeClassicResponse = {
	__typename?: 'EmailEmailAgeClassicResponse'
	address?: Maybe<Scalars['String']>
	exists?: Maybe<Scalars['String']>
	gender?: Maybe<Scalars['String']>
	location?: Maybe<Scalars['String']>
	company?: Maybe<Scalars['String']>
	title?: Maybe<Scalars['String']>
	nameMatch?: Maybe<Scalars['String']>
	countryMatch?: Maybe<Scalars['String']>
	sourceIndustry?: Maybe<Scalars['String']>
	dateOfBirth?: Maybe<Scalars['String']>
	fraudRisk?: Maybe<Scalars['String']>
	fraudType?: Maybe<Scalars['String']>
	billRiskCountry?: Maybe<Scalars['String']>
	totalHits?: Maybe<Scalars['String']>
	uniqueHits?: Maybe<Scalars['String']>
	firstVerification?: Maybe<Scalars['String']>
	lastVerification?: Maybe<Scalars['String']>
	lastFlaggEdon?: Maybe<Scalars['String']>
	socialMedia?: Maybe<SocialMediaRiskScoreResponse>
}

export type SocialMediaRiskScoreResponse = {
	__typename?: 'socialMediaRiskScoreResponse'
	socialMediaFriends?: Maybe<Scalars['Int']>
	image?: Maybe<Scalars['String']>
	socialMediaLinks?: Maybe<Array<Maybe<SocialMediaLink>>>
}

export type SocialMediaLink = {
	__typename?: 'socialMediaLink'
	source?: Maybe<Scalars['String']>
	link?: Maybe<Scalars['String']>
}

export type PhoneEmailAgeClassicResponse = {
	__typename?: 'PhoneEmailAgeClassicResponse'
	number?: Maybe<Scalars['String']>
	status?: Maybe<Scalars['String']>
	countryCode?: Maybe<Scalars['String']>
	carrier?: Maybe<Scalars['String']>
	carrierType?: Maybe<Scalars['String']>
	ownerName?: Maybe<Scalars['String']>
	ownerNameMatch?: Maybe<Scalars['String']>
	ownerType?: Maybe<Scalars['String']>
}

export type TransactionEmailAgeClassicResponse = {
	__typename?: 'TransactionEmailAgeClassicResponse'
	issuerBank?: Maybe<Scalars['String']>
	issuerBrand?: Maybe<Scalars['String']>
	issuerCountry?: Maybe<Scalars['String']>
	cardCategory?: Maybe<Scalars['String']>
	cardType?: Maybe<Scalars['String']>
}

export type EmailAgeRapidScoreResponse = {
	__typename?: 'EmailAgeRapidScoreResponse'
	correlationId?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
	created?: Maybe<Scalars['String']>
	trackingId?: Maybe<Scalars['String']>
	score?: Maybe<Scalars['Int']>
	reason?: Maybe<Scalars['String']>
	riskBand?: Maybe<Scalars['Int']>
	email?: Maybe<EmailAgeRapidResponse>
	domain?: Maybe<DomainEmailAgeRapidResponse>
	transaction?: Maybe<TransactionEmailAgeRapidResponse>
	device?: Maybe<DeviceEmailAgeRapidResponse>
	ip?: Maybe<IpEmailAgeRapidResponse>
	service?: Maybe<ServiceEmailAgeRapidResponse>
	digitalIdentity?: Maybe<DigitalIdentityEmailAgeResponse>
	phone?: Maybe<PhoneEmailAgeRapidResponse>
	address?: Maybe<Array<Maybe<AddressEmailAgeRapidResponse>>>
}

export type EmailAgeRapidResponse = {
	__typename?: 'EmailAgeRapidResponse'
	exists?: Maybe<Scalars['Int']>
	ownerNameMatch?: Maybe<Scalars['Int']>
	totalHits?: Maybe<Scalars['Int']>
	uniqueHits?: Maybe<Scalars['Int']>
	firstVerificationDate?: Maybe<Scalars['String']>
	created?: Maybe<Scalars['String']>
	dateOfBirth?: Maybe<Scalars['String']>
	lastFlaggedOn?: Maybe<Scalars['String']>
	ownerName?: Maybe<Scalars['String']>
	gender?: Maybe<Scalars['String']>
	location?: Maybe<Scalars['String']>
	company?: Maybe<Scalars['String']>
	title?: Maybe<Scalars['String']>
	lastFlaggedIndustry?: Maybe<Scalars['String']>
	score?: Maybe<ScoreRiskScoreResponse>
	socialMedia?: Maybe<SocialMediaRiskScoreResponse>
}

export type ScoreRiskScoreResponse = {
	__typename?: 'scoreRiskScoreResponse'
	reason?: Maybe<Scalars['String']>
	riskLevel?: Maybe<Scalars['Int']>
	relevantInfoId?: Maybe<Scalars['Int']>
}

export type DomainEmailAgeRapidResponse = {
	__typename?: 'DomainEmailAgeRapidResponse'
	exists?: Maybe<Scalars['Int']>
	categoryCode?: Maybe<Scalars['Int']>
	corporate?: Maybe<Scalars['Int']>
	created?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	company?: Maybe<Scalars['String']>
	country?: Maybe<Scalars['String']>
	score?: Maybe<ScoreRiskScoreResponse>
}

export type TransactionEmailAgeRapidResponse = {
	__typename?: 'TransactionEmailAgeRapidResponse'
	id?: Maybe<Scalars['String']>
	cardType?: Maybe<Scalars['Int']>
	isPrepaid?: Maybe<Scalars['Boolean']>
	issuerBank?: Maybe<Scalars['String']>
	issuerBrand?: Maybe<Scalars['String']>
	issuerCountry?: Maybe<Scalars['String']>
	cardCategory?: Maybe<Scalars['String']>
	score?: Maybe<ScoreRiskScoreResponse>
}

export type DeviceEmailAgeRapidResponse = {
	__typename?: 'DeviceEmailAgeRapidResponse'
	source?: Maybe<Scalars['Int']>
	id?: Maybe<Scalars['String']>
	score?: Maybe<ScoreRiskScoreResponse>
}

export type IpEmailAgeRapidResponse = {
	__typename?: 'IpEmailAgeRapidResponse'
	address?: Maybe<Scalars['String']>
	isCorporateProxy?: Maybe<Scalars['Boolean']>
	isRiskCountry?: Maybe<Scalars['Boolean']>
	isCountryMatch?: Maybe<Scalars['Boolean']>
	isAnonymous?: Maybe<Scalars['Boolean']>
	reputation?: Maybe<Scalars['Int']>
	proxyType?: Maybe<Scalars['Int']>
	proxyIdentification?: Maybe<Scalars['Int']>
	billingAddressDistance?: Maybe<Scalars['Float']>
	registration?: Maybe<RegistrationRiskScoreResponse>
	location?: Maybe<LocationRiskScoreResponse>
	score?: Maybe<ScoreRiskScoreResponse>
}

export type RegistrationRiskScoreResponse = {
	__typename?: 'registrationRiskScoreResponse'
	isp?: Maybe<Scalars['String']>
	org?: Maybe<Scalars['String']>
	asnum?: Maybe<Scalars['String']>
	domain?: Maybe<Scalars['String']>
	userType?: Maybe<Scalars['Int']>
	netSpeedCell?: Maybe<Scalars['Int']>
}

export type LocationRiskScoreResponse = {
	__typename?: 'locationRiskScoreResponse'
	continentCode?: Maybe<Scalars['String']>
	countryCode?: Maybe<Scalars['String']>
	regionCode?: Maybe<Scalars['String']>
	city?: Maybe<Scalars['String']>
	postalCode?: Maybe<Scalars['String']>
	regionConfidence?: Maybe<Scalars['Int']>
	timezoneOffset?: Maybe<Scalars['Int']>
	cityConfidence?: Maybe<Scalars['Int']>
	countryConfidence?: Maybe<Scalars['Int']>
	postalCodeConfidence?: Maybe<Scalars['Int']>
	callingCode?: Maybe<Scalars['Int']>
	metroCode?: Maybe<Scalars['Int']>
	latitude?: Maybe<Scalars['Float']>
	longitude?: Maybe<Scalars['Float']>
}

export type ServiceEmailAgeRapidResponse = {
	__typename?: 'ServiceEmailAgeRapidResponse'
	existingCustomer?: Maybe<Scalars['Boolean']>
	location?: Maybe<Scalars['String']>
	detail?: Maybe<Scalars['String']>
	category?: Maybe<Scalars['String']>
	deliveryType?: Maybe<Scalars['String']>
	date?: Maybe<Scalars['String']>
	score?: Maybe<ScoreRiskScoreResponse>
}

export type PhoneEmailAgeRapidResponse = {
	__typename?: 'PhoneEmailAgeRapidResponse'
	isBillingLocation?: Maybe<Scalars['Boolean']>
	number?: Maybe<Scalars['String']>
	ownerNameMatch?: Maybe<Scalars['Int']>
	countryCode?: Maybe<Scalars['String']>
	carrier?: Maybe<Scalars['String']>
	ownerName?: Maybe<Scalars['String']>
	ownerType?: Maybe<Scalars['String']>
	score?: Maybe<ScoreRiskScoreResponse>
}

export type AddressEmailAgeRapidResponse = {
	__typename?: 'AddressEmailAgeRapidResponse'
	isShipForward?: Maybe<Scalars['Boolean']>
	isShipCityPostalMatch?: Maybe<Scalars['Boolean']>
	isBillCityPostalMatch?: Maybe<Scalars['Boolean']>
	addressCheck?: Maybe<Scalars['Int']>
	street1?: Maybe<Scalars['String']>
	street2?: Maybe<Scalars['String']>
	city?: Maybe<Scalars['String']>
	regionCode?: Maybe<Scalars['String']>
	postalCode?: Maybe<Scalars['String']>
	countryCode?: Maybe<Scalars['String']>
	company?: Maybe<Scalars['String']>
	type: Scalars['String']
	score?: Maybe<ScoreRiskScoreResponse>
}

export type LegalIdsInputCpfCnpjInput = {
	cpf?: Maybe<Scalars['String']>
	cnpj?: Maybe<Scalars['String']>
}

export type MaskedUserContact = {
	__typename?: 'maskedUserContact'
	id: Scalars['ID']
	type: PersonContactType
	value: Scalars['String']
}

export type PersonContactType = 'PHONE' | 'EMAIL' | 'IM' | 'OTHER'

export type ProfileScore = {
	__typename?: 'ProfileScore'
	digitalLevel?: Maybe<Scalars['Boolean']>
	score?: Maybe<ScoreClientRisk>
}

export type ScoreClientRisk = {
	__typename?: 'ScoreClientRisk'
	value?: Maybe<Scalars['Int']>
	spendingIndex?: Maybe<Scalars['String']>
	digitalVarietyRisk?: Maybe<Scalars['Int']>
	digitalBehaviourRisk?: Maybe<Scalars['Int']>
	profileRisk?: Maybe<Scalars['Int']>
	statusRisk?: Maybe<Scalars['Int']>
	postalRisk?: Maybe<Scalars['Int']>
	rapportRisk?: Maybe<Scalars['Int']>
}

export type SettlementLetterFilterInput = {
	networkId: Scalars['Int']
	gridDate: Scalars['Date']
	platformType: PlatformTypeInput
}

export type PlatformTypeInput = 'DEBITO' | 'CREDITO'

export type SettlementLetter = {
	__typename?: 'SettlementLetter'
	participantId?: Maybe<Scalars['Int']>
	participantName?: Maybe<Scalars['String']>
	ispb?: Maybe<Scalars['String']>
	platformType?: Maybe<Scalars['String']>
	approvalDate?: Maybe<Scalars['String']>
	contactInfo?: Maybe<ContactInfo>
	firstCycle?: Maybe<Cycle>
	secondCycle?: Maybe<Cycle>
}

export type ContactInfo = {
	__typename?: 'ContactInfo'
	message: Scalars['String']
}

export type Cycle = {
	__typename?: 'Cycle'
	clearingType: Scalars['String']
	amount: Scalars['Float']
	remunerationData?: Maybe<RemunerationData>
	transactional?: Maybe<Array<Maybe<Transactional>>>
	services?: Maybe<Array<Maybe<Service>>>
}

export type RemunerationData = {
	__typename?: 'RemunerationData'
	description?: Maybe<Scalars['String']>
	value?: Maybe<Scalars['Float']>
	adjustmentValue?: Maybe<Scalars['Float']>
	netValue?: Maybe<Scalars['Float']>
}

export type Transactional = {
	__typename?: 'Transactional'
	participantId?: Maybe<Scalars['String']>
	participantName?: Maybe<Scalars['String']>
	value?: Maybe<Scalars['Float']>
	adjustmentValue?: Maybe<Scalars['Float']>
	netValue?: Maybe<Scalars['Float']>
}

export type Service = {
	__typename?: 'Service'
	participantId?: Maybe<Scalars['String']>
	participantName?: Maybe<Scalars['String']>
	value?: Maybe<Scalars['Float']>
	adjustmentValue?: Maybe<Scalars['Float']>
	netValue?: Maybe<Scalars['Float']>
}

export type SettlementLetterFilterPdfInput = {
	networkId: Scalars['Int']
	gridDate: Scalars['Date']
	platformType: PlatformPdfInputType
}

export type PlatformPdfInputType = 'DEBITO' | 'CREDITO'

export type SettlementLetterPdf = {
	__typename?: 'SettlementLetterPdf'
	file?: Maybe<Scalars['String']>
}

export type Bin = BaseBinInterface & {
	__typename?: 'BIN'
	number: Scalars['String']
	panSizeRange: IntRange
	funding: CardFunding
	product: CardProduct
	country: Scalars['String']
	isInternational: Scalars['Boolean']
	regexp: Scalars['String']
	/** @deprecated Esse campo deixa de existir devido a nova API de Bin */
	isP2PEligible?: Maybe<Scalars['Boolean']>
	isCompany: Scalars['Boolean']
	isToken: Scalars['Boolean']
	brand: CardBrand
	allowedCaptures: Array<CardCapture>
	usages: Array<CardUsage>
	network: CardNetwork
	issuer: CardIssuer
	metadata: CardMetadata
	services: Array<CardHolderService>
	changeableServices?: Maybe<Array<CardHolderService>>
	isMigrated?: Maybe<Scalars['Boolean']>
	isFlex?: Maybe<Scalars['Boolean']>
	authorizationDebit?: Maybe<BinAuthorization>
	authorizationCredit?: Maybe<BinAuthorization>
	is3DS?: Maybe<Scalars['Boolean']>
	creditSettlementBankNumber?: Maybe<Scalars['Int']>
	debitSettlementBankNumber?: Maybe<Scalars['Int']>
}

export type BaseBinInterface = {
	number: Scalars['String']
	panSizeRange: IntRange
	funding: CardFunding
	product: CardProduct
	country: Scalars['String']
	isInternational?: Maybe<Scalars['Boolean']>
	regexp: Scalars['String']
}

export type IntRange = {
	__typename?: 'IntRange'
	min: Scalars['Int']
	max: Scalars['Int']
}

export type CardFunding =
	| 'CREDIT'
	| 'DEBIT'
	| 'MULTIPLE'
	| 'MEAL'
	| 'FOOD'
	| 'PREPAID'
	| 'VOUCHER'
	| 'MULTIPLE_PREPAID'

export type CardProduct = Node & {
	__typename?: 'CardProduct'
	id: Scalars['ID']
	code: CodeProduct
	name: Scalars['String']
	image?: Maybe<ImageUrl>
	url?: Maybe<Scalars['String']>
}

export type CardProductImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type CodeProduct =
	| 'BASIC'
	| 'BUSINESS'
	| 'CORPORATE'
	| 'ELO_PLUS'
	| 'SHOPPING'
	| 'GRAFITE'
	| 'NANQUIM'
	| 'AWARDS'
	| 'CORPORATE_EXPENDITURE'
	| 'TRAVEL'
	| 'CORPORATE_NANQUIM'
	| 'GRAFITE_BUSINESS'
	| 'PAYMENT_OF_SUPPLIERS'
	| 'GENERAL_USE'
	| 'GIFT_CARD'
	| 'PAYMENTS'
	| 'ELO_PLUS_ENTERPRISE'
	| 'PREPAID_ENTERPRISE'
	| 'NANQUIM_CORPORATE_DINERS'
	| 'NANQUIM_DINERS'
	| 'CORPORATE_DINERS'
	| 'NANQUIM_ENTERPRISE_DINERS'
	| 'AUTO'
	| 'DEBIT_INTERNATIONAL_ENTERPRISE'
	| 'BNDES'
	| 'PAYMENT_ACCOUNT_LEGAL_PERSON'
	| 'AGRO'
	| 'CONSTRUCARD'

export type ImageUrl = {
	__typename?: 'ImageUrl'
	url: Scalars['String']
	width: Scalars['Int']
	height: Scalars['Int']
	mimeType: Scalars['String']
}

export type CardBrand = Node & {
	__typename?: 'CardBrand'
	id: Scalars['ID']
	name: Scalars['String']
	image?: Maybe<ImageUrl>
	url?: Maybe<Scalars['String']>
}

export type CardBrandImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type CardCapture = Node & {
	__typename?: 'CardCapture'
	id: Scalars['ID']
	name: Scalars['String']
	code: Scalars['Int']
}

export type CardUsage = Node & {
	__typename?: 'CardUsage'
	id: Scalars['ID']
	name: Scalars['String']
	code: Scalars['Int']
}

export type CardNetwork = Node & {
	__typename?: 'CardNetwork'
	id: Scalars['ID']
	name: Scalars['String']
	image?: Maybe<ImageUrl>
	url?: Maybe<Scalars['String']>
}

export type CardNetworkImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type CardIssuer = Node &
	CompanyInterface & {
		__typename?: 'CardIssuer'
		id: Scalars['ID']
		name: Scalars['String']
		legalName: Scalars['String']
		description?: Maybe<Scalars['String']>
		image?: Maybe<ImageUrl>
		legalIds: CompanyLegalIds
		contacts: Array<CompanyContact>
		addresses: Array<Address>
		url?: Maybe<Scalars['String']>
		cards?: Maybe<CardsConnection>
	}

export type CardIssuerImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type CardIssuerCardsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardFilterInput>
}

export type CompanyInterface = {
	id: Scalars['ID']
	name: Scalars['String']
	legalName: Scalars['String']
	description?: Maybe<Scalars['String']>
	image?: Maybe<ImageUrl>
	legalIds: CompanyLegalIds
	contacts: Array<CompanyContact>
	addresses: Array<Address>
	url?: Maybe<Scalars['String']>
}

export type CompanyInterfaceImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type CompanyLegalIds = {
	__typename?: 'CompanyLegalIds'
	cnpj?: Maybe<Cnpj>
}

export type Cnpj = {
	__typename?: 'CNPJ'
	number: Scalars['String']
}

export type CompanyContact = {
	__typename?: 'CompanyContact'
	type: CompanyContactType
	context?: Maybe<Scalars['String']>
	value: Scalars['String']
}

export type CompanyContactType = 'PHONE' | 'EMAIL' | 'IM' | 'OTHER'

export type Address = {
	__typename?: 'Address'
	context?: Maybe<Scalars['String']>
	country: Scalars['String']
	city: Scalars['String']
	state?: Maybe<Scalars['String']>
	zip?: Maybe<Scalars['String']>
	district?: Maybe<Scalars['String']>
	kind?: Maybe<Scalars['String']>
	number?: Maybe<Scalars['Int']>
	place: Scalars['String']
	complement?: Maybe<Scalars['String']>
	reference?: Maybe<Scalars['String']>
	instructions?: Maybe<Scalars['String']>
	lon?: Maybe<Scalars['Float']>
	lat?: Maybe<Scalars['Float']>
}

export type AddressStateArgs = {
	abbrev?: Maybe<Scalars['Boolean']>
}

export type CardFilterInput = {
	status?: Maybe<CardStatus>
	cardHolderServiceId?: Maybe<Scalars['ID']>
	funding?: Maybe<CardFunding>
	cardProductId?: Maybe<Scalars['ID']>
	cardBrandId?: Maybe<Scalars['ID']>
	cardCaptureId?: Maybe<Scalars['ID']>
	cardUsageId?: Maybe<Scalars['ID']>
	cardNetworkId?: Maybe<Scalars['ID']>
	cardIssuerId?: Maybe<Scalars['ID']>
}

export type CardStatus = 'INACTIVE' | 'ACTIVE' | 'SUSPENDED'

export type CardsConnection = {
	__typename?: 'CardsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type PageInfo = {
	__typename?: 'PageInfo'
	hasPreviousPage: Scalars['Boolean']
	hasNextPage: Scalars['Boolean']
	startCursor?: Maybe<Scalars['String']>
	endCursor?: Maybe<Scalars['String']>
}

export type CardsEdge = {
	__typename?: 'CardsEdge'
	cursor: Scalars['String']
	node?: Maybe<Card>
}

export type Card = Node &
	CardInterface & {
		__typename?: 'Card'
		id: Scalars['ID']
		/** @deprecated Este campo não é retornando. Pois é utilizado apenas para envio de dados. */
		sensitive?: Maybe<Scalars['String']>
		last4?: Maybe<Scalars['String']>
		expiry?: Maybe<CardExpiry>
		holder?: Maybe<CardHolder>
		billingAddress?: Maybe<Address>
		verificationStatus?: Maybe<CardVerificationStatus>
		status: CardStatusInterface
		availableServices?: Maybe<Array<CardHolderService>>
		usedServices?: Maybe<Array<CardHolderService>>
		bin?: Maybe<Bin>
		funding?: Maybe<CardFunding>
		product?: Maybe<CardProduct>
		isInternational?: Maybe<Scalars['Boolean']>
		isCompany?: Maybe<Scalars['Boolean']>
		/** @deprecated Esse campo não deve ser retornado, a pesquisa de tokens é feita separadamente. */
		isToken?: Maybe<Scalars['Boolean']>
		cardTokens?: Maybe<CardTokensConnection>
		brand?: Maybe<CardBrand>
		allowedCaptures?: Maybe<Array<CardCapture>>
		usages?: Maybe<Array<CardUsage>>
		network?: Maybe<CardNetwork>
		issuer?: Maybe<CardIssuer>
		metadata?: Maybe<CardMetadata>
		trackings?: Maybe<Array<Maybe<Track>>>
		transactions?: Maybe<CardTransactionsConnection>
		transactionsSummary?: Maybe<Array<CardTransactionCategorySummary>>
		fraudTransactions?: Maybe<CardFraudTransactionsConnection>
		queueFraudTransactions?: Maybe<CardFraudTransactionsConnection>
		extendedWarrantyInsurances?: Maybe<ExtendedWarrantyInsurancesConnection>
		purchaseProtectionInsurances?: Maybe<PurchaseProtectionInsurancesConnection>
		travelInsurances?: Maybe<TravelInsurancesConnection>
		rewards?: Maybe<RewardsConnection>
	}

export type CardSensitiveArgs = {
	keyId?: Maybe<Scalars['String']>
}

export type CardTransactionsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardTransactionFilterInput>
}

export type CardTransactionsSummaryArgs = {
	filter?: Maybe<CardTransactionSummaryFilterInput>
}

export type CardFraudTransactionsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardFraudTransactionFilterInput>
}

export type CardQueueFraudTransactionsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardFraudTransactionFilterInput>
}

export type CardExtendedWarrantyInsurancesArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<ExtendedWarrantyInsuranceFilter>
}

export type CardPurchaseProtectionInsurancesArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<PurchaseProtectionInsuranceFilter>
}

export type CardTravelInsurancesArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<TravelInsuranceFilter>
}

export type CardRewardsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<RewardFilterInput>
}

export type CardInterface = {
	id: Scalars['ID']
	/** @deprecated Esse campo nao deve ser retornado em nenhum caso */
	sensitive?: Maybe<Scalars['String']>
	last4?: Maybe<Scalars['String']>
	expiry?: Maybe<CardExpiry>
	holder?: Maybe<CardHolder>
	billingAddress?: Maybe<Address>
	status: CardStatusInterface
	bin?: Maybe<Bin>
	funding?: Maybe<CardFunding>
	product?: Maybe<CardProduct>
	isInternational?: Maybe<Scalars['Boolean']>
	isCompany?: Maybe<Scalars['Boolean']>
	/** @deprecated Esse campo não deve ser retornado, a pesquisa de tokens é feita separadamente. */
	isToken?: Maybe<Scalars['Boolean']>
	brand?: Maybe<CardBrand>
	allowedCaptures?: Maybe<Array<CardCapture>>
	usages?: Maybe<Array<CardUsage>>
	network?: Maybe<CardNetwork>
	issuer?: Maybe<CardIssuer>
	metadata?: Maybe<CardMetadata>
	availableServices?: Maybe<Array<CardHolderService>>
	usedServices?: Maybe<Array<CardHolderService>>
	transactions?: Maybe<CardTransactionsConnection>
	transactionsSummary?: Maybe<Array<CardTransactionCategorySummary>>
}

export type CardInterfaceSensitiveArgs = {
	keyId?: Maybe<Scalars['String']>
}

export type CardInterfaceTransactionsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardTransactionFilterInput>
}

export type CardInterfaceTransactionsSummaryArgs = {
	filter?: Maybe<CardTransactionSummaryFilterInput>
}

export type CardExpiry = {
	__typename?: 'CardExpiry'
	month: Scalars['Int']
	year: Scalars['Int']
}

export type CardHolder = Node & {
	__typename?: 'CardHolder'
	id: Scalars['ID']
	name?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	companyName?: Maybe<Scalars['String']>
	companyLegalName?: Maybe<Scalars['String']>
	legalIds?: Maybe<LegalIds>
	birthday?: Maybe<Scalars['Date']>
	age?: Maybe<Scalars['Int']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncome>
	occupation?: Maybe<PersonOccupation>
	image?: Maybe<ImageUrl>
	contacts?: Maybe<Array<PersonContact>>
	addresses?: Maybe<Array<Address>>
	wallets?: Maybe<Array<Wallet>>
	cards?: Maybe<CardsConnection>
	cardTokens?: Maybe<CardTokensConnection>
	travelInsurances?: Maybe<TravelInsurancesConnection>
	extendedWarrantyInsurances?: Maybe<ExtendedWarrantyInsurancesConnection>
	purchaseProtectionInsurances?: Maybe<PurchaseProtectionInsurancesConnection>
	homeAssistences?: Maybe<HomeAssistencesConnection>
	documents?: Maybe<DocumentConnection>
	rewards?: Maybe<RewardsConnection>
}

export type CardHolderOccupationArgs = {
	language?: Maybe<Scalars['String']>
}

export type CardHolderImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type CardHolderCardsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardFilterInput>
}

export type CardHolderCardTokensArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardTokenFilterInput>
}

export type CardHolderTravelInsurancesArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<TravelInsuranceFilter>
}

export type CardHolderExtendedWarrantyInsurancesArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<ExtendedWarrantyInsuranceFilter>
}

export type CardHolderPurchaseProtectionInsurancesArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<PurchaseProtectionInsuranceFilter>
}

export type CardHolderHomeAssistencesArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<HomeAssistenceFilter>
}

export type CardHolderDocumentsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<DocumentsFilterInput>
}

export type CardHolderRewardsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<RewardFilterInput>
}

export type LegalIds = {
	__typename?: 'LegalIds'
	cnpj?: Maybe<Cnpj>
	cpf?: Maybe<Cpf>
	rg?: Maybe<Rg>
}

export type Cpf = {
	__typename?: 'CPF'
	number: Scalars['String']
}

export type Rg = {
	__typename?: 'RG'
	number: Scalars['String']
	issuerOrganization?: Maybe<Scalars['String']>
	issuerState?: Maybe<Scalars['String']>
	issueDate?: Maybe<Scalars['Date']>
}

export type Gender = 'FEMALE' | 'MALE'

export type MaritalStatus =
	| 'DIVORCED'
	| 'MARRIED'
	| 'SINGLE'
	| 'WIDOWED'
	| 'COMMON_LAW_MARRIED'

export type PersonYearlyIncome = {
	__typename?: 'PersonYearlyIncome'
	personal?: Maybe<Scalars['Float']>
	family?: Maybe<Scalars['Float']>
	currency?: Maybe<Scalars['String']>
}

export type PersonContact = {
	__typename?: 'PersonContact'
	type: PersonContactType
	context?: Maybe<Scalars['String']>
	value: Scalars['String']
	verified?: Maybe<VerifiedStatus>
}

export type VerifiedStatus =
	| 'UNVERIFIED'
	| 'PENDING'
	| 'VERIFIED'
	| 'FAILED'
	| 'NOT_APPLICABLE'

export type Wallet = Node & {
	__typename?: 'Wallet'
	id: Scalars['ID']
	name: Scalars['String']
	holder: CardHolder
	cards?: Maybe<CardsConnection>
}

export type WalletCardsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardFilterInput>
}

export type CardTokenFilterInput = {
	status?: Maybe<CardStatus>
	origin?: Maybe<CardTokenOriginFilter>
}

export type CardTokenOriginFilter = {
	ip?: Maybe<Scalars['String']>
	deviceType?: Maybe<DeviceType>
	merchantUserId?: Maybe<Scalars['String']>
	walletId?: Maybe<Scalars['ID']>
}

export type DeviceType =
	| 'DESKTOP'
	| 'LAPTOP'
	| 'SMARTPHONE'
	| 'TABLET'
	| 'E_READER'
	| 'WATCH'
	| 'OTHER_WEARABLE'
	| 'CAR'
	| 'MOTORCYCLE'
	| 'BOAT'
	| 'AIRPLANE'
	| 'OTHER_VEHICLE'
	| 'PORTABLE_GAME_CONSOLE'
	| 'GAME_CONSOLE'
	| 'CAMERA'
	| 'SMARTTV'
	| 'PORTABLE_MEDIA_DEVICE'
	| 'MEDIA_DEVICE'
	| 'HOME_APPLIANCE'

export type CardTokensConnection = {
	__typename?: 'CardTokensConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardTokensEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type CardTokensEdge = {
	__typename?: 'CardTokensEdge'
	cursor: Scalars['String']
	node?: Maybe<CardToken>
}

export type CardToken = Node &
	CardInterface & {
		__typename?: 'CardToken'
		id: Scalars['ID']
		sensitive?: Maybe<Scalars['String']>
		last4?: Maybe<Scalars['String']>
		expiry?: Maybe<CardExpiry>
		holder?: Maybe<CardHolder>
		billingAddress?: Maybe<Address>
		status: CardStatusInterface
		usageConstraints?: Maybe<CardUsageConstraints>
		availableServices?: Maybe<Array<CardHolderService>>
		usedServices?: Maybe<Array<CardHolderService>>
		bin?: Maybe<Bin>
		funding?: Maybe<CardFunding>
		product?: Maybe<CardProduct>
		isInternational?: Maybe<Scalars['Boolean']>
		isCompany?: Maybe<Scalars['Boolean']>
		/** @deprecated Esse campo não deve ser retornado, a pesquisa de tokens é feita separadamente. */
		isToken?: Maybe<Scalars['Boolean']>
		brand?: Maybe<CardBrand>
		allowedCaptures?: Maybe<Array<CardCapture>>
		usages?: Maybe<Array<CardUsage>>
		network?: Maybe<CardNetwork>
		issuer?: Maybe<CardIssuer>
		metadata?: Maybe<CardMetadata>
		transactions?: Maybe<CardTransactionsConnection>
		transactionsSummary?: Maybe<Array<CardTransactionCategorySummary>>
		card?: Maybe<Card>
		cardOrigin?: Maybe<CardOrigin>
		origin?: Maybe<CardTokenOrigin>
		tokenRequestorId?: Maybe<Scalars['String']>
		lifeCycleCallbackUrl?: Maybe<Scalars['String']>
	}

export type CardTokenSensitiveArgs = {
	keyId?: Maybe<Scalars['String']>
}

export type CardTokenTransactionsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardTransactionFilterInput>
}

export type CardTokenTransactionsSummaryArgs = {
	filter?: Maybe<CardTransactionSummaryFilterInput>
}

export type CardStatusInterface = {
	status: CardStatus
}

export type CardUsageConstraints = {
	__typename?: 'CardUsageConstraints'
	maxUsage?: Maybe<Scalars['Int']>
	expiry?: Maybe<Scalars['DateTime']>
	allowedTxAmounts?: Maybe<Array<CardCurrencyRange>>
	allowedMerchants?: Maybe<Array<Merchant>>
	allowedMerchantCategories?: Maybe<Array<MerchantCategory>>
	deniedMerchantCategories?: Maybe<Array<MerchantCategory>>
}

export type CardCurrencyRange = {
	__typename?: 'CardCurrencyRange'
	currency: Scalars['String']
	min?: Maybe<Scalars['Float']>
	max?: Maybe<Scalars['Float']>
}

export type Merchant = Node &
	CompanyInterface & {
		__typename?: 'Merchant'
		id: Scalars['ID']
		name: Scalars['String']
		legalName: Scalars['String']
		description?: Maybe<Scalars['String']>
		image?: Maybe<ImageUrl>
		legalIds: CompanyLegalIds
		contacts: Array<CompanyContact>
		addresses: Array<Address>
		url?: Maybe<Scalars['String']>
		categories: Array<MerchantCategory>
		transactionFees?: Maybe<Array<MerchantTransactionFees>>
		cardTransactions?: Maybe<CardTransactionsConnection>
	}

export type MerchantImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type MerchantCardTransactionsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardTransactionFilterInput>
}

export type MerchantCategory = Node & {
	__typename?: 'MerchantCategory'
	id: Scalars['ID']
	iso: Scalars['Int']
	name: Scalars['String']
	image?: Maybe<ImageUrl>
	transactionFees?: Maybe<Array<MerchantTransactionFees>>
	merchants?: Maybe<MerchantsConnection>
}

export type MerchantCategoryNameArgs = {
	language?: Maybe<Scalars['String']>
}

export type MerchantCategoryImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type MerchantCategoryMerchantsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<SearchFilterInput>
}

export type MerchantTransactionFees = {
	__typename?: 'MerchantTransactionFees'
	cardUsage: CardUsage
	installmentsRange?: Maybe<IntRange>
	lastModified: Scalars['DateTime']
	expiry?: Maybe<Scalars['DateTime']>
	marketingFee: Scalars['Float']
	marketingFeeCeilValue?: Maybe<Scalars['Float']>
	acquiringServiceFee: Scalars['Float']
	acquiringServiceFeeCeilValue?: Maybe<Scalars['Float']>
	processingCost: Scalars['Float']
	additionalInstallmentCost?: Maybe<Scalars['Float']>
	calc: MerchantTransactionFeesCalc
}

export type MerchantTransactionFeesCalcArgs = {
	transactionValue: Scalars['Float']
	installments?: Maybe<Scalars['Int']>
}

export type MerchantTransactionFeesCalc = {
	__typename?: 'MerchantTransactionFeesCalc'
	cardUsage: CardUsage
	expiry?: Maybe<Scalars['DateTime']>
	installments: Scalars['Int']
	totalCost: Scalars['Float']
	processingCost: Scalars['Float']
	installmentsCost: Scalars['Float']
	marketingCost: Scalars['Float']
	acquiringServiceCost: Scalars['Float']
}

export type SearchFilterInput = {
	filter?: Maybe<Scalars['String']>
}

export type MerchantsConnection = {
	__typename?: 'MerchantsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<MerchantsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type MerchantsEdge = {
	__typename?: 'MerchantsEdge'
	cursor: Scalars['String']
	node?: Maybe<Merchant>
}

export type CardTransactionFilterInput = {
	startTimestamp?: Maybe<Scalars['DateTime']>
	endTimestamp?: Maybe<Scalars['DateTime']>
	includeMerchantCategories?: Maybe<Array<MerchantCategoryRangeInput>>
	excludeMerchantCategories?: Maybe<Array<MerchantCategoryRangeInput>>
	status?: Maybe<CardTransactionStatus>
	captureId?: Maybe<Scalars['ID']>
	usageId?: Maybe<Scalars['ID']>
}

export type MerchantCategoryRangeInput = {
	min?: Maybe<Scalars['Int']>
	max?: Maybe<Scalars['Int']>
}

export type CardTransactionStatus =
	| 'APPROVED'
	| 'REJECTED'
	| 'RETURNED'
	| 'REFUNDED'
	| 'CHARGEBACK'

export type CardTransactionsConnection = {
	__typename?: 'CardTransactionsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardTransactionsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type CardTransactionsEdge = {
	__typename?: 'CardTransactionsEdge'
	cursor: Scalars['String']
	node?: Maybe<CardTransaction>
}

export type CardTransaction = Node & {
	__typename?: 'CardTransaction'
	id: Scalars['ID']
	capture: CardCapture
	usage?: Maybe<CardUsage>
	bin?: Maybe<Bin>
	merchant?: Maybe<Merchant>
	currency: Scalars['String']
	value: Scalars['String']
	installments: Scalars['Int']
	status?: Maybe<CardTransactionStatus>
	timestamp: Scalars['DateTime']
	approvalCode?: Maybe<Scalars['String']>
	prePaid?: Maybe<PrePaid>
}

export type PrePaid = {
	__typename?: 'PrePaid'
	currency?: Maybe<Scalars['String']>
	balance?: Maybe<Scalars['String']>
}

export type CardHolderService = {
	__typename?: 'CardHolderService'
	id?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	image?: Maybe<ImageUrl>
	url?: Maybe<Scalars['String']>
	discounts?: Maybe<Discounts>
	offerParameters?: Maybe<OfferParameters>
	offerItems?: Maybe<Array<Maybe<OfferItem>>>
	isExchangeableOffer?: Maybe<Scalars['Boolean']>
}

export type CardHolderServiceImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type Discounts = {
	__typename?: 'Discounts'
	holderOrAdditional?: Maybe<Scalars['Int']>
	companion?: Maybe<Scalars['Int']>
}

export type OfferParameters = {
	__typename?: 'OfferParameters'
	exchangePeriod?: Maybe<Scalars['Int']>
	usageDealine?: Maybe<Scalars['Int']>
	totalRequest?: Maybe<Scalars['Int']>
	mandatory?: Maybe<Scalars['Boolean']>
}

export type OfferItem = {
	__typename?: 'OfferItem'
	compositionId?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
}

export type CardMetadata = {
	__typename?: 'CardMetadata'
	image?: Maybe<ImageUrl>
	backgroundColor?: Maybe<Scalars['String']>
	foregroundColor?: Maybe<Scalars['String']>
	issuer?: Maybe<Scalars['String']>
	brand?: Maybe<Scalars['String']>
	product?: Maybe<Scalars['String']>
}

export type CardMetadataImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type CardTransactionSummaryFilterInput = {
	startTimestamp?: Maybe<Scalars['DateTime']>
	endTimestamp?: Maybe<Scalars['DateTime']>
	includeMerchantCategories?: Maybe<Array<MerchantCategoryRangeInput>>
	excludeMerchantCategories?: Maybe<Array<MerchantCategoryRangeInput>>
}

export type CardTransactionCategorySummary = {
	__typename?: 'CardTransactionCategorySummary'
	category: MerchantCategory
	count: Scalars['Int']
	value: Scalars['String']
}

export type CardOrigin = {
	__typename?: 'CardOrigin'
	id: Scalars['ID']
	status?: Maybe<CardStatus>
	last4?: Maybe<Scalars['String']>
	expiry?: Maybe<CardExpiry>
	bin?: Maybe<Bin>
}

export type CardTokenOrigin = {
	__typename?: 'CardTokenOrigin'
	timestamp: Scalars['DateTime']
	ip?: Maybe<Scalars['String']>
	geolocation?: Maybe<Geolocation>
	device?: Maybe<Device>
	merchant?: Maybe<Merchant>
	merchantUserId?: Maybe<Scalars['String']>
	wallet?: Maybe<Wallet>
}

export type CardTokenOriginIpArgs = {
	ipv6Mapped?: Maybe<Scalars['Boolean']>
}

export type Geolocation = {
	__typename?: 'Geolocation'
	lon: Scalars['Float']
	lat: Scalars['Float']
	alt?: Maybe<Scalars['Float']>
	precision?: Maybe<Scalars['Float']>
	source?: Maybe<GeolocationSource>
}

export type GeolocationSource = 'USER' | 'CELLULAR' | 'WIFI' | 'GPS'

export type Device = {
	__typename?: 'Device'
	userAgent?: Maybe<Scalars['String']>
	brand?: Maybe<Scalars['String']>
	model?: Maybe<Scalars['String']>
	type?: Maybe<DeviceType>
	serialNumber?: Maybe<Scalars['String']>
	imei?: Maybe<Scalars['String']>
	os?: Maybe<Scalars['String']>
}

export type TravelInsuranceFilter = {
	status?: Maybe<CardHolderInsuranceStatus>
	startDate?: Maybe<Scalars['Date']>
	endDate?: Maybe<Scalars['Date']>
	originCountry?: Maybe<Scalars['String']>
	destinationCountry?: Maybe<Scalars['String']>
}

export type CardHolderInsuranceStatus = 'RECEIVED' | 'HIRED' | 'CANCELED'

export type TravelInsurancesConnection = {
	__typename?: 'TravelInsurancesConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<TravelInsurancesEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type TravelInsurancesEdge = {
	__typename?: 'TravelInsurancesEdge'
	cursor: Scalars['String']
	node?: Maybe<TravelInsurance>
}

export type TravelInsurance = Node &
	CardHolderInsuranceInterface & {
		__typename?: 'TravelInsurance'
		id: Scalars['ID']
		cardHolder: CardHolder
		bin: Bin
		cardId?: Maybe<Scalars['ID']>
		merchant?: Maybe<MerchantInsurance>
		journey: Journey
		startDate: Scalars['Date']
		endDate: Scalars['Date']
		companyInsurance: Scalars['String']
	}

export type CardHolderInsuranceInterface = {
	id: Scalars['ID']
	cardHolder: CardHolder
	bin: Bin
	startDate: Scalars['Date']
	endDate: Scalars['Date']
}

export type MerchantInsurance = {
	__typename?: 'MerchantInsurance'
	legalId: Scalars['String']
	name: Scalars['String']
	legalName: Scalars['String']
}

export type Journey = {
	__typename?: 'Journey'
	companyTravel?: Maybe<Scalars['String']>
	journeyLocator?: Maybe<Scalars['String']>
	trips: Array<Trip>
	purpose?: Maybe<TravelPurpose>
}

export type Trip = {
	__typename?: 'Trip'
	tripNumber?: Maybe<Scalars['Int']>
	tripLocator?: Maybe<Scalars['String']>
	type?: Maybe<TripType>
	departure?: Maybe<Layover>
	arrival?: Maybe<Layover>
	travelers: Array<TravelInsuranceTraveler>
}

export type TripType = 'AIR' | 'SEA' | 'ROAD'

export type Layover = {
	__typename?: 'Layover'
	IataCode?: Maybe<Scalars['String']>
	IcaoCode?: Maybe<Scalars['String']>
	city: Scalars['String']
	country: Scalars['String']
	dateTime: Scalars['DateTime']
}

export type TravelInsuranceTraveler = {
	__typename?: 'TravelInsuranceTraveler'
	insurances?: Maybe<Array<InsuranceTraveler>>
	legalIds: InsuranceLegalIds
	name: Scalars['String']
	birthday: Scalars['Date']
	gender: Gender
	pregnancyWeeks?: Maybe<Scalars['Int']>
	maritalStatus: MaritalStatus
	occupation?: Maybe<PersonOccupation>
	income?: Maybe<PersonYearlyIncome>
	address: Address
	contacts?: Maybe<Array<PersonContact>>
	politicalExposure: Scalars['Boolean']
}

export type TravelInsuranceTravelerOccupationArgs = {
	language?: Maybe<Scalars['String']>
}

export type InsuranceTraveler = {
	__typename?: 'InsuranceTraveler'
	insuranceId: Scalars['ID']
	description: Scalars['String']
	status: CardHolderInsuranceStatus
}

export type InsuranceLegalIds = {
	__typename?: 'InsuranceLegalIds'
	cpf: Cpf
	rg?: Maybe<Rg>
}

export type TravelPurpose = {
	__typename?: 'TravelPurpose'
	leisure: Scalars['Boolean']
	business: Scalars['Boolean']
	adventure: Scalars['Boolean']
}

export type ExtendedWarrantyInsuranceFilter = {
	status?: Maybe<CardHolderInsuranceStatus>
	startDate?: Maybe<Scalars['Date']>
	endDate?: Maybe<Scalars['Date']>
	categoryId?: Maybe<Scalars['ID']>
}

export type ExtendedWarrantyInsurancesConnection = {
	__typename?: 'ExtendedWarrantyInsurancesConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<ExtendedWarrantyInsurancesEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type ExtendedWarrantyInsurancesEdge = {
	__typename?: 'ExtendedWarrantyInsurancesEdge'
	cursor: Scalars['String']
	node?: Maybe<ExtendedWarrantyInsurance>
}

export type ExtendedWarrantyInsurance = Node &
	CardHolderInsuranceInterface & {
		__typename?: 'ExtendedWarrantyInsurance'
		id: Scalars['ID']
		insuranceId: Scalars['ID']
		cardHolder: CardHolder
		bin: Bin
		cardId?: Maybe<Scalars['ID']>
		status: CardHolderInsuranceStatus
		merchant?: Maybe<MerchantInsurance>
		startDate: Scalars['Date']
		endDate: Scalars['Date']
		companyInsurance?: Maybe<Scalars['String']>
		invoiceNumber?: Maybe<Scalars['String']>
		invoiceDate?: Maybe<Scalars['Date']>
		serialNumber?: Maybe<Scalars['String']>
		category?: Maybe<ExtendedWarrantyProductCategory>
		brand?: Maybe<Scalars['String']>
		model?: Maybe<Scalars['String']>
		description?: Maybe<Scalars['String']>
		value?: Maybe<Scalars['Float']>
		extendedWarrantyMonths?: Maybe<Scalars['Int']>
		manufacturerWarrantyMonths?: Maybe<Scalars['Int']>
	}

export type ExtendedWarrantyInsuranceCategoryArgs = {
	language?: Maybe<Scalars['String']>
}

export type ExtendedWarrantyProductCategory = {
	__typename?: 'ExtendedWarrantyProductCategory'
	id: Scalars['ID']
	display: Scalars['String']
	products: Array<ProductCategory>
}

export type ProductCategory = {
	__typename?: 'ProductCategory'
	id: Scalars['ID']
	display: Scalars['String']
}

export type PurchaseProtectionInsuranceFilter = {
	status?: Maybe<CardHolderInsuranceStatus>
	startDate?: Maybe<Scalars['Date']>
	endDate?: Maybe<Scalars['Date']>
	categoryId?: Maybe<Scalars['ID']>
}

export type PurchaseProtectionInsurancesConnection = {
	__typename?: 'PurchaseProtectionInsurancesConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<PurchaseProtectionInsurancesEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type PurchaseProtectionInsurancesEdge = {
	__typename?: 'PurchaseProtectionInsurancesEdge'
	cursor: Scalars['String']
	node?: Maybe<PurchaseProtectionInsurance>
}

export type PurchaseProtectionInsurance = Node &
	CardHolderInsuranceInterface & {
		__typename?: 'PurchaseProtectionInsurance'
		id: Scalars['ID']
		insuranceId: Scalars['ID']
		cardHolder: CardHolder
		merchant?: Maybe<MerchantInsurance>
		bin: Bin
		cardId?: Maybe<Scalars['ID']>
		status: CardHolderInsuranceStatus
		startDate: Scalars['Date']
		endDate: Scalars['Date']
		companyInsurance: Scalars['String']
		invoiceNumber: Scalars['String']
		invoiceDate: Scalars['Date']
		serialNumber?: Maybe<Scalars['String']>
		category?: Maybe<PurchaseProtectionProductCategory>
		brand: Scalars['String']
		model: Scalars['String']
		description: Scalars['String']
		value: Scalars['Float']
		coverageDays?: Maybe<Scalars['Int']>
	}

export type PurchaseProtectionInsuranceCategoryArgs = {
	language?: Maybe<Scalars['String']>
}

export type PurchaseProtectionProductCategory = {
	__typename?: 'PurchaseProtectionProductCategory'
	id: Scalars['ID']
	display: Scalars['String']
	products: Array<ProductCategory>
}

export type HomeAssistenceFilter = {
	id: Scalars['ID']
	status?: Maybe<HomeAssistenceStatus>
	type?: Maybe<HomeAssistenceType>
}

export type HomeAssistenceStatus =
	| 'SERVICE_REQUESTED'
	| 'TO_BE_CONFIRMED'
	| 'CONFIRMED'
	| 'PROVIDER_UNDER_WAY'
	| 'PROVIDER_ON_SERVICE'
	| 'COMPLETED'

export type HomeAssistenceType = 'PLUMBER' | 'LOCKSMITH' | 'ELECTRICIAN' | 'GLAZIER'

export type HomeAssistencesConnection = {
	__typename?: 'HomeAssistencesConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<HomeAssistencesEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type HomeAssistencesEdge = {
	__typename?: 'HomeAssistencesEdge'
	cursor: Scalars['String']
	node?: Maybe<HomeAssistence>
}

export type HomeAssistence = Node & {
	__typename?: 'HomeAssistence'
	id: Scalars['ID']
	openedAt: Scalars['DateTime']
	updatedAt?: Maybe<Scalars['DateTime']>
	cardHolder: CardHolder
	bin: Bin
	status: HomeAssistenceStatus
	type: HomeAssistenceType
	address: Address
	person: PersonType
	providerAssistence?: Maybe<ProviderAssistence>
	description: Scalars['String']
}

export type PersonType = {
	__typename?: 'PersonType'
	name: Scalars['String']
	contacts: Array<PersonContact>
}

export type ProviderAssistence = {
	__typename?: 'ProviderAssistence'
	name: Scalars['String']
	code: Scalars['String']
	legalIds?: Maybe<LegalIds>
	contacts: Array<PersonContact>
	geolocation?: Maybe<Geolocation>
	merchant?: Maybe<MerchantAssistence>
}

export type MerchantAssistence = {
	__typename?: 'MerchantAssistence'
	legalId: Scalars['String']
	name: Scalars['String']
	legalName: Scalars['String']
}

export type DocumentsFilterInput = {
	documentType?: Maybe<DocumentType>
	startDate?: Maybe<Scalars['Date']>
	endDate?: Maybe<Scalars['Date']>
	status?: Maybe<DocumentStatus>
	validationStatus?: Maybe<DocumentValidationStatus>
}

export type DocumentType = 'CNH' | 'RG'

export type DocumentStatus = 'ERROR' | 'PENDING' | 'PROCESSING' | 'PROCESSED'

export type DocumentValidationStatus = 'NOT_VALIDATED' | 'VALID' | 'INVALID'

export type DocumentConnection = {
	__typename?: 'DocumentConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<DocumentsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type DocumentsEdge = {
	__typename?: 'DocumentsEdge'
	cursor?: Maybe<Scalars['String']>
	node?: Maybe<Document>
}

export type Document = {
	__typename?: 'Document'
	id: Scalars['ID']
	documentType: DocumentType
	status: DocumentStatus
	validationStatus: DocumentValidationStatus
	createdAt: Scalars['DateTime']
	updatedAt?: Maybe<Scalars['DateTime']>
	cpf?: Maybe<DocumentCpf>
	message?: Maybe<Scalars['String']>
}

export type DocumentCpf = {
	__typename?: 'DocumentCpf'
	number?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	birthday?: Maybe<Scalars['Date']>
	death?: Maybe<Scalars['String']>
	status?: Maybe<Scalars['String']>
	issuedAt?: Maybe<Scalars['String']>
}

export type RewardFilterInput = {
	status: RewardStatus
}

export type RewardStatus = 'REQUESTED' | 'APPROVED' | 'ERROR'

export type RewardsConnection = {
	__typename?: 'RewardsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<RewardsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type RewardsEdge = {
	__typename?: 'RewardsEdge'
	cursor: Scalars['String']
	node?: Maybe<Reward>
}

export type Reward = {
	__typename?: 'Reward'
	id: Scalars['ID']
	bin: Bin
	cardId?: Maybe<Scalars['ID']>
	description?: Maybe<Scalars['String']>
	compositionId: Scalars['ID']
	status: RewardStatus
	voucher?: Maybe<Scalars['String']>
	requestedDate: Scalars['DateTime']
	statusDate?: Maybe<Scalars['DateTime']>
}

export type CardVerificationStatus =
	| 'UNVERIFIED'
	| 'VERIFIED_LUHN_ALGORITHM'
	| 'VERIFIED_TRANSACTION'
	| 'INVALID'

export type Track = {
	__typename?: 'Track'
	type: TrackType
	key: Scalars['String']
	value: Scalars['String']
}

export type TrackType = 'SELLER'

export type CardFraudTransactionFilterInput = {
	cardTransactionId?: Maybe<Scalars['ID']>
	codeCapture?: Maybe<Scalars['Int']>
	codeUsage?: Maybe<Scalars['Int']>
	legalIds?: Maybe<CompanyLegalIdsInput>
	iso?: Maybe<Scalars['Int']>
	startTimestamp?: Maybe<Scalars['DateTime']>
	endTimestamp?: Maybe<Scalars['DateTime']>
}

export type CompanyLegalIdsInput = {
	cnpj?: Maybe<Scalars['String']>
}

export type CardFraudTransactionsConnection = {
	__typename?: 'CardFraudTransactionsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardFraudTransactionsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type CardFraudTransactionsEdge = {
	__typename?: 'CardFraudTransactionsEdge'
	cursor: Scalars['String']
	node?: Maybe<CardFraudTransaction>
}

export type CardFraudTransaction = {
	__typename?: 'CardFraudTransaction'
	cardTransaction: CardTransaction
	last4?: Maybe<Scalars['String']>
	authorization: Authorization
	status: CardFraudTransactionStatus
	reference?: Maybe<Scalars['String']>
	codePos: Scalars['ID']
	liability?: Maybe<LiabilityType>
	codeEic: Scalars['Int']
	flaggedAt?: Maybe<Scalars['DateTime']>
	arn: Scalars['Int']
	initiated: InitiatedType
	settled: Scalars['Date']
}

export type Authorization = {
	__typename?: 'Authorization'
	date: Scalars['DateTime']
	code: Scalars['ID']
	decision: Scalars['String']
}

export type CardFraudTransactionStatus =
	| 'RECEIVED'
	| 'IN_PROGRESS'
	| 'PROCESSED'
	| 'COMPLETED'

export type LiabilityType = 'YES' | 'NO' | 'NOT_APPLICABLE'

export type InitiatedType = 'CARD_ISSUER' | 'CARD_HOLDER'

export type BinAuthorization = {
	__typename?: 'binAuthorization'
	processorId?: Maybe<Scalars['String']>
	processorSettlementId?: Maybe<Scalars['String']>
	settlementBankNumber?: Maybe<Scalars['Int']>
	isP2PEligible?: Maybe<Scalars['Boolean']>
}

export type BinTable = {
	__typename?: 'BINTable'
	/** @deprecated Esse campo deixa de existir devido a nova API de Bin */
	lastModified?: Maybe<Scalars['DateTime']>
	/** @deprecated Esse campo deixa de existir devido a nova API de Bin */
	etag?: Maybe<Scalars['String']>
	sizeRange: IntRange
	bins: Array<Bin>
	reserved: Array<ReservedBin>
	binsRegexp: Scalars['String']
	reservedRegexp: Scalars['String']
	allBinsRegexp: Scalars['String']
}

export type ReservedBin = BaseBinInterface & {
	__typename?: 'ReservedBIN'
	number: Scalars['String']
	panSizeRange: IntRange
	funding: CardFunding
	product: CardProduct
	country: Scalars['String']
	isInternational: Scalars['Boolean']
	regexp: Scalars['String']
}

export type CardProductsConnection = {
	__typename?: 'CardProductsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardProductsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type CardProductsEdge = {
	__typename?: 'CardProductsEdge'
	cursor: Scalars['String']
	node?: Maybe<CardProduct>
}

export type CardBrandsConnection = {
	__typename?: 'CardBrandsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardBrandsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type CardBrandsEdge = {
	__typename?: 'CardBrandsEdge'
	cursor: Scalars['String']
	node?: Maybe<CardBrand>
}

export type CardCapturesConnection = {
	__typename?: 'CardCapturesConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardCapturesEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type CardCapturesEdge = {
	__typename?: 'CardCapturesEdge'
	cursor: Scalars['String']
	node?: Maybe<CardCapture>
}

export type CardUsagesConnection = {
	__typename?: 'CardUsagesConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardUsagesEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type CardUsagesEdge = {
	__typename?: 'CardUsagesEdge'
	cursor: Scalars['String']
	node?: Maybe<CardUsage>
}

export type CardNetworksConnection = {
	__typename?: 'CardNetworksConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardNetworksEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type CardNetworksEdge = {
	__typename?: 'CardNetworksEdge'
	cursor: Scalars['String']
	node?: Maybe<CardNetwork>
}

export type CardHoldersConnection = {
	__typename?: 'CardHoldersConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardHoldersEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type CardHoldersEdge = {
	__typename?: 'CardHoldersEdge'
	cursor: Scalars['String']
	node?: Maybe<CardHolder>
}

export type InsuranceProductCategory = {
	__typename?: 'InsuranceProductCategory'
	id: Scalars['ID']
	display: Scalars['String']
	products: Array<ProductCategory>
}

export type CardIssuersConnection = {
	__typename?: 'CardIssuersConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<CardIssuersEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type CardIssuersEdge = {
	__typename?: 'CardIssuersEdge'
	cursor: Scalars['String']
	node?: Maybe<CardIssuer>
}

export type MerchantFilterInput = {
	nameContains?: Maybe<Scalars['String']>
	legalIds?: Maybe<Array<CompanyLegalIdsInput>>
	includeCategories?: Maybe<Array<MerchantCategoryRangeInput>>
	excludeCategories?: Maybe<Array<MerchantCategoryRangeInput>>
}

export type MerchantCategoryFilterInput = {
	nameContains?: Maybe<Scalars['String']>
	includeCategories?: Maybe<Array<MerchantCategoryRangeInput>>
	excludeCategories?: Maybe<Array<MerchantCategoryRangeInput>>
}

export type MerchantCategoriesConnection = {
	__typename?: 'MerchantCategoriesConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<MerchantCategoriesEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type MerchantCategoriesEdge = {
	__typename?: 'MerchantCategoriesEdge'
	cursor: Scalars['String']
	node?: Maybe<MerchantCategory>
}

export type Psp = Node & {
	__typename?: 'PSP'
	id: Scalars['ID']
	name: Scalars['String']
	legalName: Scalars['String']
	description?: Maybe<Scalars['String']>
	legalIds: PspAssociateLegalIds
	url?: Maybe<Scalars['String']>
	merchants?: Maybe<PspMerchantAssociationsConnection>
}

export type PspMerchantsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<MerchantFilterInput>
}

export type PspAssociateLegalIds = {
	__typename?: 'PSPAssociateLegalIds'
	cnpj?: Maybe<Cnpj>
	cpf?: Maybe<Cpf>
}

export type PspMerchantAssociationsConnection = {
	__typename?: 'PSPMerchantAssociationsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<PspMerchantAssociationsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type PspMerchantAssociationsEdge = {
	__typename?: 'PSPMerchantAssociationsEdge'
	cursor: Scalars['String']
	node?: Maybe<PspMerchantAssociation>
}

export type PspMerchantAssociation = {
	__typename?: 'PSPMerchantAssociation'
	psp: Psp
	legalIds: PspAssociateLegalIds
	name: Scalars['String']
	legalName: Scalars['String']
	merchant?: Maybe<Merchant>
	bankAccount?: Maybe<BankAccount>
	zip?: Maybe<Scalars['String']>
	mcc?: Maybe<Scalars['Int']>
	pvCode?: Maybe<Scalars['String']>
	paymentTerm?: Maybe<PaymentTerm>
	type?: Maybe<PspPersonType>
}

export type BankAccount = {
	__typename?: 'BankAccount'
	type?: Maybe<BankAccountType>
	bankId?: Maybe<Scalars['Int']>
	branch?: Maybe<Scalars['String']>
	account?: Maybe<Scalars['String']>
}

export type BankAccountType = 'CHECKING' | 'SAVINGS' | 'PAYMENT' | 'DEPOSIT'

export type PaymentTerm = {
	__typename?: 'PaymentTerm'
	installments?: Maybe<Scalars['Int']>
	credit?: Maybe<Scalars['Int']>
	debit?: Maybe<Scalars['Int']>
}

export type PspPersonType = 'PHYSICAL' | 'JURIDICAL'

export type Schedule = {
	__typename?: 'Schedule'
	date: Scalars['Date']
	periods: Array<PeriodType>
}

export type PeriodType = 'MORNING' | 'AFTERNOON'

export type KeyLabelFilterInput = {
	keyLabel?: Maybe<Scalars['String']>
	idKeyLabel?: Maybe<Scalars['Int']>
}

export type KeyLabelConnection = {
	__typename?: 'KeyLabelConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<KeyLabelEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type KeyLabelEdge = {
	__typename?: 'KeyLabelEdge'
	cursor: Scalars['String']
	node?: Maybe<KeyLabel>
}

export type KeyLabel = Node & {
	__typename?: 'KeyLabel'
	clientMutationId?: Maybe<Scalars['String']>
	id: Scalars['ID']
	keyLabel: Scalars['String']
	properties: HsmProperties
}

export type HsmProperties = {
	__typename?: 'HsmProperties'
	mode: Scalars['String']
	keyType: Scalars['String']
	key: Scalars['String']
	ksnDescriptor?: Maybe<Scalars['String']>
	keySerialNumber?: Maybe<Scalars['String']>
	lmkIdentifier: Scalars['String']
	padding?: Maybe<PaddingType>
	delimiter?: Maybe<Scalars['String']>
}

export type PaddingType = 'ZERO' | 'ANSI_X_923' | 'ISO_7816_4' | 'PKCS7'

export type AcquirerFilterInput = {
	code?: Maybe<Scalars['String']>
}

export type Acquirer = Node &
	CompanyInterface & {
		__typename?: 'Acquirer'
		id: Scalars['ID']
		name: Scalars['String']
		legalName: Scalars['String']
		description?: Maybe<Scalars['String']>
		code: Scalars['String']
		countryCode: Scalars['String']
		image?: Maybe<ImageUrl>
		legalIds: CompanyLegalIds
		contacts: Array<CompanyContact>
		addresses: Array<Address>
		url?: Maybe<Scalars['String']>
		fraudTransactions?: Maybe<CardFraudTransactionsConnection>
	}

export type AcquirerImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type AcquirerFraudTransactionsArgs = {
	first?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	filter?: Maybe<CardFraudTransactionFilterInput>
}

export type VerifyPaymentAccountFilterInput = {
	verifyPaymentAccountId?: Maybe<Scalars['ID']>
	legalIds?: Maybe<LegalIdsInputCpfCnpjInput>
	status?: Maybe<PaymentAccountStatus>
	bin?: Maybe<Scalars['String']>
	type?: Maybe<TransactionType>
	idCode?: Maybe<Scalars['String']>
	startTimestamp?: Maybe<Scalars['DateTime']>
	endTimestamp?: Maybe<Scalars['DateTime']>
}

export type PaymentAccountStatus = 'VALID' | 'INVALID' | 'NOT_SUPPORTED' | 'ERROR'

export type TransactionType = 'CREDIT' | 'DEBIT'

export type VerifyPaymentAccountsConnection = {
	__typename?: 'VerifyPaymentAccountsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<VerifyPaymentAccountsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type VerifyPaymentAccountsEdge = {
	__typename?: 'VerifyPaymentAccountsEdge'
	cursor: Scalars['String']
	node?: Maybe<VerifyPaymentAccount>
}

export type VerifyPaymentAccount = {
	__typename?: 'VerifyPaymentAccount'
	status: PaymentAccountStatus
	verifiedAt: Scalars['DateTime']
}

export type DocumentsForUserFilterInput = {
	legalId: DocumentLegalIdInput
	documentType?: Maybe<DocumentType>
	startDate?: Maybe<Scalars['Date']>
	endDate?: Maybe<Scalars['Date']>
	status?: Maybe<DocumentStatus>
	validationStatus?: Maybe<DocumentValidationStatus>
}

export type DocumentLegalIdInput = {
	cpf: Scalars['String']
}

export type SimSwap = {
	__typename?: 'SimSwap'
	tag?: Maybe<Scalars['String']>
	swapMin?: Maybe<Scalars['String']>
	swapMax?: Maybe<Scalars['String']>
}

export type BenefitUsagesFilterInput = {
	documentNumber: Scalars['String']
}

export type BenefitUsage = {
	__typename?: 'BenefitUsage'
	binNumber?: Maybe<Scalars['String']>
	catalogId?: Maybe<Scalars['String']>
	availability?: Maybe<BenefitAvailability>
	name?: Maybe<Scalars['String']>
	productType?: Maybe<Scalars['String']>
	benefitType?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['ID']>
	bundleId?: Maybe<Scalars['String']>
	bundleName?: Maybe<Scalars['String']>
	benefitChoiceInformation?: Maybe<BenefitChoiceInformation>
	description?: Maybe<Scalars['String']>
	benefitParameters?: Maybe<Array<Maybe<BenefitParameter>>>
	expirationDate?: Maybe<Scalars['String']>
	price?: Maybe<BenefitPrice>
	status?: Maybe<Scalars['String']>
	usageInformation?: Maybe<BenefitUsageInformation>
	benefitItems?: Maybe<Array<Maybe<IssuedBenefitItem>>>
	images?: Maybe<Array<Maybe<BenefitImage>>>
}

export type BenefitAvailability = {
	__typename?: 'BenefitAvailability'
	begin?: Maybe<Scalars['String']>
	end?: Maybe<Scalars['String']>
}

export type BenefitChoiceInformation = {
	__typename?: 'BenefitChoiceInformation'
	chosenBy?: Maybe<Scalars['String']>
	exchangeDeadline?: Maybe<Scalars['String']>
}

export type BenefitParameter = {
	__typename?: 'BenefitParameter'
	key?: Maybe<Scalars['String']>
	value?: Maybe<Scalars['String']>
}

export type BenefitPrice = {
	__typename?: 'BenefitPrice'
	amount?: Maybe<Scalars['Int']>
	amountFormatted?: Maybe<Scalars['String']>
	currency?: Maybe<Scalars['String']>
	scale?: Maybe<Scalars['Int']>
}

export type BenefitUsageInformation = {
	__typename?: 'BenefitUsageInformation'
	maximumUsageQuantity?: Maybe<Scalars['String']>
	usageQuantity?: Maybe<Scalars['String']>
}

export type IssuedBenefitItem = {
	__typename?: 'IssuedBenefitItem'
	id?: Maybe<Scalars['ID']>
	compositionId?: Maybe<Scalars['String']>
	compositionName?: Maybe<Scalars['String']>
	productType?: Maybe<BenefitItemProductType>
	compositionDescription?: Maybe<Scalars['String']>
	systemParameters?: Maybe<Array<Maybe<SystemParameter>>>
	componentId?: Maybe<Scalars['String']>
	componentName?: Maybe<Scalars['String']>
	usedAt?: Maybe<Array<Maybe<BenefitItemUsed>>>
}

export type BenefitItemProductType = {
	__typename?: 'BenefitItemProductType'
	id?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
}

export type SystemParameter = {
	__typename?: 'SystemParameter'
	key?: Maybe<Scalars['String']>
	value?: Maybe<Scalars['String']>
}

export type BenefitItemUsed = {
	__typename?: 'BenefitItemUsed'
	status?: Maybe<Scalars['String']>
	usedAt?: Maybe<Scalars['String']>
	usageDate?: Maybe<Scalars['String']>
	coverageEndDate?: Maybe<Scalars['String']>
	tripDestination?: Maybe<Scalars['String']>
}

export type BenefitImage = {
	__typename?: 'BenefitImage'
	type?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
}

export type AvailableBenefitFilterInput = {
	bin: Scalars['String']
	documentNumber: Scalars['String']
	cardId: Scalars['ID']
}

export type BenefitCatalog = {
	__typename?: 'BenefitCatalog'
	id?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
	availability?: Maybe<CatalogAvailability>
	numberOfElements?: Maybe<Scalars['Int']>
	productTypes?: Maybe<Array<Maybe<BenefitProductType>>>
	quantityOfBenefitsWithMinimumPrice?: Maybe<Scalars['String']>
	minimumBenefitPrice?: Maybe<Scalars['String']>
	benefits?: Maybe<Array<Maybe<AvailableBenefit>>>
}

export type CatalogAvailability = {
	__typename?: 'CatalogAvailability'
	begin?: Maybe<Scalars['String']>
	end?: Maybe<Scalars['String']>
}

export type BenefitProductType = {
	__typename?: 'BenefitProductType'
	name?: Maybe<Scalars['String']>
}

export type AvailableBenefit = {
	__typename?: 'AvailableBenefit'
	availability?: Maybe<BenefitAvailability>
	isNew?: Maybe<Scalars['Boolean']>
	name?: Maybe<Scalars['String']>
	productType?: Maybe<Scalars['String']>
	benefitType?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['ID']>
	bundleId?: Maybe<Scalars['String']>
	bundleName?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	benefitParameters?: Maybe<Array<Maybe<BenefitParameter>>>
	validity?: Maybe<BenefitValidity>
	price?: Maybe<BenefitPrice>
	status?: Maybe<Scalars['String']>
	isExchangeableOffer?: Maybe<Scalars['Boolean']>
	benefitItems?: Maybe<Array<Maybe<AvailableBenefitItem>>>
	catalogId?: Maybe<Scalars['String']>
	images?: Maybe<Array<Maybe<BenefitImage>>>
}

export type BenefitValidity = {
	__typename?: 'BenefitValidity'
	period?: Maybe<Scalars['String']>
	duration?: Maybe<Scalars['Int']>
	unlimited?: Maybe<Scalars['Boolean']>
}

export type AvailableBenefitItem = {
	__typename?: 'AvailableBenefitItem'
	id?: Maybe<Scalars['ID']>
	compositionId?: Maybe<Scalars['String']>
	compositionName?: Maybe<Scalars['String']>
	productType?: Maybe<BenefitItemProductType>
	compositionDescription?: Maybe<Scalars['String']>
	systemParameters?: Maybe<Array<Maybe<SystemParameter>>>
	componentId?: Maybe<Scalars['String']>
	componentName?: Maybe<Scalars['String']>
}

export type BenefitFilterInput = {
	documentNumber: Scalars['String']
	bin: Scalars['String']
	cardId: Scalars['ID']
}

export type IssuedBenefit = {
	__typename?: 'IssuedBenefit'
	catalogId?: Maybe<Scalars['String']>
	availability?: Maybe<BenefitAvailability>
	name?: Maybe<Scalars['String']>
	productType?: Maybe<Scalars['String']>
	benefitType?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['ID']>
	bundleId?: Maybe<Scalars['String']>
	bundleName?: Maybe<Scalars['String']>
	benefitChoiceInformation?: Maybe<BenefitChoiceInformation>
	description?: Maybe<Scalars['String']>
	benefitParameters?: Maybe<Array<Maybe<BenefitParameter>>>
	expirationDate?: Maybe<Scalars['String']>
	price?: Maybe<BenefitPrice>
	status?: Maybe<Scalars['String']>
	usageInformation?: Maybe<BenefitUsageInformation>
	benefitItems?: Maybe<Array<Maybe<IssuedBenefitItem>>>
	images?: Maybe<Array<Maybe<BenefitImage>>>
}

export type Provider = {
	__typename?: 'Provider'
	id?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
}

export type ServerPublicKey = {
	__typename?: 'ServerPublicKey'
	key: Scalars['String']
}

export type LegalIdsInput = {
	cpf?: Maybe<Scalars['String']>
	cnpj?: Maybe<Scalars['String']>
	rg?: Maybe<RgInput>
}

export type RgInput = {
	number: Scalars['String']
	issuerOrganization?: Maybe<Scalars['String']>
	issuerState?: Maybe<Scalars['String']>
	issueDate?: Maybe<Scalars['Date']>
}

export type SocialNetworkInput = {
	provider: Scalars['String']
	username: Scalars['String']
}

export type User = Node & {
	__typename?: 'User'
	id: Scalars['ID']
	verified?: Maybe<VerifiedStatus>
	username?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	legalIds?: Maybe<LegalIds>
	birthday?: Maybe<Scalars['Date']>
	age?: Maybe<Scalars['Int']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncome>
	occupation?: Maybe<PersonOccupation>
	image?: Maybe<ImageUrl>
	contacts?: Maybe<Array<PersonContact>>
	addresses?: Maybe<Array<Address>>
	cardHolders?: Maybe<Array<CardHolder>>
	merchants?: Maybe<Array<Merchant>>
	cardIssuers?: Maybe<Array<CardIssuer>>
	socialNetworks?: Maybe<Array<SocialNetwork>>
	agreements?: Maybe<Array<UserAgreement>>
	accessTokens?: Maybe<Array<AccessTokenInfo>>
	publicKeys?: Maybe<Array<PublicKey>>
	originId?: Maybe<Scalars['ID']>
	origin?: Maybe<Scalars['String']>
	analyticsId: Scalars['ID']
	acquirer?: Maybe<Acquirer>
	validation: UserValidation
	motherName?: Maybe<Scalars['String']>
	promotions?: Maybe<UserPromotionsPage>
	communicationChannels?: Maybe<Array<Scalars['String']>>
	interests?: Maybe<Array<UserInterest>>
	communicationChannelBlocks?: Maybe<Array<Maybe<CommunicationChannelBlock>>>
}

export type UserOccupationArgs = {
	language?: Maybe<Scalars['String']>
}

export type UserImageArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	mimeType?: Maybe<Scalars['String']>
}

export type UserPromotionsArgs = {
	limit: Scalars['Int']
	offset: Scalars['Int']
	filter?: Maybe<UserPromotionsFilterInput>
}

export type SocialNetwork = {
	__typename?: 'SocialNetwork'
	provider: Scalars['String']
	username: Scalars['String']
}

export type UserAgreement = {
	__typename?: 'UserAgreement'
	agreementTerm: AgreementTerm
	timestamp: Scalars['DateTime']
}

export type AgreementTerm = Node & {
	__typename?: 'AgreementTerm'
	id: Scalars['ID']
	title: Scalars['String']
	description?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
	category?: Maybe<AgreementTermCategory>
	isWalletDigital?: Maybe<Scalars['Boolean']>
}

export type AgreementTermCategory =
	| 'GENERAL'
	| 'COMMUNICATION'
	| 'PRIVACY_POLICY'
	| 'PROMOTION'
	| 'CONSENT'

export type AccessTokenInfo = {
	__typename?: 'AccessTokenInfo'
	accessToken: Scalars['String']
	timestamp: Scalars['DateTime']
	ip?: Maybe<Scalars['String']>
	geolocation?: Maybe<Geolocation>
	device?: Maybe<Device>
}

export type AccessTokenInfoIpArgs = {
	ipv6Mapped?: Maybe<Scalars['Boolean']>
}

export type PublicKey = {
	__typename?: 'PublicKey'
	id: Scalars['String']
	key: Scalars['String']
}

export type UserValidation = {
	__typename?: 'UserValidation'
	status: UserValidationStatus
	detail?: Maybe<Scalars['String']>
}

export type UserValidationStatus = 'APPROVED' | 'UNDER_REVIEW' | 'DENIED'

export type UserPromotionsFilterInput = {
	won?: Maybe<Scalars['Boolean']>
	id?: Maybe<Scalars['ID']>
	startCreatedDate?: Maybe<Scalars['DateTime']>
	endCreatedDate?: Maybe<Scalars['DateTime']>
	status?: Maybe<Scalars['String']>
	promotionTypeId?: Maybe<Scalars['String']>
	startValidity?: Maybe<Scalars['DateTime']>
	endValidity?: Maybe<Scalars['DateTime']>
	slug?: Maybe<Scalars['String']>
}

export type UserPromotionsPage = {
	__typename?: 'UserPromotionsPage'
	items?: Maybe<Array<Maybe<UserPromotion>>>
	totalCount?: Maybe<Scalars['Int']>
	totalPages?: Maybe<Scalars['Int']>
}

export type UserPromotion = {
	__typename?: 'UserPromotion'
	id: Scalars['ID']
	createdDate?: Maybe<Scalars['DateTime']>
	title?: Maybe<Scalars['String']>
	promotionTypeId?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	agreementTermId?: Maybe<Scalars['ID']>
	frequency?: Maybe<Scalars['String']>
	inputType?: Maybe<PromotionInputType>
	optInRequired?: Maybe<Scalars['Boolean']>
	rankable?: Maybe<Scalars['Boolean']>
	requiredInfo?: Maybe<Array<Maybe<Scalars['String']>>>
	restrictedUsers?: Maybe<Scalars['Boolean']>
	startValidity?: Maybe<Scalars['DateTime']>
	endValidity?: Maybe<Scalars['DateTime']>
	status?: Maybe<PromotionStatus>
	validityRequired?: Maybe<Scalars['Boolean']>
	slug?: Maybe<Scalars['String']>
	drawDate?: Maybe<Scalars['Date']>
	origin?: Maybe<Scalars['String']>
	gateway?: Maybe<Scalars['String']>
	budget?: Maybe<Scalars['Float']>
	prizes?: Maybe<UserPrizesPage>
}

export type UserPromotionPrizesArgs = {
	limit: Scalars['Int']
	offset: Scalars['Int']
	filter?: Maybe<UserPrizesFilterInput>
}

export type PromotionInputType = 'VOX' | 'ISO' | 'MANUAL'

export type PromotionStatus = 'DRAFT' | 'ACTIVE' | 'INACTIVE'

export type UserPrizesFilterInput = {
	won?: Maybe<Scalars['Boolean']>
}

export type UserPrizesPage = {
	__typename?: 'UserPrizesPage'
	items?: Maybe<Array<Maybe<UserPrize>>>
	totalCount?: Maybe<Scalars['Int']>
	totalPages?: Maybe<Scalars['Int']>
}

export type UserPrize = {
	__typename?: 'UserPrize'
	id: Scalars['ID']
	createdDate?: Maybe<Scalars['DateTime']>
	name?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	prizeTypeId?: Maybe<Scalars['String']>
	rank?: Maybe<Scalars['String']>
	startValidity?: Maybe<Scalars['DateTime']>
	endValidity?: Maybe<Scalars['DateTime']>
	slug?: Maybe<Scalars['String']>
	status?: Maybe<Scalars['String']>
	value?: Maybe<Scalars['String']>
	precedenceOrder?: Maybe<Scalars['Int']>
	waitingTime?: Maybe<Scalars['Int']>
	referenceDate?: Maybe<Scalars['DateTime']>
	winners?: Maybe<UserWinnersPage>
}

export type UserPrizeWinnersArgs = {
	limit: Scalars['Int']
	offset: Scalars['Int']
	filter?: Maybe<UserWinnersFilterInput>
}

export type UserWinnersFilterInput = {
	won?: Maybe<Scalars['Boolean']>
}

export type UserWinnersPage = {
	__typename?: 'UserWinnersPage'
	items?: Maybe<Array<Maybe<UserWinner>>>
	totalCount?: Maybe<Scalars['Int']>
	totalPages?: Maybe<Scalars['Int']>
}

export type UserWinner = {
	__typename?: 'UserWinner'
	id: Scalars['ID']
	createdDate?: Maybe<Scalars['DateTime']>
	name?: Maybe<Scalars['String']>
	slug?: Maybe<Scalars['String']>
	currentUser?: Maybe<Scalars['Boolean']>
}

export type UserInterest = Node & {
	__typename?: 'UserInterest'
	id: Scalars['ID']
	title: Scalars['String']
	description?: Maybe<Scalars['String']>
}

export type CommunicationChannelBlock = {
	__typename?: 'CommunicationChannelBlock'
	id: Scalars['ID']
	cpf: Scalars['String']
	status: CommunicationChannelBlockStatus
	begin: Scalars['Date']
	end: Scalars['Date']
}

export type CommunicationChannelBlockStatus =
	| 'ACTIVE'
	| 'BLOCKED'
	| 'COMPLETED'
	| 'DELETED'
	| 'ERROR'

export type UserFilterInput = {
	nameContains?: Maybe<Scalars['String']>
	birthday?: Maybe<Scalars['Date']>
	age?: Maybe<Scalars['Int']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	merchantIds?: Maybe<Array<Scalars['ID']>>
	cardIssuerIds?: Maybe<Array<Scalars['ID']>>
	socialNetworkProviders?: Maybe<Array<Scalars['String']>>
	agreementTermIds?: Maybe<Array<Scalars['ID']>>
	origin?: Maybe<Scalars['String']>
}

export type UsersConnection = {
	__typename?: 'UsersConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<UsersEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type UsersEdge = {
	__typename?: 'UsersEdge'
	cursor: Scalars['String']
	node?: Maybe<User>
}

export type ProvisionedUserFilterInput = {
	name?: Maybe<Scalars['String']>
	legalId?: Maybe<LegalIdsInput>
	bin?: Maybe<Scalars['String']>
	last4?: Maybe<Scalars['String']>
	origin?: Maybe<Scalars['String']>
	analyticsId?: Maybe<Scalars['String']>
}

export type ProvisionedUsersConnection = {
	__typename?: 'ProvisionedUsersConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<ProvisionedUsersEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type ProvisionedUsersEdge = {
	__typename?: 'ProvisionedUsersEdge'
	cursor: Scalars['String']
	node?: Maybe<ProvisionedUser>
}

export type ProvisionedUser = Node & {
	__typename?: 'ProvisionedUser'
	id: Scalars['ID']
	username?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	legalIds: LegalIds
	birthday?: Maybe<Scalars['Date']>
	age?: Maybe<Scalars['Int']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncome>
	occupation?: Maybe<PersonOccupation>
	contacts?: Maybe<Array<Maybe<PersonContact>>>
	addresses?: Maybe<Array<Maybe<Address>>>
	cards?: Maybe<Array<Maybe<Card>>>
	cardTokens?: Maybe<Array<Maybe<CardToken>>>
	migrated: Scalars['Boolean']
	originId?: Maybe<Scalars['ID']>
	origin?: Maybe<Scalars['String']>
	agreements?: Maybe<Array<UserAgreement>>
	analyticsId: Scalars['ID']
	transaction?: Maybe<Transaction>
	event?: Maybe<Scalars['String']>
	ticket?: Maybe<Scalars['String']>
	motherName?: Maybe<Scalars['String']>
	communicationChannels?: Maybe<Array<Scalars['String']>>
	interests?: Maybe<Array<UserInterest>>
}

export type ProvisionedUserOccupationArgs = {
	language?: Maybe<Scalars['String']>
}

export type ProvisionedUserCardsArgs = {
	track?: Maybe<TrackFilter>
	funding?: Maybe<CardFunding>
}

export type TrackFilter = {
	type: TrackType
	key: Scalars['String']
}

export type Transaction = {
	__typename?: 'Transaction'
	transactionId?: Maybe<Scalars['String']>
	dateTime?: Maybe<Scalars['DateTime']>
	amount?: Maybe<Amount>
}

export type Amount = {
	__typename?: 'Amount'
	currency: Scalars['String']
	value: Scalars['String']
}

export type AgreementTermFilterInput = {
	nameContains?: Maybe<Scalars['String']>
	agreementTermIds?: Maybe<Array<Scalars['ID']>>
	isWalletDigital?: Maybe<Scalars['Boolean']>
}

export type AgreementTermsConnection = {
	__typename?: 'AgreementTermsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<AgreementTermsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type AgreementTermsEdge = {
	__typename?: 'AgreementTermsEdge'
	cursor: Scalars['String']
	node?: Maybe<AgreementTerm>
}

export type CardTokenForUserAsyncStatusPayload = {
	__typename?: 'CardTokenForUserAsyncStatusPayload'
	cardTokenRequestId: Scalars['ID']
	callbackUrl: Scalars['String']
	status: CardTokenForUserAsyncStatus
	statusDetail?: Maybe<Scalars['String']>
}

export type CardTokenForUserAsyncStatus = 'ACTIVE' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR'

export type PromotionsFilterInput = {
	id?: Maybe<Scalars['ID']>
	startCreatedDate?: Maybe<Scalars['DateTime']>
	endCreatedDate?: Maybe<Scalars['DateTime']>
	status?: Maybe<Scalars['String']>
	promotionTypeId?: Maybe<Scalars['String']>
	startValidity?: Maybe<Scalars['DateTime']>
	endValidity?: Maybe<Scalars['DateTime']>
	slug?: Maybe<Scalars['String']>
}

export type PromotionsPage = {
	__typename?: 'PromotionsPage'
	items?: Maybe<Array<Maybe<Promotion>>>
	totalCount?: Maybe<Scalars['Int']>
	totalPages?: Maybe<Scalars['Int']>
}

export type Promotion = {
	__typename?: 'Promotion'
	id: Scalars['ID']
	createdDate?: Maybe<Scalars['DateTime']>
	title?: Maybe<Scalars['String']>
	promotionTypeId?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	agreementTermId?: Maybe<Scalars['ID']>
	frequency?: Maybe<Scalars['String']>
	inputType?: Maybe<PromotionInputType>
	optInRequired?: Maybe<Scalars['Boolean']>
	rankable?: Maybe<Scalars['Boolean']>
	requiredInfo?: Maybe<Array<Maybe<Scalars['String']>>>
	restrictedUsers?: Maybe<Scalars['Boolean']>
	startValidity?: Maybe<Scalars['DateTime']>
	endValidity?: Maybe<Scalars['DateTime']>
	status?: Maybe<PromotionStatus>
	validityRequired?: Maybe<Scalars['Boolean']>
	slug?: Maybe<Scalars['String']>
	drawDate?: Maybe<Scalars['Date']>
	origin?: Maybe<Scalars['String']>
	gateway?: Maybe<Scalars['String']>
	budget?: Maybe<Scalars['Float']>
	prizes?: Maybe<PrizesPage>
}

export type PromotionPrizesArgs = {
	limit: Scalars['Int']
	offset: Scalars['Int']
	filter?: Maybe<PrizesFilterInput>
}

export type PrizesFilterInput = {
	slug?: Maybe<Scalars['String']>
}

export type PrizesPage = {
	__typename?: 'PrizesPage'
	items?: Maybe<Array<Maybe<Prize>>>
	totalCount?: Maybe<Scalars['Int']>
	totalPages?: Maybe<Scalars['Int']>
}

export type Prize = {
	__typename?: 'Prize'
	id: Scalars['ID']
	createdDate?: Maybe<Scalars['DateTime']>
	name?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	prizeTypeId?: Maybe<Scalars['String']>
	rank?: Maybe<Scalars['String']>
	startValidity?: Maybe<Scalars['DateTime']>
	endValidity?: Maybe<Scalars['DateTime']>
	slug?: Maybe<Scalars['String']>
	status?: Maybe<Scalars['String']>
	value?: Maybe<Scalars['String']>
	precedenceOrder?: Maybe<Scalars['Int']>
	waitingTime?: Maybe<Scalars['Int']>
	referenceDate?: Maybe<Scalars['DateTime']>
	winners?: Maybe<WinnersPage>
}

export type PrizeWinnersArgs = {
	limit: Scalars['Int']
	offset: Scalars['Int']
	filter?: Maybe<WinnersFilterInput>
}

export type WinnersFilterInput = {
	slug?: Maybe<Scalars['String']>
}

export type WinnersPage = {
	__typename?: 'WinnersPage'
	items?: Maybe<Array<Maybe<Winner>>>
	totalCount?: Maybe<Scalars['Int']>
	totalPages?: Maybe<Scalars['Int']>
}

export type Winner = {
	__typename?: 'Winner'
	id: Scalars['ID']
	createdDate?: Maybe<Scalars['DateTime']>
	name?: Maybe<Scalars['String']>
	slug?: Maybe<Scalars['String']>
}

export type RootUserPromotionsFilterInput = {
	startCreatedDate?: Maybe<Scalars['DateTime']>
	endCreatedDate?: Maybe<Scalars['DateTime']>
	status?: Maybe<Scalars['String']>
	promotionTypeId?: Maybe<Scalars['String']>
	startValidity?: Maybe<Scalars['DateTime']>
	endValidity?: Maybe<Scalars['DateTime']>
	slug?: Maybe<Scalars['String']>
	cpf: Scalars['String']
}

export type UserInterestsFilter = {
	userIdSha256: Scalars['String']
}

export type InterestsFilterInput = {
	titleContains?: Maybe<Scalars['String']>
	descriptionContains?: Maybe<Scalars['String']>
	interestsIds?: Maybe<Array<Scalars['ID']>>
}

export type InterestsConnection = {
	__typename?: 'InterestsConnection'
	pageInfo: PageInfo
	edges?: Maybe<Array<Maybe<InterestsEdge>>>
	totalCount?: Maybe<Scalars['Int']>
}

export type InterestsEdge = {
	__typename?: 'InterestsEdge'
	cursor: Scalars['String']
	node?: Maybe<UserInterest>
}

export type Mutation = {
	__typename?: 'Mutation'
	createCardToken: CreateCardTokenPayload
	suspendCardToken: SuspendCardTokenPayload
	activateCardToken: ActivateCardTokenPayload
	updateCardOriginToToken?: Maybe<UpdateCardOriginToTokenPayload>
	requestSecondWayOfInsurancePolicy: RequestSecondWayOfInsurancePolicyPayload
	createExtendedWarrantyInsurance: CreateExtendedWarrantyInsurancePayload
	addCardToWallet: AddCardToWalletPayload
	removeCardFromWallet: RemoveCardFromWalletPayload
	createWallet: CreateWalletPayload
	deleteWallet: DeleteWalletPayload
	updateWallet: UpdateWalletPayload
	associatePSPMerchant?: Maybe<AssociatePspMerchantPayload>
	dissociatePSPMerchant?: Maybe<DissociatePspMerchantPayload>
	createPullTransfer?: Maybe<CreatePullTransferPayload>
	createPushTransfer?: Maybe<CreatePushTransferPayload>
	createPullTransferToUser?: Maybe<CreatePullTransferToUserPayload>
	createPushTransferToUser?: Maybe<CreatePushTransferToUserPayload>
	createReverseTransaction?: Maybe<CreateReverseTransactionPayload>
	createReverseTransactionNotification?: Maybe<CreateReverseTransactionNotificationPayload>
	createHomeAssistence: CreateHomeAssistencePayload
	updateHomeAssistence: UpdateHomeAssistencePayload
	cancelHomeAssistence: CancelHomeAssistencePayload
	confirmHomeAssistence: ConfirmHomeAssistencePayload
	createPurchaseProtectionInsurance: CreatePurchaseProtectionInsurancePayload
	createTravelInsurance: CreateTravelInsurancePayload
	encrypt?: Maybe<EncryptPayload>
	decrypt?: Maybe<DecryptPayload>
	createHash?: Maybe<CreateHashPayload>
	verifyPaymentAccount?: Maybe<VerifyPaymentAccountPayload>
	createLoginSalt: CreateLoginSaltPayload
	login: LoginPayload
	socialNetworkOAuthLogin: LoginPayload
	logout: LogoutPayload
	createUser: CreateUserPayload
	unsubscribeUser?: Maybe<UnsubscribeUserPayload>
	verifyDocument?: Maybe<VerifyDocumentPayload>
	verifyDocumentForUser?: Maybe<VerifyDocumentPayload>
	refreshAccessToken?: Maybe<RefreshAccessTokenPayload>
	verifyDataScore?: Maybe<VerifyDataScorePayload>
	changeBenefit?: Maybe<ChangeBenefitPayload>
	requestReward?: Maybe<RequestRewardPayload>
	resendReward?: Maybe<ResendRewardPayload>
	verifyUserScore?: Maybe<VerifyUserScorePayload>
	createCustomerCase?: Maybe<CaseCustomerNotificationPayload>
	setImage?: Maybe<SetImagePayload>
	createCard?: Maybe<CreateCardPayload>
	deleteCard: DeleteCardPayload
	updateCard?: Maybe<UpdateCardPayload>
	updateCardVerification?: Maybe<UpdateCardVerificationPayload>
	createProvisionedCard?: Maybe<CreateCardPayload>
	deleteCardHolder: DeleteCardHolderPayload
	requestPasswordReset: RequestPasswordResetPayload
	passwordReset: PasswordResetPayload
	requestContactVerification: RequestContactVerificationPayload
	contactVerification: ContactVerificationPayload
	deleteUser: DeleteUserPayload
	updateUser: UpdateUserPayload
	createCardHolderForUser: CreateCardHolderForUserPayload
	addCardIssuerToUser: AddCardIssuerToUserPayload
	removeCardIssuerFromUser: RemoveCardIssuerFromUserPayload
	addMerchantToUser: AddMerchantToUserPayload
	removeMerchantFromUser: RemoveMerchantFromUserPayload
	addSocialNetworkToUser: AddSocialNetworkToUserPayload
	removeSocialNetworkFromUser: RemoveSocialNetworkFromUserPayload
	addPublicKeyToUser: AddPublicKeyToUserPayload
	removePublicKeyFromUser: RemovePublicKeyFromUserPayload
	addAgreementToUser: AddAgreementToUserPayload
	removeAgreementFromUser: RemoveAgreementFromUserPayload
	createAgreementTerm: CreateAgreementTermPayload
	removeAgreementTerm: RemoveAgreementTermPayload
	passwordUpdate: PasswordUpdatePayload
	addPublicKeyToProvisionedUser: AddPublicKeyToUserPayload
	createProvisionedUser: CreateProvisionedUserPayload
	updateProvisionedUser: UpdateProvisionedUserPayload
	addAgreementToProvisionedUser: AddAgreementToUserPayload
	removeAgreementFromProvisionedUser: RemoveAgreementFromUserPayload
	addAcquirerToUser: AddAcquirerToUserPayload
	removeAcquirerFromUser: RemoveAcquirerFromUserPayload
	createCardTokenForUser: CreateCardTokenForUserPayload
	createCardTokenForUserAsync: CreateCardTokenForUserAsyncPayload
	updateCardTokenCallbackUrl: UpdateCardTokenCallbackUrlPayload
	createCardFraudTransaction?: Maybe<CreateCardFraudTransactionPayload>
	setCommunicationChannels?: Maybe<CommunicationChannelPayload>
	setProvisionedCommunicationChannels?: Maybe<ProvisionedCommunicationChannelPayload>
	createUserInterest: CreateUserInterestPayload
	removeUserInterest: RemoveUserInterestPayload
	addInterestToUser: AddInterestToUserPayload
	removeInterestFromUser: RemoveInterestFromUserPayload
	addInterestToProvisionedUser: AddInterestToUserPayload
	removeInterestFromProvisionedUser: RemoveInterestFromUserPayload
	updateUserInterests: UpdateUserInterestsPayload
	createCommunicationChannelBlock: CommunicationChannelBlock
	deleteCommunicationChannelBlock: CommunicationChannelBlockPayload
}

export type MutationCreateCardTokenArgs = {
	input: CreateCardTokenInput
}

export type MutationSuspendCardTokenArgs = {
	input: SuspendCardTokenInput
}

export type MutationActivateCardTokenArgs = {
	input: ActivateCardTokenInput
}

export type MutationUpdateCardOriginToTokenArgs = {
	input: UpdateCardOriginToTokenInput
}

export type MutationRequestSecondWayOfInsurancePolicyArgs = {
	input: RequestSecondWayOfInsurancePolicyInput
}

export type MutationCreateExtendedWarrantyInsuranceArgs = {
	input: CreateExtendedWarrantyInsuranceInput
}

export type MutationAddCardToWalletArgs = {
	input: AddCardToWalletInput
}

export type MutationRemoveCardFromWalletArgs = {
	input: RemoveCardFromWalletInput
}

export type MutationCreateWalletArgs = {
	input: CreateWalletInput
}

export type MutationDeleteWalletArgs = {
	input: DeleteWalletInput
}

export type MutationUpdateWalletArgs = {
	input: UpdateWalletInput
}

export type MutationAssociatePspMerchantArgs = {
	input: AssociatePspMerchantInput
}

export type MutationDissociatePspMerchantArgs = {
	input: DissociatePspMerchantInput
}

export type MutationCreatePullTransferArgs = {
	input: CreatePullTransferInput
}

export type MutationCreatePushTransferArgs = {
	input: CreatePushTransferInput
}

export type MutationCreatePullTransferToUserArgs = {
	input: CreatePullTransferToUserInput
}

export type MutationCreatePushTransferToUserArgs = {
	input: CreatePushTransferToUserInput
}

export type MutationCreateReverseTransactionArgs = {
	input: CreateReverseTransactionInput
}

export type MutationCreateReverseTransactionNotificationArgs = {
	input: CreateReverseTransactionNotificationInput
}

export type MutationCreateHomeAssistenceArgs = {
	input: CreateHomeAssistenceInput
}

export type MutationUpdateHomeAssistenceArgs = {
	input: UpdateHomeAssistenceInput
}

export type MutationCancelHomeAssistenceArgs = {
	input: CancelHomeAssistenceInput
}

export type MutationConfirmHomeAssistenceArgs = {
	input: ConfirmHomeAssistenceInput
}

export type MutationCreatePurchaseProtectionInsuranceArgs = {
	input: CreatePurchaseProtectionInsuranceInput
}

export type MutationCreateTravelInsuranceArgs = {
	input: CreateTravelInsuranceInput
}

export type MutationEncryptArgs = {
	input: EncryptInput
}

export type MutationDecryptArgs = {
	input: DecryptInput
}

export type MutationCreateHashArgs = {
	input: CreateHashInput
}

export type MutationVerifyPaymentAccountArgs = {
	input: VerifyPaymentAccountInput
}

export type MutationCreateLoginSaltArgs = {
	input: CreateLoginSaltInput
}

export type MutationLoginArgs = {
	input: LoginInput
}

export type MutationSocialNetworkOAuthLoginArgs = {
	input: SocialNetworkOAuthLoginInput
}

export type MutationLogoutArgs = {
	input: LogoutInput
}

export type MutationCreateUserArgs = {
	input: CreateUserInput
}

export type MutationUnsubscribeUserArgs = {
	input: UnsubscribeUserInput
}

export type MutationVerifyDocumentArgs = {
	input: VerifyDocumentInput
}

export type MutationVerifyDocumentForUserArgs = {
	input: VerifyDocumentForUserInput
}

export type MutationRefreshAccessTokenArgs = {
	input: RefreshAccessTokenInput
}

export type MutationVerifyDataScoreArgs = {
	input: VerifyDataScoreInput
}

export type MutationChangeBenefitArgs = {
	input: ChangeBenefitInput
}

export type MutationRequestRewardArgs = {
	input: RequestRewardInput
}

export type MutationResendRewardArgs = {
	input: ResendRewardInput
}

export type MutationVerifyUserScoreArgs = {
	input: VerifyUserScoreInput
}

export type MutationCreateCustomerCaseArgs = {
	input: CaseCustomerNotificationInput
}

export type MutationSetImageArgs = {
	input: SetImageInput
}

export type MutationCreateCardArgs = {
	input: CreateCardInput
}

export type MutationDeleteCardArgs = {
	input: DeleteCardInput
}

export type MutationUpdateCardArgs = {
	input: UpdateCardInput
}

export type MutationUpdateCardVerificationArgs = {
	input: UpdateCardVerificationInput
}

export type MutationCreateProvisionedCardArgs = {
	input: CreateProvisionedCardInput
}

export type MutationDeleteCardHolderArgs = {
	input: DeleteCardHolderInput
}

export type MutationRequestPasswordResetArgs = {
	input: RequestPasswordResetInput
}

export type MutationPasswordResetArgs = {
	input: PasswordResetInput
}

export type MutationRequestContactVerificationArgs = {
	input: RequestContactVerificationInput
}

export type MutationContactVerificationArgs = {
	input: ContactVerificationInput
}

export type MutationDeleteUserArgs = {
	input: DeleteUserInput
}

export type MutationUpdateUserArgs = {
	input: UpdateUserInput
}

export type MutationCreateCardHolderForUserArgs = {
	input: CreateCardHolderForUserInput
}

export type MutationAddCardIssuerToUserArgs = {
	input: AddCardIssuerToUserInput
}

export type MutationRemoveCardIssuerFromUserArgs = {
	input: RemoveCardIssuerFromUserInput
}

export type MutationAddMerchantToUserArgs = {
	input: AddMerchantToUserInput
}

export type MutationRemoveMerchantFromUserArgs = {
	input: RemoveMerchantFromUserInput
}

export type MutationAddSocialNetworkToUserArgs = {
	input: AddSocialNetworkToUserInput
}

export type MutationRemoveSocialNetworkFromUserArgs = {
	input: RemoveSocialNetworkFromUserInput
}

export type MutationAddPublicKeyToUserArgs = {
	input: AddPublicKeyToUserInput
}

export type MutationRemovePublicKeyFromUserArgs = {
	input: RemovePublicKeyFromUserInput
}

export type MutationAddAgreementToUserArgs = {
	input: AddAgreementToUserInput
}

export type MutationRemoveAgreementFromUserArgs = {
	input: RemoveAgreementFromUserInput
}

export type MutationCreateAgreementTermArgs = {
	input: CreateAgreementTermInput
}

export type MutationRemoveAgreementTermArgs = {
	input: RemoveAgreementTermInput
}

export type MutationPasswordUpdateArgs = {
	input: PasswordUpdateInput
}

export type MutationAddPublicKeyToProvisionedUserArgs = {
	input: AddPublicKeyToUserInput
}

export type MutationCreateProvisionedUserArgs = {
	input: CreateProvisionedUserInput
}

export type MutationUpdateProvisionedUserArgs = {
	input: UpdateProvisionedUserInput
}

export type MutationAddAgreementToProvisionedUserArgs = {
	input: AddAgreementToUserInput
}

export type MutationRemoveAgreementFromProvisionedUserArgs = {
	input: RemoveAgreementFromUserInput
}

export type MutationAddAcquirerToUserArgs = {
	input: AddAcquirerToUserInput
}

export type MutationRemoveAcquirerFromUserArgs = {
	input: RemoveAcquirerFromUserInput
}

export type MutationCreateCardTokenForUserArgs = {
	input: CreateCardTokenForUserInput
}

export type MutationCreateCardTokenForUserAsyncArgs = {
	input: CreateCardTokenForUserAsyncInput
}

export type MutationUpdateCardTokenCallbackUrlArgs = {
	input: UpdateCardTokenCallbackUrlInput
}

export type MutationCreateCardFraudTransactionArgs = {
	input: CreateCardFraudTransactionInput
}

export type MutationSetCommunicationChannelsArgs = {
	input: CommunicationChannelInput
}

export type MutationSetProvisionedCommunicationChannelsArgs = {
	input: ProvisionedCommunicationChannelInput
}

export type MutationCreateUserInterestArgs = {
	input: CreateUserInterestInput
}

export type MutationRemoveUserInterestArgs = {
	input: RemoveUserInterestInput
}

export type MutationAddInterestToUserArgs = {
	input: AddInterestToUserInput
}

export type MutationRemoveInterestFromUserArgs = {
	input: RemoveInterestFromUserInput
}

export type MutationAddInterestToProvisionedUserArgs = {
	input: AddInterestToProvisionedUserInput
}

export type MutationRemoveInterestFromProvisionedUserArgs = {
	input: RemoveInterestFromProvisionedUserInput
}

export type MutationUpdateUserInterestsArgs = {
	input: UpdateUserInterestsInput
}

export type MutationCreateCommunicationChannelBlockArgs = {
	input: CommunicationChannelBlockInput
}

export type MutationDeleteCommunicationChannelBlockArgs = {
	id: Scalars['ID']
}

export type CreateCardTokenInput = {
	clientMutationId?: Maybe<Scalars['String']>
	cardId?: Maybe<Scalars['ID']>
	sensitive?: Maybe<Scalars['String']>
	origin?: Maybe<CreateCardTokenOriginInput>
	usageConstraints?: Maybe<CardUsageConstraintsInput>
	tokenRequestorId: Scalars['String']
}

export type CreateCardTokenOriginInput = {
	ip?: Maybe<Scalars['String']>
	geolocation?: Maybe<GeolocationInput>
	device?: Maybe<DeviceInput>
	merchantUserId?: Maybe<Scalars['String']>
	walletId?: Maybe<Scalars['ID']>
}

export type GeolocationInput = {
	lon: Scalars['Float']
	lat: Scalars['Float']
	alt?: Maybe<Scalars['Float']>
	precision?: Maybe<Scalars['Float']>
	source?: Maybe<GeolocationSource>
}

export type DeviceInput = {
	userAgent?: Maybe<Scalars['String']>
	brand?: Maybe<Scalars['String']>
	model?: Maybe<Scalars['String']>
	type?: Maybe<DeviceType>
	serialNumber?: Maybe<Scalars['String']>
	imei?: Maybe<Scalars['String']>
	os?: Maybe<Scalars['String']>
}

export type CardUsageConstraintsInput = {
	maxUsage?: Maybe<Scalars['Int']>
	expiry?: Maybe<Scalars['DateTime']>
	allowedTxAmounts?: Maybe<Array<CardCurrencyRangeInput>>
	allowedIdCodes?: Maybe<Array<Scalars['ID']>>
	allowedMerchantCategories?: Maybe<Array<MerchantCategoryRangeInput>>
	deniedMerchantCategories?: Maybe<Array<MerchantCategoryRangeInput>>
}

export type CardCurrencyRangeInput = {
	currency: Scalars['String']
	min?: Maybe<Scalars['Float']>
	max?: Maybe<Scalars['Float']>
}

export type CreateCardTokenPayload = {
	__typename?: 'CreateCardTokenPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardToken?: Maybe<CardToken>
}

export type SuspendCardTokenInput = {
	clientMutationId?: Maybe<Scalars['String']>
	cardTokenId: Scalars['ID']
	permanent?: Maybe<Scalars['Boolean']>
	reason: CardSuspendReason
}

export type CardSuspendReason = 'ISSUER' | 'CARDHOLDER' | 'PIN_LOCKED' | 'TOKEN_REQUESTOR'

export type SuspendCardTokenPayload = {
	__typename?: 'SuspendCardTokenPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardToken?: Maybe<CardToken>
}

export type ActivateCardTokenInput = {
	clientMutationId?: Maybe<Scalars['String']>
	cardTokenId: Scalars['ID']
}

export type ActivateCardTokenPayload = {
	__typename?: 'ActivateCardTokenPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardToken?: Maybe<CardToken>
}

export type UpdateCardOriginToTokenInput = {
	clientMutationId?: Maybe<Scalars['String']>
	cardOriginToTokens: Array<CardOriginToTokenInput>
}

export type CardOriginToTokenInput = {
	updateCardOriginId: Scalars['ID']
	sensitiveCurrent?: Maybe<Scalars['String']>
	sensitiveNew: Scalars['String']
}

export type UpdateCardOriginToTokenPayload = {
	__typename?: 'UpdateCardOriginToTokenPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardOriginToTokens?: Maybe<Array<Maybe<CardOriginToToken>>>
}

export type CardOriginToToken = {
	__typename?: 'CardOriginToToken'
	statusUpdate?: Maybe<UpdateStatus>
	updateCardOriginId?: Maybe<Scalars['ID']>
	bin?: Maybe<Bin>
	last4?: Maybe<Scalars['String']>
	errorDescription?: Maybe<Scalars['String']>
}

export type UpdateStatus = 'UPDATED' | 'NOT_UPDATED'

export type RequestSecondWayOfInsurancePolicyInput = {
	clientMutationId?: Maybe<Scalars['String']>
	insuranceId: Scalars['ID']
	type: InsuranceType
}

export type InsuranceType = 'TRAVEL' | 'PURCHASEPROTECTION' | 'EXTENDEDWARRANTY'

export type RequestSecondWayOfInsurancePolicyPayload = {
	__typename?: 'RequestSecondWayOfInsurancePolicyPayload'
	clientMutationId?: Maybe<Scalars['String']>
	maskedEmail: Scalars['String']
}

export type CreateExtendedWarrantyInsuranceInput = {
	clientMutationId?: Maybe<Scalars['String']>
	bin: Scalars['String']
	cardId?: Maybe<Scalars['ID']>
	merchant?: Maybe<MerchantInsuranceInput>
	invoiceNumber?: Maybe<Scalars['String']>
	invoiceDate?: Maybe<Scalars['Date']>
	serialNumber?: Maybe<Scalars['String']>
	brand?: Maybe<Scalars['String']>
	model?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	value: Scalars['Float']
	extendedWarrantyMonths?: Maybe<Scalars['Int']>
	manufacturerWarrantyMonths?: Maybe<Scalars['Int']>
	productId?: Maybe<Scalars['ID']>
}

export type MerchantInsuranceInput = {
	legalId: Scalars['String']
	name: Scalars['String']
	legalName: Scalars['String']
}

export type CreateExtendedWarrantyInsurancePayload = {
	__typename?: 'CreateExtendedWarrantyInsurancePayload'
	clientMutationId?: Maybe<Scalars['String']>
	extendedWarrantyInsurance?: Maybe<ExtendedWarrantyInsurance>
}

export type AddCardToWalletInput = {
	clientMutationId?: Maybe<Scalars['String']>
	walletId: Scalars['ID']
	cardId?: Maybe<Scalars['ID']>
	sensitive?: Maybe<Scalars['String']>
}

export type AddCardToWalletPayload = {
	__typename?: 'AddCardToWalletPayload'
	clientMutationId?: Maybe<Scalars['String']>
	wallet?: Maybe<Wallet>
	card?: Maybe<Card>
}

export type RemoveCardFromWalletInput = {
	clientMutationId?: Maybe<Scalars['String']>
	walletId: Scalars['ID']
	cardId: Scalars['ID']
}

export type RemoveCardFromWalletPayload = {
	__typename?: 'RemoveCardFromWalletPayload'
	clientMutationId?: Maybe<Scalars['String']>
	wallet?: Maybe<Wallet>
	card?: Maybe<Card>
}

export type CreateWalletInput = {
	clientMutationId?: Maybe<Scalars['String']>
	name: Scalars['String']
}

export type CreateWalletPayload = {
	__typename?: 'CreateWalletPayload'
	clientMutationId?: Maybe<Scalars['String']>
	wallet?: Maybe<Wallet>
	holder?: Maybe<CardHolder>
}

export type DeleteWalletInput = {
	clientMutationId?: Maybe<Scalars['String']>
	walletId: Scalars['ID']
}

export type DeleteWalletPayload = {
	__typename?: 'DeleteWalletPayload'
	clientMutationId?: Maybe<Scalars['String']>
	walletId?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
	holder?: Maybe<CardHolder>
}

export type UpdateWalletInput = {
	clientMutationId?: Maybe<Scalars['String']>
	walletId: Scalars['ID']
	name: Scalars['String']
}

export type UpdateWalletPayload = {
	__typename?: 'UpdateWalletPayload'
	clientMutationId?: Maybe<Scalars['String']>
	wallet?: Maybe<Wallet>
}

export type AssociatePspMerchantInput = {
	clientMutationId?: Maybe<Scalars['String']>
	legalId: Scalars['String']
	name: Scalars['String']
	legalName: Scalars['String']
	bankAccount: BankAccountInput
	zip?: Maybe<Scalars['String']>
	type?: Maybe<PspPersonType>
	mcc: Scalars['Int']
	pvCode?: Maybe<Scalars['String']>
	paymentTerm?: Maybe<PaymentTermInput>
}

export type BankAccountInput = {
	type: BankAccountType
	bankId: Scalars['Int']
	branch: Scalars['String']
	account: Scalars['String']
}

export type PaymentTermInput = {
	installments?: Maybe<Scalars['Int']>
	credit?: Maybe<Scalars['Int']>
	debit?: Maybe<Scalars['Int']>
}

export type AssociatePspMerchantPayload = {
	__typename?: 'AssociatePSPMerchantPayload'
	clientMutationId?: Maybe<Scalars['String']>
	legalId?: Maybe<Scalars['String']>
}

export type DissociatePspMerchantInput = {
	clientMutationId?: Maybe<Scalars['String']>
	pspId: Scalars['Int']
	legalId: Scalars['String']
}

export type DissociatePspMerchantPayload = {
	__typename?: 'DissociatePSPMerchantPayload'
	clientMutationId?: Maybe<Scalars['String']>
	legalId?: Maybe<Scalars['String']>
}

export type CreatePullTransferInput = {
	clientMutationId?: Maybe<Scalars['String']>
	acquirer: AcquirerInput
	merchant: MerchantInput
	cardId?: Maybe<Scalars['ID']>
	sensitive?: Maybe<Scalars['String']>
	cipheredTransactionCryptogram?: Maybe<Scalars['String']>
	amount: AmountInput
	systemsTraceAuditNumber: Scalars['String']
	transactionDateTime: Scalars['DateTimeZone']
	transactionIdentifier: Scalars['String']
	retrievalReferenceNumber: Scalars['String']
	codeUsage: Scalars['Int']
	origin?: Maybe<P2POriginInput>
	pointOfService?: Maybe<PointOfServiceInput>
	receiver: ReceiverPullInput
}

export type AcquirerInput = {
	id: Scalars['ID']
	code: Scalars['String']
	countryCode: Scalars['String']
}

export type MerchantInput = {
	name: Scalars['String']
	legalName: Scalars['String']
	description?: Maybe<Scalars['String']>
	legalIds: LegalIdsInput
	contact: PersonContactInput
	address: AddressInput
	url?: Maybe<Scalars['String']>
	iso: Scalars['Int']
	countryCode: Scalars['String']
	idCode: Scalars['String']
}

export type PersonContactInput = {
	type: PersonContactType
	context?: Maybe<Scalars['String']>
	value: Scalars['String']
}

export type AddressInput = {
	context?: Maybe<Scalars['String']>
	country: Scalars['String']
	city: Scalars['String']
	state: Scalars['String']
	stateAbbrev?: Maybe<Scalars['String']>
	zip?: Maybe<Scalars['String']>
	district?: Maybe<Scalars['String']>
	kind?: Maybe<Scalars['String']>
	number: Scalars['Int']
	place: Scalars['String']
	complement?: Maybe<Scalars['String']>
	reference?: Maybe<Scalars['String']>
	instructions?: Maybe<Scalars['String']>
	lon?: Maybe<Scalars['Float']>
	lat?: Maybe<Scalars['Float']>
}

export type AmountInput = {
	currency: Scalars['String']
	value: Scalars['String']
}

export type P2POriginInput = {
	geolocation?: Maybe<GeolocationInput>
	device?: Maybe<DeviceP2PInput>
}

export type DeviceP2PInput = {
	id?: Maybe<Scalars['ID']>
	userAgent?: Maybe<Scalars['String']>
	brand?: Maybe<Scalars['String']>
	model?: Maybe<Scalars['String']>
	type?: Maybe<DeviceType>
	serialNumber?: Maybe<Scalars['String']>
	imei?: Maybe<Scalars['String']>
	os?: Maybe<Scalars['String']>
}

export type PointOfServiceInput = {
	type?: Maybe<Scalars['Int']>
	localization?: Maybe<Scalars['Int']>
	cardHolderPresentTransaction?: Maybe<Scalars['Int']>
	cardPresentTransaction?: Maybe<Scalars['Boolean']>
	cardCaptureCapability?: Maybe<Scalars['Int']>
	securityTransaction?: Maybe<Scalars['Int']>
	typePOS?: Maybe<Scalars['String']>
	inputCapability?: Maybe<Scalars['String']>
	panEntryMode?: Maybe<Scalars['String']>
	terminalIdentifier?: Maybe<Scalars['String']>
}

export type ReceiverPullInput = {
	name?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	legalIds: LegalIdsInput
	birthday?: Maybe<Scalars['Date']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncomeInput>
	occupationId?: Maybe<Scalars['ID']>
	contact?: Maybe<PersonContactInput>
	contacts?: Maybe<Array<PersonContactInput>>
	address?: Maybe<AddressInput>
	bin?: Maybe<Scalars['String']>
	last4?: Maybe<Scalars['String']>
}

export type PersonYearlyIncomeInput = {
	personal: Scalars['Float']
	family: Scalars['Float']
	currency: Scalars['String']
}

export type CreatePullTransferPayload = {
	__typename?: 'CreatePullTransferPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardHolder?: Maybe<CardHolder>
	cardTransaction: CardTransactionP2P
	receiver: Receiver
}

export type CardTransactionP2P = Node & {
	__typename?: 'CardTransactionP2P'
	id: Scalars['ID']
	type?: Maybe<TransferType>
	capture: CardCapture
	usage: CardUsage
	bin?: Maybe<Bin>
	last4?: Maybe<Scalars['String']>
	merchant: MerchantP2P
	currency: Scalars['String']
	value: Scalars['String']
	installments: Scalars['Int']
	status?: Maybe<CardTransactionStatus>
	timestamp: Scalars['DateTime']
	approvalCode?: Maybe<Scalars['String']>
	prePaid?: Maybe<PrePaid>
}

export type TransferType = 'P2P' | 'CSB' | 'DSB'

export type MerchantP2P = {
	__typename?: 'MerchantP2P'
	name: Scalars['String']
	legalName: Scalars['String']
	description?: Maybe<Scalars['String']>
	legalIds: LegalIds
	contact: PersonContact
	address: Address
	url?: Maybe<Scalars['String']>
	iso: Scalars['Int']
	countryCode: Scalars['String']
	idCode: Scalars['String']
}

export type Receiver = {
	__typename?: 'Receiver'
	name?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	legalIds: LegalIds
	birthday?: Maybe<Scalars['Date']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncome>
	occupation?: Maybe<PersonOccupation>
	/** @deprecated Esse campo deixa de existir. Utilizar o campo `contacts` */
	contact?: Maybe<PersonContact>
	contacts?: Maybe<Array<PersonContact>>
	address?: Maybe<Address>
}

export type CreatePushTransferInput = {
	clientMutationId?: Maybe<Scalars['String']>
	transferType?: Maybe<TransferType>
	acquirer: AcquirerInput
	merchant: MerchantInput
	cardId?: Maybe<Scalars['ID']>
	sensitive?: Maybe<Scalars['String']>
	amount: AmountInput
	receiver: ReceiverInput
	systemsTraceAuditNumber: Scalars['String']
	transactionDateTime: Scalars['DateTimeZone']
	transactionIdentifier: Scalars['String']
	retrievalReferenceNumber: Scalars['String']
	codeUsage: Scalars['Int']
	origin?: Maybe<P2POriginInput>
	pointOfService?: Maybe<PointOfServiceInput>
	sourceOfFundsCode: Scalars['String']
	transactionIdentifierPull?: Maybe<Scalars['String']>
}

export type ReceiverInput = {
	sensitive: Scalars['String']
	cipheredTransactionCryptogram?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	legalIds?: Maybe<LegalIdsInput>
	birthday?: Maybe<Scalars['Date']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncomeInput>
	occupationId?: Maybe<Scalars['ID']>
	contact?: Maybe<PersonContactInput>
	contacts?: Maybe<Array<Maybe<PersonContactInput>>>
	address?: Maybe<AddressInput>
}

export type CreatePushTransferPayload = {
	__typename?: 'CreatePushTransferPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardHolder?: Maybe<CardHolder>
	cardTransaction: CardTransactionP2P
	receiver: Receiver
}

export type CreatePullTransferToUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	acquirer: AcquirerInput
	merchant: MerchantInput
	sender: SenderInput
	receiver: ReceiverPullInput
	amount: AmountInput
	systemsTraceAuditNumber: Scalars['String']
	transactionDateTime: Scalars['DateTimeZone']
	transactionIdentifier: Scalars['String']
	retrievalReferenceNumber: Scalars['String']
	codeUsage: Scalars['Int']
	origin?: Maybe<P2POriginInput>
	pointOfService?: Maybe<PointOfServiceInput>
}

export type SenderInput = {
	sensitive: Scalars['String']
	cipheredTransactionCryptogram?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	legalIds: LegalIdsInput
	birthday?: Maybe<Scalars['Date']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncomeInput>
	occupationId?: Maybe<Scalars['ID']>
	contact?: Maybe<PersonContactInput>
	contacts?: Maybe<Array<PersonContactInput>>
	address?: Maybe<AddressInput>
	sourceOfFundsCode?: Maybe<Scalars['String']>
}

export type CreatePullTransferToUserPayload = {
	__typename?: 'CreatePullTransferToUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	sender: Sender
	cardTransaction: CardTransactionP2P
	receiver: Receiver
}

export type Sender = {
	__typename?: 'Sender'
	name?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	legalIds: LegalIds
	birthday?: Maybe<Scalars['Date']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncome>
	occupation?: Maybe<PersonOccupation>
	/** @deprecated Esse campo deixa de existir. Utilizar o campo `contacts` */
	contact?: Maybe<PersonContact>
	contacts?: Maybe<Array<PersonContact>>
	address?: Maybe<Address>
}

export type CreatePushTransferToUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	transferType?: Maybe<TransferType>
	acquirer: AcquirerInput
	merchant: MerchantInput
	sender: SenderPushInput
	receiver: ReceiverInput
	amount: AmountInput
	systemsTraceAuditNumber: Scalars['String']
	transactionDateTime: Scalars['DateTimeZone']
	transactionIdentifier: Scalars['String']
	retrievalReferenceNumber: Scalars['String']
	codeUsage: Scalars['Int']
	origin?: Maybe<P2POriginInput>
	pointOfService?: Maybe<PointOfServiceInput>
	transactionIdentifierPull?: Maybe<Scalars['String']>
}

export type SenderPushInput = {
	name?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	legalIds: LegalIdsInput
	birthday?: Maybe<Scalars['Date']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncomeInput>
	occupationId?: Maybe<Scalars['ID']>
	contact?: Maybe<PersonContactInput>
	contacts?: Maybe<Array<PersonContactInput>>
	address?: Maybe<AddressInput>
	sourceOfFundsCode?: Maybe<Scalars['String']>
	bin?: Maybe<Scalars['String']>
	last4?: Maybe<Scalars['String']>
}

export type CreatePushTransferToUserPayload = {
	__typename?: 'CreatePushTransferToUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	sender: Sender
	cardTransaction: CardTransactionP2P
	receiver: Receiver
}

export type CreateReverseTransactionInput = {
	clientMutationId?: Maybe<Scalars['String']>
	transactionId: Scalars['ID']
	cardId?: Maybe<Scalars['ID']>
	sensitive?: Maybe<Scalars['String']>
	reasonCode: Scalars['String']
	authorization: AuthorizationInput
}

export type AuthorizationInput = {
	date: Scalars['DateTime']
	code: Scalars['ID']
	decision: Scalars['String']
}

export type CreateReverseTransactionPayload = {
	__typename?: 'CreateReverseTransactionPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardHolder?: Maybe<CardHolder>
	cardTransaction: CardTransactionP2P
}

export type CreateReverseTransactionNotificationInput = {
	clientMutationId?: Maybe<Scalars['String']>
	sensitive: Scalars['String']
	transactionIdentifier: Scalars['String']
	transactionDateTime: Scalars['DateTimeZone']
	amount: AmountInput
	retrievalReferenceNumber: Scalars['String']
	reasonCode: Scalars['String']
}

export type CreateReverseTransactionNotificationPayload = {
	__typename?: 'CreateReverseTransactionNotificationPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardHolder?: Maybe<CardHolder>
	cardTransaction: CardTransactionP2P
}

export type CreateHomeAssistenceInput = {
	clientMutationId?: Maybe<Scalars['String']>
	cardId?: Maybe<Scalars['ID']>
	bin?: Maybe<Scalars['String']>
	last4?: Maybe<Scalars['String']>
	useAddressRegistration?: Maybe<Scalars['Boolean']>
	address?: Maybe<AddressInput>
	useContactRegistration?: Maybe<Scalars['Boolean']>
	contact?: Maybe<PersonContactInput>
	person: PersonInput
	type: HomeAssistenceType
	description: Scalars['String']
}

export type PersonInput = {
	name: Scalars['String']
	contacts: Array<PersonContactInput>
}

export type CreateHomeAssistencePayload = {
	__typename?: 'CreateHomeAssistencePayload'
	clientMutationId?: Maybe<Scalars['String']>
	HomeAssistence?: Maybe<HomeAssistence>
}

export type UpdateHomeAssistenceInput = {
	clientMutationId?: Maybe<Scalars['String']>
	id: Scalars['ID']
	person: PersonInput
	schedule: ScheduleInput
	description: Scalars['String']
}

export type ScheduleInput = {
	date: Scalars['Date']
	period: PeriodType
}

export type UpdateHomeAssistencePayload = {
	__typename?: 'UpdateHomeAssistencePayload'
	clientMutationId?: Maybe<Scalars['String']>
	HomeAssistence?: Maybe<HomeAssistence>
}

export type CancelHomeAssistenceInput = {
	clientMutationId?: Maybe<Scalars['String']>
	id: Scalars['ID']
	reason?: Maybe<Scalars['String']>
}

export type CancelHomeAssistencePayload = {
	__typename?: 'CancelHomeAssistencePayload'
	clientMutationId?: Maybe<Scalars['String']>
	HomeAssistence?: Maybe<HomeAssistence>
}

export type ConfirmHomeAssistenceInput = {
	clientMutationId?: Maybe<Scalars['String']>
	id: Scalars['ID']
	schedule: ScheduleInput
}

export type ConfirmHomeAssistencePayload = {
	__typename?: 'ConfirmHomeAssistencePayload'
	clientMutationId?: Maybe<Scalars['String']>
	HomeAssistence?: Maybe<HomeAssistence>
	status: HomeAssistenceStatus
}

export type CreatePurchaseProtectionInsuranceInput = {
	clientMutationId?: Maybe<Scalars['String']>
	bin: Scalars['String']
	cardId?: Maybe<Scalars['ID']>
	merchant?: Maybe<MerchantInsuranceInput>
	invoiceNumber: Scalars['String']
	invoiceDate: Scalars['Date']
	serialNumber?: Maybe<Scalars['String']>
	brand: Scalars['String']
	model: Scalars['String']
	description: Scalars['String']
	value: Scalars['Float']
	coverageDays?: Maybe<Scalars['Int']>
	productId: Scalars['ID']
}

export type CreatePurchaseProtectionInsurancePayload = {
	__typename?: 'CreatePurchaseProtectionInsurancePayload'
	clientMutationId?: Maybe<Scalars['String']>
	PurchaseProtectionInsurance?: Maybe<PurchaseProtectionInsurance>
}

export type CreateTravelInsuranceInput = {
	clientMutationId?: Maybe<Scalars['String']>
	bin: Scalars['String']
	merchant?: Maybe<MerchantInsuranceInput>
	journey: JourneyInput
	cardId?: Maybe<Scalars['ID']>
}

export type JourneyInput = {
	companyTravel?: Maybe<Scalars['String']>
	journeyLocator?: Maybe<Scalars['String']>
	trips: Array<TripInput>
	purpose?: Maybe<TravelPurposeInput>
}

export type TripInput = {
	tripNumber?: Maybe<Scalars['Int']>
	tripLocator?: Maybe<Scalars['String']>
	type?: Maybe<TripType>
	departure?: Maybe<LayoverInput>
	arrival?: Maybe<LayoverInput>
	travelers: Array<TravelInsuranceTravelerInput>
}

export type LayoverInput = {
	IataCode?: Maybe<Scalars['String']>
	IcaoCode?: Maybe<Scalars['String']>
	city: Scalars['String']
	country: Scalars['String']
	dateTime: Scalars['DateTime']
}

export type TravelInsuranceTravelerInput = {
	legalIds: InsuranceLegalIdsInput
	name: Scalars['String']
	birthday: Scalars['Date']
	gender: Gender
	pregnancyWeeks?: Maybe<Scalars['Int']>
	maritalStatus: MaritalStatus
	occupationId?: Maybe<Scalars['ID']>
	income?: Maybe<PersonYearlyIncomeInput>
	address: InsuranceAddressInput
	contacts: Array<PersonContactInput>
	politicalExposure: Scalars['Boolean']
}

export type InsuranceLegalIdsInput = {
	cpf: Scalars['String']
	rg?: Maybe<RgInput>
}

export type InsuranceAddressInput = {
	context?: Maybe<Scalars['String']>
	country: Scalars['String']
	city: Scalars['String']
	state: Scalars['String']
	stateAbbrev?: Maybe<Scalars['String']>
	zip: Scalars['String']
	district: Scalars['String']
	kind?: Maybe<Scalars['String']>
	number: Scalars['Int']
	place: Scalars['String']
	complement: Scalars['String']
	reference?: Maybe<Scalars['String']>
	instructions?: Maybe<Scalars['String']>
	lon?: Maybe<Scalars['Float']>
	lat?: Maybe<Scalars['Float']>
}

export type TravelPurposeInput = {
	leisure?: Maybe<Scalars['Boolean']>
	business?: Maybe<Scalars['Boolean']>
	adventure?: Maybe<Scalars['Boolean']>
}

export type CreateTravelInsurancePayload = {
	__typename?: 'CreateTravelInsurancePayload'
	clientMutationId?: Maybe<Scalars['String']>
	travelInsurance?: Maybe<TravelInsurance>
}

export type EncryptInput = {
	clientMutationId?: Maybe<Scalars['String']>
	keyLabel: Scalars['String']
	inputFormatFlag: Scalars['String']
	outputFormatFlag: Scalars['String']
	iv?: Maybe<Scalars['String']>
	message: Scalars['String']
	padding?: Maybe<PaddingType>
}

export type EncryptPayload = {
	__typename?: 'EncryptPayload'
	clientMutationId?: Maybe<Scalars['String']>
	iv?: Maybe<Scalars['String']>
	message: Scalars['String']
}

export type DecryptInput = {
	clientMutationId?: Maybe<Scalars['String']>
	keyLabel: Scalars['String']
	inputFormatFlag: Scalars['String']
	outputFormatFlag: Scalars['String']
	iv: Scalars['String']
	message: Scalars['String']
}

export type DecryptPayload = {
	__typename?: 'DecryptPayload'
	clientMutationId?: Maybe<Scalars['String']>
	iv?: Maybe<Scalars['String']>
	message: Scalars['String']
}

export type CreateHashInput = {
	clientMutationId?: Maybe<Scalars['String']>
	hashIdentifier: HashIdentifierType
	inputFormatType: FormatType
	message: Scalars['String']
}

export type HashIdentifierType =
	| 'MD5'
	| 'SHA_1'
	| 'SHA_224'
	| 'SHA_256'
	| 'SHA_384'
	| 'SHA_512'
	| 'ISO_10118_2'

export type FormatType = 'TEXT' | 'HEX_ENCODED'

export type CreateHashPayload = {
	__typename?: 'CreateHashPayload'
	clientMutationId?: Maybe<Scalars['String']>
	message: Scalars['String']
}

export type VerifyPaymentAccountInput = {
	clientMutationId?: Maybe<Scalars['String']>
	legalIds?: Maybe<LegalIdsInputCpfCnpjInput>
	sensitive: Scalars['String']
	type: TransactionType
	acquirer: AcquirerInput
	merchant: MerchantInput
}

export type VerifyPaymentAccountPayload = {
	__typename?: 'VerifyPaymentAccountPayload'
	clientMutationId?: Maybe<Scalars['String']>
	verifyPaymentAccount?: Maybe<VerifyPaymentAccount>
}

export type CreateLoginSaltInput = {
	clientMutationId?: Maybe<Scalars['String']>
	username: Scalars['String']
}

export type CreateLoginSaltPayload = {
	__typename?: 'CreateLoginSaltPayload'
	clientMutationId?: Maybe<Scalars['String']>
	username: Scalars['String']
	salt: Scalars['String']
	expiry: Scalars['DateTime']
}

export type LoginInput = {
	clientMutationId?: Maybe<Scalars['String']>
	username: Scalars['String']
	challenge: Scalars['String']
}

export type LoginPayload = {
	__typename?: 'LoginPayload'
	clientMutationId?: Maybe<Scalars['String']>
	accessToken?: Maybe<Scalars['String']>
	oauthToken?: Maybe<AccessTokenPayload>
}

export type AccessTokenPayload = {
	__typename?: 'AccessTokenPayload'
	accessToken: Scalars['String']
	refreshToken: Scalars['String']
}

export type SocialNetworkOAuthLoginInput = {
	clientMutationId?: Maybe<Scalars['String']>
	provider: Scalars['String']
	username: Scalars['String']
	accessToken?: Maybe<Scalars['String']>
}

export type LogoutInput = {
	clientMutationId?: Maybe<Scalars['String']>
	accessToken: Scalars['String']
}

export type LogoutPayload = {
	__typename?: 'LogoutPayload'
	clientMutationId?: Maybe<Scalars['String']>
	success?: Maybe<Scalars['Boolean']>
}

export type CreateUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	username?: Maybe<Scalars['String']>
	bcryptPassword?: Maybe<Scalars['String']>
	socialNetwork?: Maybe<SocialNetworkInput>
	oauth?: Maybe<SocialNetworkOAuthInput>
	name: Scalars['String']
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	legalIds: LegalIdsInput
	birthday?: Maybe<Scalars['Date']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncomeInput>
	occupationId?: Maybe<Scalars['ID']>
	contacts?: Maybe<Array<PersonContactInput>>
	verifyContact?: Maybe<TypeContactVerification>
	addresses?: Maybe<Array<AddressUserInput>>
	originId?: Maybe<Scalars['ID']>
	origin?: Maybe<Scalars['String']>
	originUrl?: Maybe<Scalars['String']>
	originChannelRaw?: Maybe<Scalars['String']>
	originChannel?: Maybe<Scalars['String']>
	localEvent?: Maybe<Scalars['String']>
	motherName?: Maybe<Scalars['String']>
	sessionId?: Maybe<Scalars['String']>
}

export type SocialNetworkOAuthInput = {
	accessToken: Scalars['String']
	refreshToken?: Maybe<Scalars['String']>
	scopes?: Maybe<Array<Scalars['String']>>
	expiryTimestamp?: Maybe<Scalars['DateTime']>
}

export type TypeContactVerification = 'PHONE' | 'EMAIL'

export type AddressUserInput = {
	context?: Maybe<Scalars['String']>
	country: Scalars['String']
	city: Scalars['String']
	state: Scalars['String']
	stateAbbrev?: Maybe<Scalars['String']>
	zip?: Maybe<Scalars['String']>
	district?: Maybe<Scalars['String']>
	kind?: Maybe<Scalars['String']>
	number?: Maybe<Scalars['Int']>
	place: Scalars['String']
	complement?: Maybe<Scalars['String']>
	reference?: Maybe<Scalars['String']>
	instructions?: Maybe<Scalars['String']>
	lon?: Maybe<Scalars['Float']>
	lat?: Maybe<Scalars['Float']>
}

export type CreateUserPayload = {
	__typename?: 'CreateUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	id: Scalars['ID']
	name?: Maybe<Scalars['String']>
	oauthToken?: Maybe<AccessTokenPayload>
	validation: UserValidation
}

export type UnsubscribeUserInput = {
	token?: Maybe<Scalars['String']>
	userIdSha256?: Maybe<Scalars['String']>
	channels?: Maybe<Array<CommunicationChannelEnum>>
}

export type CommunicationChannelEnum = 'EMAIL' | 'SMS'

export type UnsubscribeUserPayload = {
	__typename?: 'UnsubscribeUserPayload'
	status?: Maybe<UnsubscribeUserStatus>
}

export type UnsubscribeUserStatus = 'UNSUBSCRIBED' | 'ERROR'

export type VerifyDocumentInput = {
	clientMutationId?: Maybe<Scalars['String']>
	documentType: DocumentType
	image: DocumentImage
}

export type DocumentImage = {
	fullImage?: Maybe<Scalars['String']>
	frontImage?: Maybe<Scalars['String']>
	backImage?: Maybe<Scalars['String']>
}

export type VerifyDocumentPayload = {
	__typename?: 'VerifyDocumentPayload'
	clientMutationId?: Maybe<Scalars['String']>
	id: Scalars['ID']
	documentType: DocumentType
	status: DocumentStatus
	createdAt: Scalars['DateTime']
	message?: Maybe<Scalars['String']>
}

export type VerifyDocumentForUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	legalId: DocumentLegalIdInput
	documentType: DocumentType
	image: DocumentImage
}

export type RefreshAccessTokenInput = {
	clientMutationId?: Maybe<Scalars['String']>
	refreshToken: Scalars['String']
}

export type RefreshAccessTokenPayload = {
	__typename?: 'RefreshAccessTokenPayload'
	clientMutationId?: Maybe<Scalars['String']>
	oauthToken?: Maybe<AccessTokenPayload>
}

export type VerifyDataScoreInput = {
	legalId: LegalIdsPersonInput
	contact?: Maybe<ContactPersonInput>
	address?: Maybe<AddressScoreInput>
	email?: Maybe<Scalars['String']>
	deviceId?: Maybe<Scalars['String']>
	transactionType: TransactionScoreType
}

export type ContactPersonInput = {
	areaCode?: Maybe<Scalars['String']>
	phone?: Maybe<Scalars['String']>
}

export type AddressScoreInput = {
	zip?: Maybe<Scalars['String']>
	place?: Maybe<Scalars['String']>
	number?: Maybe<Scalars['Int']>
	complement?: Maybe<Scalars['String']>
	district?: Maybe<Scalars['String']>
	city?: Maybe<Scalars['String']>
	state?: Maybe<Scalars['String']>
	country?: Maybe<Scalars['String']>
	physicalDelivery?: Maybe<Scalars['Boolean']>
}

export type TransactionScoreType = 'PRESENCIAL' | 'ONLINE'

export type VerifyDataScorePayload = {
	__typename?: 'VerifyDataScorePayload'
	score?: Maybe<Scalars['String']>
	reason?: Maybe<Scalars['String']>
	ratings?: Maybe<Array<Maybe<DataScoreRating>>>
	insights?: Maybe<Array<Maybe<DataScoreInsight>>>
}

export type DataScoreRating = {
	__typename?: 'DataScoreRating'
	value?: Maybe<Scalars['String']>
	reason?: Maybe<Scalars['String']>
	date?: Maybe<Scalars['DateTime']>
	relatedTo?: Maybe<Array<Maybe<Scalars['String']>>>
	timeline?: Maybe<Array<Maybe<DataScoreTimeline>>>
}

export type DataScoreTimeline = {
	__typename?: 'DataScoreTimeline'
	value?: Maybe<Scalars['String']>
	reason?: Maybe<Scalars['String']>
	date?: Maybe<Scalars['DateTime']>
}

export type DataScoreInsight = {
	__typename?: 'DataScoreInsight'
	code?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	type?: Maybe<Scalars['String']>
	category?: Maybe<Scalars['String']>
	relevance?: Maybe<Scalars['String']>
	relatedTo?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type ChangeBenefitInput = {
	documentNumber: Scalars['String']
	currentBenefitId: Scalars['ID']
	newBenefitId: Scalars['ID']
	cardId: Scalars['ID']
}

export type ChangeBenefitPayload = {
	__typename?: 'ChangeBenefitPayload'
	documentNumber: Scalars['String']
	currentBenefitId: Scalars['ID']
	newBenefitId: Scalars['ID']
	cardId: Scalars['ID']
}

export type RequestRewardInput = {
	compositionId: Scalars['ID']
	cardId: Scalars['ID']
}

export type RequestRewardPayload = {
	__typename?: 'RequestRewardPayload'
	id: Scalars['ID']
	bin: Bin
	cardId: Scalars['ID']
	description?: Maybe<Scalars['String']>
	compositionId: Scalars['ID']
	status: RewardStatus
	requestedDate: Scalars['DateTime']
}

export type ResendRewardInput = {
	rewardId: Scalars['ID']
}

export type ResendRewardPayload = {
	__typename?: 'ResendRewardPayload'
	maskedEmail?: Maybe<Scalars['String']>
}

export type VerifyUserScoreInput = {
	clientMutationId?: Maybe<Scalars['String']>
	legalId: LegalIdsPersonInput
	name: Scalars['String']
	birthday?: Maybe<Scalars['Date']>
	email?: Maybe<Scalars['String']>
	zipCode?: Maybe<Scalars['String']>
	mobile?: Maybe<MobileType>
	twoFactorAuthentication?: Maybe<Scalars['Boolean']>
	sessionId?: Maybe<Scalars['String']>
}

export type MobileType = {
	areaCode?: Maybe<Scalars['String']>
	number?: Maybe<Scalars['String']>
}

export type VerifyUserScorePayload = {
	__typename?: 'VerifyUserScorePayload'
	clientMutationId?: Maybe<Scalars['String']>
	result: ResultVerifyUserScoreType
	details?: Maybe<Array<Maybe<ResultVerifyUserScoreDetails>>>
}

export type ResultVerifyUserScoreType = 'DENY' | 'HOLD' | 'APPROVED'

export type ResultVerifyUserScoreDetails =
	| 'PRIMARY_EMAIL'
	| 'PRIMARY_PHONE'
	| 'SECONDARY_EMAIL'
	| 'SECONDARY_PHONE'

export type CaseCustomerNotificationInput = {
	customer: CustomerInput
	type: Scalars['String']
	reason: Scalars['String']
	description: Scalars['String']
	origin: Scalars['String']
	subOrigin?: Maybe<Scalars['String']>
	attachment?: Maybe<Scalars['String']>
	bin?: Maybe<Scalars['String']>
}

export type CustomerInput = {
	type?: Maybe<Scalars['String']>
	legalId: LegalIdCpfInput
	firstName: Scalars['String']
	lastName: Scalars['String']
	email: Scalars['String']
	phone: Scalars['String']
	mobilePhone: Scalars['String']
	birthdate?: Maybe<Scalars['Date']>
	address?: Maybe<Array<Maybe<AddressCustomerNotificationInput>>>
}

export type LegalIdCpfInput = {
	cpf: Scalars['String']
}

export type AddressCustomerNotificationInput = {
	place?: Maybe<Scalars['String']>
	number?: Maybe<Scalars['Int']>
	city?: Maybe<Scalars['String']>
	zip?: Maybe<Scalars['String']>
	country?: Maybe<Scalars['String']>
	state?: Maybe<Scalars['String']>
	type?: Maybe<AddressCustomerNotificationType>
}

export type AddressCustomerNotificationType = 'SHIPPING' | 'BILLING'

export type CaseCustomerNotificationPayload = {
	__typename?: 'CaseCustomerNotificationPayload'
	cpf?: Maybe<Scalars['String']>
	type?: Maybe<Scalars['String']>
	reason?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	origin?: Maybe<Scalars['String']>
	subOrigin?: Maybe<Scalars['String']>
	bin?: Maybe<Scalars['String']>
}

export type SetImageInput = {
	clientMutationId?: Maybe<Scalars['String']>
	id: Scalars['ID']
	filename: Scalars['String']
	image: Scalars['String']
}

export type SetImagePayload = {
	__typename?: 'SetImagePayload'
	clientMutationId?: Maybe<Scalars['String']>
	node?: Maybe<Node>
}

export type CreateCardInput = {
	clientMutationId?: Maybe<Scalars['String']>
	sensitive: Scalars['String']
	holderId: Scalars['ID']
	billingAddress?: Maybe<AddressInput>
	verificationStatus?: Maybe<CardVerificationStatus>
}

export type CreateCardPayload = {
	__typename?: 'CreateCardPayload'
	clientMutationId?: Maybe<Scalars['String']>
	card?: Maybe<Card>
}

export type DeleteCardInput = {
	clientMutationId?: Maybe<Scalars['String']>
	cardId: Scalars['ID']
}

export type DeleteCardPayload = {
	__typename?: 'DeleteCardPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardId: Scalars['ID']
	last4?: Maybe<Scalars['String']>
	expiry?: Maybe<CardExpiry>
	holder?: Maybe<CardHolder>
	bin?: Maybe<Bin>
}

export type UpdateCardInput = {
	clientMutationId?: Maybe<Scalars['String']>
	holderId: Scalars['ID']
	billingAddress?: Maybe<AddressInput>
	status?: Maybe<CardStatus>
	verificationStatus?: Maybe<CardVerificationStatus>
	sensitive?: Maybe<Scalars['String']>
}

export type UpdateCardPayload = {
	__typename?: 'UpdateCardPayload'
	clientMutationId?: Maybe<Scalars['String']>
	card?: Maybe<Card>
}

export type UpdateCardVerificationInput = {
	clientMutationId?: Maybe<Scalars['String']>
	cardId: Scalars['ID']
	verificationStatus: CardVerificationStatus
}

export type UpdateCardVerificationPayload = {
	__typename?: 'UpdateCardVerificationPayload'
	clientMutationId?: Maybe<Scalars['String']>
	card?: Maybe<Card>
}

export type CreateProvisionedCardInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	sensitive?: Maybe<Scalars['String']>
	bin?: Maybe<Scalars['String']>
	last4?: Maybe<Scalars['String']>
	hashCard?: Maybe<Scalars['String']>
	billingAddress?: Maybe<AddressInput>
}

export type DeleteCardHolderInput = {
	clientMutationId?: Maybe<Scalars['String']>
	cardHolderId: Scalars['ID']
}

export type DeleteCardHolderPayload = {
	__typename?: 'DeleteCardHolderPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	companyName?: Maybe<Scalars['String']>
	companyLegalName?: Maybe<Scalars['String']>
}

export type RequestPasswordResetInput = {
	clientMutationId?: Maybe<Scalars['String']>
	legalId: LegalIdsInput
	email?: Maybe<Scalars['String']>
	phone?: Maybe<Scalars['String']>
	type?: Maybe<PersonContactType>
}

export type RequestPasswordResetPayload = {
	__typename?: 'RequestPasswordResetPayload'
	clientMutationId?: Maybe<Scalars['String']>
	maskedEmail?: Maybe<Scalars['String']>
	maskedPhone?: Maybe<Scalars['String']>
}

export type PasswordResetInput = {
	clientMutationId?: Maybe<Scalars['String']>
	legalId: LegalIdsInput
	email?: Maybe<Scalars['String']>
	phone?: Maybe<Scalars['String']>
	token: Scalars['String']
	type?: Maybe<PersonContactType>
	bcryptPassword: Scalars['String']
}

export type PasswordResetPayload = {
	__typename?: 'PasswordResetPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
}

export type RequestContactVerificationInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	type: PersonContactType
	value: Scalars['String']
}

export type RequestContactVerificationPayload = {
	__typename?: 'RequestContactVerificationPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	contact?: Maybe<PersonContact>
}

export type ContactVerificationInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	type: PersonContactType
	value: Scalars['String']
	verificationCode: Scalars['String']
}

export type ContactVerificationPayload = {
	__typename?: 'ContactVerificationPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	contact?: Maybe<PersonContact>
}

export type DeleteUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
}

export type DeleteUserPayload = {
	__typename?: 'DeleteUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	username: Scalars['String']
	name?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
}

export type UpdateUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	id: Scalars['ID']
	username?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	legalIds?: Maybe<LegalIdsInput>
	birthday?: Maybe<Scalars['Date']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncomeInput>
	occupationId?: Maybe<Scalars['ID']>
	contacts?: Maybe<Array<Maybe<PersonContactInput>>>
	addresses?: Maybe<Array<Maybe<AddressUserInput>>>
	motherName?: Maybe<Scalars['String']>
}

export type UpdateUserPayload = {
	__typename?: 'UpdateUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
}

export type CreateCardHolderForUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	companyName?: Maybe<Scalars['String']>
	companyLegalName?: Maybe<Scalars['String']>
	companylegalIds?: Maybe<CompanyLegalIdsInput>
}

export type CreateCardHolderForUserPayload = {
	__typename?: 'CreateCardHolderForUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	cardHolder?: Maybe<CardHolder>
}

export type AddCardIssuerToUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	cardIssuerId: Scalars['ID']
}

export type AddCardIssuerToUserPayload = {
	__typename?: 'AddCardIssuerToUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	cardIssuer?: Maybe<CardIssuer>
}

export type RemoveCardIssuerFromUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	cardIssuerId: Scalars['ID']
}

export type RemoveCardIssuerFromUserPayload = {
	__typename?: 'RemoveCardIssuerFromUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	cardIssuer?: Maybe<CardIssuer>
}

export type AddMerchantToUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	merchantId: Scalars['ID']
}

export type AddMerchantToUserPayload = {
	__typename?: 'AddMerchantToUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	merchant?: Maybe<Merchant>
}

export type RemoveMerchantFromUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	merchantId: Scalars['ID']
}

export type RemoveMerchantFromUserPayload = {
	__typename?: 'RemoveMerchantFromUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	merchant?: Maybe<Merchant>
}

export type AddSocialNetworkToUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	socialNetwork: SocialNetworkInput
	oauth?: Maybe<SocialNetworkOAuthInput>
}

export type AddSocialNetworkToUserPayload = {
	__typename?: 'AddSocialNetworkToUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	socialNetwork?: Maybe<SocialNetworkInterface>
}

export type SocialNetworkInterface = {
	provider: Scalars['String']
	username: Scalars['String']
}

export type RemoveSocialNetworkFromUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	socialNetwork: SocialNetworkInput
}

export type RemoveSocialNetworkFromUserPayload = {
	__typename?: 'RemoveSocialNetworkFromUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	provider: Scalars['String']
	username: Scalars['String']
}

export type AddPublicKeyToUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	key: Scalars['String']
	format?: Maybe<CryptoKeyFormat>
}

export type CryptoKeyFormat = 'JWK' | 'PEM' | 'X509'

export type AddPublicKeyToUserPayload = {
	__typename?: 'AddPublicKeyToUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	publicKey?: Maybe<PublicKey>
}

export type RemovePublicKeyFromUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	keyId: Scalars['String']
}

export type RemovePublicKeyFromUserPayload = {
	__typename?: 'RemovePublicKeyFromUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	publicKey?: Maybe<PublicKey>
}

export type AddAgreementToUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	agreementTermId: Scalars['ID']
	timestamp?: Maybe<Scalars['DateTime']>
}

export type AddAgreementToUserPayload = {
	__typename?: 'AddAgreementToUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	agreement?: Maybe<UserAgreement>
}

export type RemoveAgreementFromUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	agreementTermId: Scalars['ID']
}

export type RemoveAgreementFromUserPayload = {
	__typename?: 'RemoveAgreementFromUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	agreementTerm?: Maybe<AgreementTerm>
}

export type CreateAgreementTermInput = {
	clientMutationId?: Maybe<Scalars['String']>
	title: Scalars['String']
	description?: Maybe<Scalars['String']>
	url: Scalars['String']
	category?: Maybe<AgreementTermCategory>
	isWalletDigital?: Maybe<Scalars['Boolean']>
}

export type CreateAgreementTermPayload = {
	__typename?: 'CreateAgreementTermPayload'
	clientMutationId?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['String']>
}

export type RemoveAgreementTermInput = {
	clientMutationId?: Maybe<Scalars['String']>
	agreementTermId: Scalars['ID']
}

export type RemoveAgreementTermPayload = {
	__typename?: 'RemoveAgreementTermPayload'
	clientMutationId?: Maybe<Scalars['String']>
}

export type PasswordUpdateInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	bcryptPasswordOld: Scalars['String']
	bcryptPasswordNew: Scalars['String']
	bcryptPasswordConfirmedNew: Scalars['String']
}

export type PasswordUpdatePayload = {
	__typename?: 'PasswordUpdatePayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
}

export type CreateProvisionedUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	legalIds: LegalIdsInput
	birthday?: Maybe<Scalars['Date']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncomeInput>
	occupationId?: Maybe<Scalars['ID']>
	contacts?: Maybe<Array<Maybe<PersonContactInput>>>
	addresses?: Maybe<Array<Maybe<AddressInput>>>
	originId?: Maybe<Scalars['ID']>
	origin?: Maybe<Scalars['String']>
	originUrl?: Maybe<Scalars['String']>
	originChannelRaw?: Maybe<Scalars['String']>
	originChannel?: Maybe<Scalars['String']>
	localEvent?: Maybe<Scalars['String']>
	transaction?: Maybe<TransactionInput>
	event?: Maybe<Scalars['String']>
	ticket?: Maybe<Scalars['String']>
	motherName?: Maybe<Scalars['String']>
}

export type TransactionInput = {
	transactionId?: Maybe<Scalars['String']>
	dateTime?: Maybe<Scalars['DateTime']>
	amount?: Maybe<AmountInput>
}

export type CreateProvisionedUserPayload = {
	__typename?: 'CreateProvisionedUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	id: Scalars['ID']
	name?: Maybe<Scalars['String']>
}

export type UpdateProvisionedUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	id: Scalars['ID']
	legalIds?: Maybe<LegalIdsInput>
	birthday?: Maybe<Scalars['Date']>
	gender?: Maybe<Gender>
	maritalStatus?: Maybe<MaritalStatus>
	income?: Maybe<PersonYearlyIncomeInput>
	occupationId?: Maybe<Scalars['ID']>
	contacts?: Maybe<Array<Maybe<PersonContactInput>>>
	addresses?: Maybe<Array<Maybe<AddressInput>>>
	card?: Maybe<CreateProvisionedCardInput>
	transaction?: Maybe<TransactionInput>
	event?: Maybe<Scalars['String']>
	ticket?: Maybe<Scalars['String']>
	motherName?: Maybe<Scalars['String']>
}

export type UpdateProvisionedUserPayload = {
	__typename?: 'UpdateProvisionedUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<ProvisionedUser>
	cards?: Maybe<Array<Maybe<Card>>>
	cardTokens?: Maybe<Array<Maybe<CardToken>>>
}

export type AddAcquirerToUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	acquirerCode: Scalars['String']
}

export type AddAcquirerToUserPayload = {
	__typename?: 'AddAcquirerToUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	acquirer?: Maybe<Acquirer>
}

export type RemoveAcquirerFromUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	acquirerCode: Scalars['String']
}

export type RemoveAcquirerFromUserPayload = {
	__typename?: 'RemoveAcquirerFromUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	acquirer?: Maybe<Acquirer>
}

export type CreateCardTokenForUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	sensitive?: Maybe<Scalars['String']>
	cipheredCardVerificationData?: Maybe<Scalars['String']>
	cardId?: Maybe<Scalars['ID']>
	user?: Maybe<CreateProvisionedUserInput>
	origin?: Maybe<CreateCardTokenOriginInput>
	usageConstraints?: Maybe<CardUsageConstraintsInput>
	tokenRequestorId: Scalars['String']
	cardProductId?: Maybe<Scalars['String']>
	lifeCycleCallbackUrl?: Maybe<Scalars['String']>
}

export type CreateCardTokenForUserPayload = {
	__typename?: 'CreateCardTokenForUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardToken?: Maybe<CardToken>
}

export type CreateCardTokenForUserAsyncInput = {
	clientMutationId?: Maybe<Scalars['String']>
	sensitive: Scalars['String']
	user?: Maybe<CreateProvisionedUserInput>
	usageConstraints?: Maybe<CardUsageConstraintsInput>
	tokenRequestorId: Scalars['String']
	cardProductId?: Maybe<Scalars['String']>
	callbackUrl: Scalars['String']
	lifeCycleCallbackUrl?: Maybe<Scalars['String']>
}

export type CreateCardTokenForUserAsyncPayload = {
	__typename?: 'CreateCardTokenForUserAsyncPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardTokenRequestId: Scalars['ID']
}

export type UpdateCardTokenCallbackUrlInput = {
	url?: Maybe<Scalars['String']>
	cardId: Scalars['ID']
}

export type UpdateCardTokenCallbackUrlPayload = {
	__typename?: 'UpdateCardTokenCallbackUrlPayload'
	success?: Maybe<Scalars['Boolean']>
}

export type CreateCardFraudTransactionInput = {
	clientMutationId?: Maybe<Scalars['String']>
	cardFraudTransaction: CardFraudTransactionInput
	reference?: Maybe<Scalars['String']>
	codePos: Scalars['ID']
	liability?: Maybe<LiabilityType>
	codeEic?: Maybe<Scalars['String']>
	flaggedAt?: Maybe<Scalars['DateTime']>
	arn?: Maybe<Scalars['Int']>
	initiated: InitiatedType
	settled: Scalars['Date']
}

export type CardFraudTransactionInput = {
	codeCapture: Scalars['Int']
	codeUsage: Scalars['Int']
	sensitive?: Maybe<Scalars['String']>
	bin?: Maybe<Scalars['String']>
	last4?: Maybe<Scalars['String']>
	authorization: AuthorizationInput
	legalId: Scalars['String']
	merchantName: Scalars['String']
	iso: Scalars['Int']
	acquirerId?: Maybe<Scalars['ID']>
	currency: Scalars['String']
	value: Scalars['String']
	installments: Scalars['Int']
	timestamp: Scalars['DateTime']
}

export type CreateCardFraudTransactionPayload = {
	__typename?: 'CreateCardFraudTransactionPayload'
	clientMutationId?: Maybe<Scalars['String']>
	cardFraudTransaction?: Maybe<CardFraudTransaction>
}

export type CommunicationChannelInput = {
	channels: Array<Maybe<CommunicationChannelEnum>>
}

export type CommunicationChannelPayload = {
	__typename?: 'CommunicationChannelPayload'
	communicationChannels?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type ProvisionedCommunicationChannelInput = {
	userId: Scalars['ID']
	channels: Array<Maybe<CommunicationChannelEnum>>
}

export type ProvisionedCommunicationChannelPayload = {
	__typename?: 'ProvisionedCommunicationChannelPayload'
	userId: Scalars['ID']
	communicationChannels?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type CreateUserInterestInput = {
	clientMutationId?: Maybe<Scalars['String']>
	title: Scalars['String']
	description?: Maybe<Scalars['String']>
}

export type CreateUserInterestPayload = {
	__typename?: 'CreateUserInterestPayload'
	clientMutationId?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['String']>
}

export type RemoveUserInterestInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userInterestId: Scalars['ID']
}

export type RemoveUserInterestPayload = {
	__typename?: 'RemoveUserInterestPayload'
	clientMutationId?: Maybe<Scalars['String']>
}

export type AddInterestToUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userInterestId: Scalars['ID']
	timestamp?: Maybe<Scalars['DateTime']>
}

export type AddInterestToUserPayload = {
	__typename?: 'AddInterestToUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	interest?: Maybe<UserInterest>
}

export type RemoveInterestFromUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userInterestId: Scalars['ID']
}

export type RemoveInterestFromUserPayload = {
	__typename?: 'RemoveInterestFromUserPayload'
	clientMutationId?: Maybe<Scalars['String']>
	user?: Maybe<User>
	interest?: Maybe<UserInterest>
}

export type AddInterestToProvisionedUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	userInterestId: Scalars['ID']
	timestamp?: Maybe<Scalars['DateTime']>
}

export type RemoveInterestFromProvisionedUserInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userId: Scalars['ID']
	userInterestId: Scalars['ID']
}

export type UpdateUserInterestsInput = {
	clientMutationId?: Maybe<Scalars['String']>
	userIdSha256: Scalars['String']
	userInterestIds: Array<Scalars['ID']>
}

export type UpdateUserInterestsPayload = {
	__typename?: 'UpdateUserInterestsPayload'
	clientMutationId?: Maybe<Scalars['String']>
	userInterests?: Maybe<Array<UserInterest>>
}

export type CommunicationChannelBlockInput = {
	begin?: Maybe<Scalars['Date']>
	end: Scalars['Date']
}

export type CommunicationChannelBlockPayload = {
	__typename?: 'CommunicationChannelBlockPayload'
	id: Scalars['ID']
}

export type AdditionalInformationInput = {
	itemTransaction?: Maybe<Scalars['String']>
	price?: Maybe<Scalars['String']>
	customerName?: Maybe<Scalars['String']>
	other?: Maybe<Scalars['String']>
}

export type Brand = 'MASTERCARD' | 'VISA' | 'AMEX' | 'ELO' | 'HIPERCARD'

export type CardData = {
	__typename?: 'cardData'
	holderName?: Maybe<Scalars['String']>
	bin?: Maybe<Bin>
	last4?: Maybe<Scalars['String']>
	expiry?: Maybe<CardExpiry>
}

export type CardExpiryInput = {
	month: Scalars['Int']
	year: Scalars['Int']
}

export type CardHolderInsuranceCoverage = {
	__typename?: 'CardHolderInsuranceCoverage'
	description: Scalars['String']
	coverage: Scalars['String']
}

export type CardHolderInsuranceDetailsInterface = {
	legalDisclaimer: Scalars['String']
	coverage: Array<CardHolderInsuranceCoverage>
}

export type CardStatusActive = CardStatusInterface & {
	__typename?: 'CardStatusActive'
	status: CardStatus
	activatedTimestamp: Scalars['DateTime']
	suspendInstructions: Scalars['String']
}

export type CardStatusActiveSuspendInstructionsArgs = {
	language?: Maybe<Scalars['String']>
}

export type CardStatusInactive = CardStatusInterface & {
	__typename?: 'CardStatusInactive'
	status: CardStatus
	activateInstructions: Scalars['String']
}

export type CardStatusInactiveActivateInstructionsArgs = {
	language?: Maybe<Scalars['String']>
}

export type CardStatusSuspended = CardStatusInterface & {
	__typename?: 'CardStatusSuspended'
	status: CardStatus
	permanent: Scalars['Boolean']
	reason: CardSuspendReason
	suspendedTimestamp: Scalars['DateTime']
	instructions: Scalars['String']
}

export type CardStatusSuspendedInstructionsArgs = {
	language?: Maybe<Scalars['String']>
}

export type CreateP2POrigin = {
	__typename?: 'CreateP2POrigin'
	geolocation?: Maybe<Geolocation>
	device?: Maybe<DeviceP2P>
}

export type DeviceP2P = {
	__typename?: 'DeviceP2P'
	id?: Maybe<Scalars['ID']>
	userAgent?: Maybe<Scalars['String']>
	brand?: Maybe<Scalars['String']>
	model?: Maybe<Scalars['String']>
	type?: Maybe<DeviceType>
	serialNumber?: Maybe<Scalars['String']>
	imei?: Maybe<Scalars['String']>
	os?: Maybe<Scalars['String']>
}

export type CryptoHashAlgorithm = 'SHA1' | 'SHA256' | 'SHA384' | 'SHA512'

export type DocumentLegalId = {
	__typename?: 'DocumentLegalId'
	cpf: Scalars['String']
}

export type HsmPropertiesInput = {
	mode: Scalars['String']
	keyType: Scalars['String']
	key: Scalars['String']
	ksnDescriptor?: Maybe<Scalars['String']>
	keySerialNumber?: Maybe<Scalars['String']>
	lmkIdentifier: Scalars['String']
	padding?: Maybe<PaddingType>
	delimiter?: Maybe<Scalars['String']>
}

export type LegalIdsInputCpfCnpj = {
	__typename?: 'LegalIdsInputCpfCnpj'
	cpf?: Maybe<Cpf>
	cnpj?: Maybe<Cnpj>
}

export type PersonLegalIds = {
	__typename?: 'PersonLegalIds'
	cpf?: Maybe<Cpf>
	rg?: Maybe<Rg>
}

export type PspTransactionStatus = 'APPROVED' | 'DENIED' | 'REVERSAL_ADVICE' | 'REVERSAL'

export type SendOption = 'TOKEN_SMS' | 'TOKEN_EMAIL' | 'HOTPHONE' | 'HOTMAIL'

export type SocialNetworkOAuth = SocialNetworkInterface & {
	__typename?: 'SocialNetworkOAuth'
	provider: Scalars['String']
	username: Scalars['String']
	accessToken?: Maybe<Scalars['String']>
	refreshToken?: Maybe<Scalars['String']>
	scopes?: Maybe<Array<Scalars['String']>>
	expiryTimestamp?: Maybe<Scalars['DateTime']>
}

export type TravelInsuranceBeneficiary = {
	__typename?: 'TravelInsuranceBeneficiary'
	legalIds: InsuranceLegalIds
	name: Scalars['String']
	birthday: Scalars['Date']
	gender: Gender
	relationship: TravelInsuranceBeneficiaryRelationship
	percentageShare: Scalars['Float']
}

export type TravelInsuranceBeneficiaryRelationship =
	| 'SPOUSE'
	| 'OFFSPRING'
	| 'PARENT'
	| 'SIBLING'
	| 'OTHER'

export type TravelInsuranceBeneficiaryInput = {
	legalIds: InsuranceLegalIdsInput
	name: Scalars['String']
	birthday: Scalars['Date']
	gender: Gender
	relationship: TravelInsuranceBeneficiaryRelationship
	percentageShare: Scalars['Float']
}

export type VerifyProfileScore = {
	__typename?: 'VerifyProfileScore'
	cpf: Scalars['String']
}

export type CreateLoginSaltMutationVariables = Exact<{
	username: Scalars['String']
}>

export type CreateLoginSaltMutation = { __typename?: 'Mutation' } & {
	createLoginSalt: { __typename?: 'CreateLoginSaltPayload' } & Pick<
		CreateLoginSaltPayload,
		'username' | 'salt'
	>
}

export type LoginMutationVariables = Exact<{
	username: Scalars['String']
	challenge: Scalars['String']
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
	login: { __typename?: 'LoginPayload' } & Pick<LoginPayload, 'accessToken'> & {
			oauthToken?: Maybe<
				{ __typename?: 'AccessTokenPayload' } & Pick<
					AccessTokenPayload,
					'accessToken' | 'refreshToken'
				>
			>
		}
}

export type SocialNetworkOAuthLoginMutationVariables = Exact<{
	provider: Scalars['String']
	username: Scalars['String']
	accessToken: Scalars['String']
}>

export type SocialNetworkOAuthLoginMutation = { __typename?: 'Mutation' } & {
	socialNetworkOAuthLogin: { __typename?: 'LoginPayload' } & Pick<
		LoginPayload,
		'accessToken'
	>
}

export type ServerPublicKeyQueryVariables = Exact<{ [key: string]: never }>

export type ServerPublicKeyQuery = { __typename?: 'Query' } & {
	serverPublicKey?: Maybe<{ __typename?: 'ServerPublicKey' } & Pick<ServerPublicKey, 'key'>>
}

export type RapidScoreQueryVariables = Exact<{
	email: Scalars['String']
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	phoneNumber?: Maybe<Scalars['String']>
	cpf: Scalars['String']
	numberBin?: Maybe<Scalars['String']>
	address?: Maybe<Array<Maybe<AddressVerifyEmailScoreInput>>>
}>

export type RapidScoreQuery = { __typename?: 'Query' } & {
	verifyEmailRapidScore: { __typename?: 'EmailAgeRapidScoreResponse' } & Pick<
		EmailAgeRapidScoreResponse,
		'correlationId' | 'version' | 'created' | 'trackingId' | 'reason' | 'riskBand'
	> & {
			email?: Maybe<
				{ __typename?: 'EmailAgeRapidResponse' } & Pick<
					EmailAgeRapidResponse,
					| 'exists'
					| 'ownerNameMatch'
					| 'totalHits'
					| 'uniqueHits'
					| 'firstVerificationDate'
					| 'created'
					| 'dateOfBirth'
					| 'lastFlaggedOn'
					| 'ownerName'
					| 'gender'
					| 'company'
					| 'title'
					| 'lastFlaggedIndustry'
				> & {
						score?: Maybe<
							{ __typename?: 'scoreRiskScoreResponse' } & Pick<
								ScoreRiskScoreResponse,
								'reason' | 'riskLevel' | 'relevantInfoId'
							>
						>
						socialMedia?: Maybe<
							{ __typename?: 'socialMediaRiskScoreResponse' } & Pick<
								SocialMediaRiskScoreResponse,
								'socialMediaFriends' | 'image'
							> & {
									socialMediaLinks?: Maybe<
										Array<
											Maybe<
												{ __typename?: 'socialMediaLink' } & Pick<
													SocialMediaLink,
													'source' | 'link'
												>
											>
										>
									>
								}
						>
					}
			>
			domain?: Maybe<
				{ __typename?: 'DomainEmailAgeRapidResponse' } & Pick<
					DomainEmailAgeRapidResponse,
					| 'exists'
					| 'categoryCode'
					| 'corporate'
					| 'created'
					| 'name'
					| 'company'
					| 'country'
				> & {
						score?: Maybe<
							{ __typename?: 'scoreRiskScoreResponse' } & Pick<
								ScoreRiskScoreResponse,
								'reason' | 'riskLevel' | 'relevantInfoId'
							>
						>
					}
			>
			transaction?: Maybe<
				{ __typename?: 'TransactionEmailAgeRapidResponse' } & Pick<
					TransactionEmailAgeRapidResponse,
					| 'id'
					| 'cardType'
					| 'isPrepaid'
					| 'issuerBank'
					| 'issuerBrand'
					| 'issuerCountry'
					| 'cardCategory'
				> & {
						score?: Maybe<
							{ __typename?: 'scoreRiskScoreResponse' } & Pick<
								ScoreRiskScoreResponse,
								'reason' | 'riskLevel' | 'relevantInfoId'
							>
						>
					}
			>
			device?: Maybe<
				{ __typename?: 'DeviceEmailAgeRapidResponse' } & Pick<
					DeviceEmailAgeRapidResponse,
					'source' | 'id'
				> & {
						score?: Maybe<
							{ __typename?: 'scoreRiskScoreResponse' } & Pick<
								ScoreRiskScoreResponse,
								'reason' | 'riskLevel' | 'relevantInfoId'
							>
						>
					}
			>
			ip?: Maybe<
				{ __typename?: 'IpEmailAgeRapidResponse' } & Pick<
					IpEmailAgeRapidResponse,
					| 'address'
					| 'isCorporateProxy'
					| 'isRiskCountry'
					| 'isCountryMatch'
					| 'isAnonymous'
					| 'reputation'
					| 'proxyType'
					| 'proxyIdentification'
					| 'billingAddressDistance'
				> & {
						registration?: Maybe<
							{ __typename?: 'registrationRiskScoreResponse' } & Pick<
								RegistrationRiskScoreResponse,
								'isp' | 'org' | 'asnum' | 'domain' | 'userType' | 'netSpeedCell'
							>
						>
						location?: Maybe<
							{ __typename?: 'locationRiskScoreResponse' } & Pick<
								LocationRiskScoreResponse,
								| 'continentCode'
								| 'countryCode'
								| 'regionCode'
								| 'city'
								| 'postalCode'
								| 'regionConfidence'
								| 'timezoneOffset'
								| 'cityConfidence'
								| 'countryConfidence'
								| 'postalCodeConfidence'
								| 'callingCode'
								| 'metroCode'
								| 'latitude'
								| 'longitude'
							>
						>
						score?: Maybe<
							{ __typename?: 'scoreRiskScoreResponse' } & Pick<
								ScoreRiskScoreResponse,
								'reason' | 'riskLevel' | 'relevantInfoId'
							>
						>
					}
			>
			service?: Maybe<
				{ __typename?: 'ServiceEmailAgeRapidResponse' } & Pick<
					ServiceEmailAgeRapidResponse,
					'existingCustomer' | 'location' | 'detail' | 'category' | 'deliveryType' | 'date'
				> & {
						score?: Maybe<
							{ __typename?: 'scoreRiskScoreResponse' } & Pick<
								ScoreRiskScoreResponse,
								'reason' | 'riskLevel' | 'relevantInfoId'
							>
						>
					}
			>
			digitalIdentity?: Maybe<
				{ __typename?: 'DigitalIdentityEmailAgeResponse' } & Pick<
					DigitalIdentityEmailAgeResponse,
					| 'overallScore'
					| 'emailToIpConfidence'
					| 'emailToPhoneConfidence'
					| 'emailToBillAddressConfidence'
					| 'emailToShipAddressConfidence'
					| 'emailToFullNameConfidence'
					| 'emailToLastNameConfidence'
					| 'ipToPhoneConfidence'
					| 'ipToBillAddressConfidence'
					| 'phoneToFullNameConfidence'
					| 'phoneToLastNameConfidence'
					| 'shipAddressToBillAddressConfidence'
					| 'shipAddressToFullNameConfidence'
					| 'shipAddressToLastNameConfidence'
					| 'billAddressToLastNameConfidence'
				>
			>
			phone?: Maybe<
				{ __typename?: 'PhoneEmailAgeRapidResponse' } & Pick<
					PhoneEmailAgeRapidResponse,
					| 'isBillingLocation'
					| 'number'
					| 'ownerNameMatch'
					| 'countryCode'
					| 'carrier'
					| 'ownerName'
					| 'ownerType'
				> & {
						score?: Maybe<
							{ __typename?: 'scoreRiskScoreResponse' } & Pick<
								ScoreRiskScoreResponse,
								'reason' | 'riskLevel' | 'relevantInfoId'
							>
						>
					}
			>
			address?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'AddressEmailAgeRapidResponse' } & Pick<
							AddressEmailAgeRapidResponse,
							| 'isShipForward'
							| 'isShipCityPostalMatch'
							| 'isBillCityPostalMatch'
							| 'addressCheck'
							| 'street1'
							| 'street2'
							| 'city'
							| 'regionCode'
							| 'postalCode'
							| 'countryCode'
							| 'company'
							| 'type'
						> & {
								score?: Maybe<
									{ __typename?: 'scoreRiskScoreResponse' } & Pick<
										ScoreRiskScoreResponse,
										'reason' | 'riskLevel' | 'relevantInfoId'
									>
								>
							}
					>
				>
			>
		}
}

export type ClassicScoreQueryVariables = Exact<{
	email: Scalars['String']
	firstName?: Maybe<Scalars['String']>
	lastName?: Maybe<Scalars['String']>
	phoneNumber?: Maybe<Scalars['String']>
	cpf: Scalars['String']
	numberBin?: Maybe<Scalars['String']>
	address?: Maybe<Array<Maybe<AddressVerifyEmailScoreInput>>>
}>

export type ClassicScoreQuery = { __typename?: 'Query' } & {
	verifyEmailClassicScore: { __typename?: 'EmailAgeClassicScoreResponse' } & {
		domain?: Maybe<
			{ __typename?: 'DomainEmailAgeClassicResponse' } & Pick<
				DomainEmailAgeClassicResponse,
				| 'exists'
				| 'name'
				| 'company'
				| 'country'
				| 'category'
				| 'corporate'
				| 'riskLevel'
				| 'relevantInfo'
				| 'risklevelId'
				| 'countryMatch'
				| 'riskCountry'
			>
		>
		digitalIdentity?: Maybe<
			{ __typename?: 'DigitalIdentityEmailAgeResponse' } & Pick<
				DigitalIdentityEmailAgeResponse,
				| 'overallScore'
				| 'emailToIpConfidence'
				| 'emailToPhoneConfidence'
				| 'emailToBillAddressConfidence'
				| 'emailToShipAddressConfidence'
				| 'emailToFullNameConfidence'
				| 'emailToLastNameConfidence'
				| 'ipToPhoneConfidence'
				| 'ipToBillAddressConfidence'
				| 'phoneToFullNameConfidence'
				| 'phoneToLastNameConfidence'
				| 'shipAddressToBillAddressConfidence'
				| 'shipAddressToFullNameConfidence'
				| 'shipAddressToLastNameConfidence'
				| 'billAddressToLastNameConfidence'
			>
		>
		ip?: Maybe<
			{ __typename?: 'IpEmailAgeClassicResponse' } & Pick<
				IpEmailAgeClassicResponse,
				| 'riskLevelId'
				| 'riskReasonId'
				| 'riskLevel'
				| 'riskReason'
				| 'reputation'
				| 'anonymousDetected'
				| 'proxyType'
				| 'isp'
				| 'org'
				| 'userType'
				| 'netSpeedCell'
				| 'corporateProxy'
				| 'continentCode'
				| 'country'
				| 'countryCode'
				| 'city'
				| 'callingcode'
				| 'metroCode'
				| 'map'
				| 'countrymatch'
				| 'latitude'
				| 'longitude'
			>
		>
		emailAge?: Maybe<
			{ __typename?: 'EaEmailAgeClassicResponse' } & Pick<
				EaEmailAgeClassicResponse,
				| 'score'
				| 'statusId'
				| 'reasonId'
				| 'adviceId'
				| 'riskBandId'
				| 'status'
				| 'reason'
				| 'advice'
				| 'riskBand'
			>
		>
		email?: Maybe<
			{ __typename?: 'EmailEmailAgeClassicResponse' } & Pick<
				EmailEmailAgeClassicResponse,
				| 'address'
				| 'exists'
				| 'gender'
				| 'location'
				| 'company'
				| 'title'
				| 'nameMatch'
				| 'countryMatch'
				| 'sourceIndustry'
				| 'dateOfBirth'
				| 'fraudRisk'
				| 'fraudType'
				| 'billRiskCountry'
				| 'totalHits'
				| 'uniqueHits'
				| 'firstVerification'
				| 'lastVerification'
				| 'lastFlaggEdon'
			> & {
					socialMedia?: Maybe<
						{ __typename?: 'socialMediaRiskScoreResponse' } & Pick<
							SocialMediaRiskScoreResponse,
							'socialMediaFriends' | 'image'
						> & {
								socialMediaLinks?: Maybe<
									Array<
										Maybe<
											{ __typename?: 'socialMediaLink' } & Pick<
												SocialMediaLink,
												'source' | 'link'
											>
										>
									>
								>
							}
					>
				}
		>
		phone?: Maybe<
			{ __typename?: 'PhoneEmailAgeClassicResponse' } & Pick<
				PhoneEmailAgeClassicResponse,
				| 'number'
				| 'status'
				| 'countryCode'
				| 'carrier'
				| 'carrierType'
				| 'ownerName'
				| 'ownerNameMatch'
				| 'ownerType'
			>
		>
		transaction?: Maybe<
			{ __typename?: 'TransactionEmailAgeClassicResponse' } & Pick<
				TransactionEmailAgeClassicResponse,
				'issuerBank' | 'issuerBrand' | 'issuerCountry' | 'cardCategory' | 'cardType'
			>
		>
	}
}

export const CreateLoginSaltDocument = gql`
	mutation createLoginSalt($username: String!) {
		createLoginSalt(input: { username: $username }) {
			username
			salt
		}
	}
`
export const LoginDocument = gql`
	mutation login($username: String!, $challenge: String!) {
		login(input: { username: $username, challenge: $challenge }) {
			accessToken
			oauthToken {
				accessToken
				refreshToken
			}
		}
	}
`
export const SocialNetworkOAuthLoginDocument = gql`
	mutation socialNetworkOAuthLogin(
		$provider: String!
		$username: String!
		$accessToken: String!
	) {
		socialNetworkOAuthLogin(
			input: { provider: $provider, username: $username, accessToken: $accessToken }
		) {
			accessToken
		}
	}
`
export const ServerPublicKeyDocument = gql`
	query serverPublicKey {
		serverPublicKey {
			key
		}
	}
`
export const RapidScoreDocument = gql`
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
export const ClassicScoreDocument = gql`
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

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction()
export function getSdk(
	client: GraphQLClient,
	withWrapper: SdkFunctionWrapper = defaultWrapper
) {
	return {
		createLoginSalt(
			variables: CreateLoginSaltMutationVariables
		): Promise<{
			data?: CreateLoginSaltMutation | undefined
			extensions?: any
			headers: Headers
			status: number
			errors?: GraphQLError[] | undefined
		}> {
			return withWrapper(() =>
				client.rawRequest<CreateLoginSaltMutation>(
					print(CreateLoginSaltDocument),
					variables
				)
			)
		},
		login(
			variables: LoginMutationVariables
		): Promise<{
			data?: LoginMutation | undefined
			extensions?: any
			headers: Headers
			status: number
			errors?: GraphQLError[] | undefined
		}> {
			return withWrapper(() =>
				client.rawRequest<LoginMutation>(print(LoginDocument), variables)
			)
		},
		socialNetworkOAuthLogin(
			variables: SocialNetworkOAuthLoginMutationVariables
		): Promise<{
			data?: SocialNetworkOAuthLoginMutation | undefined
			extensions?: any
			headers: Headers
			status: number
			errors?: GraphQLError[] | undefined
		}> {
			return withWrapper(() =>
				client.rawRequest<SocialNetworkOAuthLoginMutation>(
					print(SocialNetworkOAuthLoginDocument),
					variables
				)
			)
		},
		serverPublicKey(
			variables?: ServerPublicKeyQueryVariables
		): Promise<{
			data?: ServerPublicKeyQuery | undefined
			extensions?: any
			headers: Headers
			status: number
			errors?: GraphQLError[] | undefined
		}> {
			return withWrapper(() =>
				client.rawRequest<ServerPublicKeyQuery>(print(ServerPublicKeyDocument), variables)
			)
		},
		rapidScore(
			variables: RapidScoreQueryVariables
		): Promise<{
			data?: RapidScoreQuery | undefined
			extensions?: any
			headers: Headers
			status: number
			errors?: GraphQLError[] | undefined
		}> {
			return withWrapper(() =>
				client.rawRequest<RapidScoreQuery>(print(RapidScoreDocument), variables)
			)
		},
		classicScore(
			variables: ClassicScoreQueryVariables
		): Promise<{
			data?: ClassicScoreQuery | undefined
			extensions?: any
			headers: Headers
			status: number
			errors?: GraphQLError[] | undefined
		}> {
			return withWrapper(() =>
				client.rawRequest<ClassicScoreQuery>(print(ClassicScoreDocument), variables)
			)
		}
	}
}
export type Sdk = ReturnType<typeof getSdk>
