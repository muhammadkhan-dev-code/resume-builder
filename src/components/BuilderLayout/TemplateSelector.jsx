import { Button, Tooltip } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setTemplate } from '../../redux/themeSlice'

const TemplateSelector = ({ atsScore }) => {
  const templateId = useSelector(state => state.theme.templateId)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-wrap items-center gap-1 sm:gap-2 w-full md:w-auto'>
      <span className='text-xs font-semibold text-slate-700 hidden sm:inline'>
        Template:
      </span>
      <Button
        size='small'
        type={templateId === 'ats-minimal' ? 'primary' : 'default'}
        onClick={() => dispatch(setTemplate('ats-minimal'))}
        className='rounded-md text-xs flex-1 sm:flex-none'
      >
        <span className='hidden sm:inline'>Minimal</span>
        <span className='sm:hidden'>Min</span>
      </Button>
      <Button
        size='small'
        type={templateId === 'modern' ? 'primary' : 'default'}
        onClick={() => dispatch(setTemplate('modern'))}
        className='rounded-md text-xs flex-1 sm:flex-none'
      >
        Modern
      </Button>

      <Tooltip title='Estimated ATS Score'>
        <span
          className={`ml-auto sm:ml-1 inline-flex rounded-full px-2 py-0.5 text-xs font-semibold text-white transition-all ${
            atsScore > 70 ? 'bg-emerald-500' : 'bg-amber-500'
          }`}
        >
          {atsScore}%
        </span>
      </Tooltip>
    </div>
  )
}

export default TemplateSelector
