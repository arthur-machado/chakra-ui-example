import { useState } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Heading,
  Link,
  Button,
} from '@chakra-ui/react'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io'

import { useAuth } from '../../contexts/AuthContext'

import { Input } from '../../components'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { setIsAuthenticated } = useAuth()

  const handleSubmit = () => {
    const isValid =
      email.trim() !== '' &&
      password.trim() !== '' &&
      email === 'admin@example.com' &&
      password === '123456'

    if (isValid) {
      setIsAuthenticated(true)
      localStorage.setItem('isAuthenticated', 'true')
    }
  }

  return (
    <Flex bg="gray.300" width="100%" height="100vh">
      <Flex width="70%" alignItems="center" justifyContent="center">
        <Box
          padding="40px 30px"
          boxShadow="md"
          bg="whiteAlpha.800"
          borderRadius="md"
          width="40%"
        >
          <Heading fontSize="24px" marginBottom="60px">
            Login
          </Heading>
          <FormControl display="flex" flexDirection="column" gap="30px">
            <InputGroup display="flex" flexDirection="column">
              <FormLabel fontSize="16px" htmlFor="email">
                Email
              </FormLabel>
              <Input
                placeholder="Email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </InputGroup>
            <InputGroup display="flex" flexDirection="column">
              <FormLabel fontSize="16px" htmlFor="password">
                Senha
              </FormLabel>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <InputRightElement
                marginTop="32px"
                marginRight="5px"
                cursor="pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoIosEyeOff size={20} />
                ) : (
                  <IoIosEye size={20} />
                )}
              </InputRightElement>
              <Link
                fontSize="14px"
                color="blue.400"
                margin="8px 0"
                alignSelf="end"
                href="#/"
              >
                Esqueci minha senha
              </Link>
            </InputGroup>
            <Button colorScheme="green" type="submit" onClick={handleSubmit}>
              Enviar
            </Button>
          </FormControl>
        </Box>
      </Flex>
      <Flex
        width="30%"
        bg="gray.700"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="white" flexWrap="wrap">
          Project Manager
        </Heading>
      </Flex>
    </Flex>
  )
}

export { Login }
