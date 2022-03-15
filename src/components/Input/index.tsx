import { Input } from '@chakra-ui/react'

type InputProps = {
  type?: string
  placeholder: string
  size?: string
  id?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputComponent = ({
  placeholder,
  type,
  size,
  id,
  onChange,
}: InputProps) => {
  return (
    <Input
      size={size || 'md'}
      borderColor="gray.300"
      focusBorderColor="gray.400"
      id={id}
      type={type || 'text'}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export { InputComponent as Input }
