import React, { forwardRef } from 'react'
import { FormProp } from '../../../types/form'
import { FormDivStyled, FormInputStyled, FormInputIcon } from './FormInput.styled'

const FormInput = forwardRef<any, FormProp>(function FormInput(
	{ placeholder, name, mask, boxIcons, onChange, ...rest },
	ref
) {
	return (
		<FormDivStyled>
			<FormInputStyled
				placeholder={placeholder}
				inputRef={ref}
				mask={mask}
				name={name}
				onChange={onChange}
				{...rest}
			/>
			<FormInputIcon>
				<box-icon {...boxIcons} color="#b3b3b3"></box-icon>
			</FormInputIcon>
		</FormDivStyled>
	)
})

export default FormInput
