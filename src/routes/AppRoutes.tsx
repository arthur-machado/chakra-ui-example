import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello</h1>} />
    </Routes>
  )
}

export { AppRoutes }
