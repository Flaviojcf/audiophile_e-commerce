import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { ProductDetails } from './pages/ProductDetails'
import { Products } from './pages/Products'

export function Router () {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/products/:category/:productSlug" element={<ProductDetails />} />
      </Route>
    </Routes>
  )
}
