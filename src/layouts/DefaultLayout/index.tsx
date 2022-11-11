import { Outlet } from 'react-router-dom'
import { AudioGear } from '../../components/AudioGear'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout () {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <AudioGear />
      <Footer />
    </LayoutContainer>
  )
}
