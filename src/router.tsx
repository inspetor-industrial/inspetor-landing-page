import { Route, Routes } from 'react-router'
import { LandingPage } from './pages/landing'

export function Router() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
    </Routes>
  )
}
