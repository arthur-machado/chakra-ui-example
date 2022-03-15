import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export { AuthRoutes }
