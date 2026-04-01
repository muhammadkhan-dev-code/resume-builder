import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleDarkMode } from '../../redux/themeSlice'

const NavbarActions = () => {
  const dispatch = useDispatch()

  return (
    <div className='flex items-center gap-4'>
      <Button
        size='large'
        onClick={() => dispatch(toggleDarkMode())}
        className='rounded-lg border-2 border-slate-300 bg-white text-lg font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50'
      >
        🌙
      </Button>
      <Link to='/builder'>
        <Button
          type='primary'
          size='large'
          className='rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-base font-bold text-white shadow-lg transition-all hover:shadow-xl hover:from-blue-700 hover:to-blue-800'
        >
          Build Resume
        </Button>
      </Link>
    </div>
  )
}

export default NavbarActions
