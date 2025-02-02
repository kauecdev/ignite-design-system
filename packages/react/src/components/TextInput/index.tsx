import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Prefix, TextInputContainer, Input } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  placeholder?: string
  disabled?: boolean
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
