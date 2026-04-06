import { useSelector } from 'react-redux'
import NavbarActions from './Navbar/NavbarActions'
import NavbarBrand from './Navbar/NavbarBrand'

const Navbar = () => {
  const themeMode = useSelector(state => state.theme.mode)
  const isDark = themeMode === 'dark'

  return (
    <nav className='border-b-2 border-slate-200 bg-white px-3 py-3 font-sans shadow-lg print:hidden sm:px-6 sm:py-4 md:px-8 md:py-5'>
      <div className='flex items-center justify-between gap-2'>
        <NavbarBrand />
        <NavbarActions />
      </div>
    </nav>
  )
}

export default Navbar
