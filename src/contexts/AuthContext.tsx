import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
}

type AuthContextProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated')

    if (isAuth) {
      setIsAuthenticated(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthContextProvider, useAuth }
