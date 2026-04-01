import { useSelector } from 'react-redux'
import NavbarActions from './Navbar/NavbarActions'
import NavbarBrand from './Navbar/NavbarBrand'

const Navbar = () => {
  const themeMode = useSelector(state => state.theme.mode)
  const isDark = themeMode === 'dark'

  return (
    <nav className='border-b-2 border-slate-200 bg-white px-6 py-4 font-sans shadow-lg print:hidden sm:px-8 sm:py-5'>
      <div className='flex items-center justify-between'>
        <NavbarBrand />
        <NavbarActions />
      </div>
    </nav>
  )
}

export default Navbar
