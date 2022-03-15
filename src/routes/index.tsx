import { AuthRoutes } from './AuthRoutes'
import { AppRoutes } from './AppRoutes'

import { Layout } from '../components'

import { useAuth } from '../contexts/AuthContext'

const Routes = () => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? (
    <Layout>
      <AppRoutes />
    </Layout>
  ) : (
    <AuthRoutes />
  )
}

export { Routes }
