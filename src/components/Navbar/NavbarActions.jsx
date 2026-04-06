import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleDarkMode } from '../../redux/themeSlice'

const NavbarActions = () => {
  const dispatch = useDispatch()

  return (
    <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
      <Button
        size='middle'
        onClick={() => dispatch(toggleDarkMode())}
        className='rounded-lg border-2 border-slate-300 bg-white text-base sm:text-lg font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 md:size-large'
      >
        🌙
      </Button>
      <Link to='/builder'>
        <Button
          type='primary'
          size='middle'
          className='rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-sm sm:text-base font-bold text-white shadow-lg transition-all hover:shadow-xl hover:from-blue-700 hover:to-blue-800 md:size-large md:text-base'
        >
          Build
          <span className='hidden sm:inline'> Resume</span>
        </Button>
      </Link>
    </div>
  )
}

export default NavbarActions
