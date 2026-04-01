import { Button, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography

const LandingPage = () => {
  const themeMode = useSelector(state => state.theme.mode)
  const isDark = themeMode === 'dark'

  return (
    <div
      className={`mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl items-center justify-center px-4 py-12 text-center md:px-6 ${
        isDark ? 'bg-zinc-900' : 'bg-slate-100'
      }`}
    >
      <div className='w-full max-w-3xl rounded-2xl px-4 py-8 md:px-8'>
        <Title
          level={1}
          className={`!mb-6 !text-4xl !leading-tight md:!text-6xl ${
            isDark ? '!text-zinc-50' : '!text-slate-900'
          }`}
        >
          Build Your Job-Winning ATS Resume
        </Title>
        <Paragraph
          className={`mx-auto !mb-0 max-w-2xl !text-base md:!text-lg ${
            isDark ? '!text-zinc-300' : '!text-slate-600'
          }`}
        >
          Create a professional, ATS-friendly resume in minutes. See live
          updates, export to PDF, and land your dream job with ease.
        </Paragraph>
        <div className='mt-8'>
          <Link to='/builder'>
            <Button type='primary' size='large'>
              Build My Resume Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
