import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError: boolean
  errorMessage?: string
  label: string
  placeholder: string
  isLargeSize: boolean
}

export function TextInput ({ hasError, label, placeholder, isLargeSize, errorMessage = 'Wrong format', ...rest }: TextInputProps) {
  return (
    <InputContainer hasError={hasError} isLargeSize={isLargeSize}>
      <div>
        <label>{label}</label>
        <span>{errorMessage}</span>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        {...rest}
      />
    </InputContainer>
  )
}
