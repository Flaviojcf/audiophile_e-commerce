import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError: boolean
  label: string
  placeholder: string
  isLargeSize: boolean
}

export function TextInput ({ hasError, label, placeholder, isLargeSize, ...rest }: TextInputProps) {
  return (
    <InputContainer hasError={hasError} isLargeSize={isLargeSize}>
      <div>
        <label>{label}</label>
        <span>Wrong format</span>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        {...rest}
      />
    </InputContainer>
  )
}
