import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError: boolean
  label: string
  placeholder: string
}

export function TextInput ({ hasError, label, placeholder, ...rest }: TextInputProps) {
  return (
    <InputContainer hasError={hasError}>
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
