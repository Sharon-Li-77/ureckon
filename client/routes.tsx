import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Navigate to="/" />} />
  </Route>,
)
