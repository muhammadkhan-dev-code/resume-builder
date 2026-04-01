import { Link } from 'react-router-dom'

const NavbarBrand = () => {
  return (
    <Link to='/' className='flex items-center gap-3 no-underline'>
      <div className='h-10 w-10 rounded-lg bg-black p-0.5 shadow-lg transition-transform hover:scale-105 md:h-12 md:w-12'>
        <svg viewBox='0 0 120 120' className='h-full w-full' aria-hidden>
          <rect width='120' height='120' rx='20' fill='#1f2937' />
          <path
            d='M30 85 L30 40 L45 55 L60 40 L75 55 L90 40 L90 85 L75 85 L75 60 L60 75 L45 60 L45 85 Z'
            fill='#FCD34D'
            stroke='#FCD34D'
            strokeWidth='2'
          />
          <path
            d='M50 70 L60 60 L70 70'
            stroke='#FCD34D'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
          />
        </svg>
      </div>
      <span className='bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-xl font-bold tracking-wide text-transparent md:text-2xl'>
        Smart Resume Builder
      </span>
    </Link>
  )
}

export default NavbarBrand
