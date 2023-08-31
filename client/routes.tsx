import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Categories from './components/Categories.tsx'
import Trivia from './components/Trivia.tsx'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Home />} />
    <Route path="categories" element={<Categories />} />
    <Route path="categories/:id" element={<Trivia />} />
  </Route>,
)
