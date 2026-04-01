import { Button, Tooltip } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setTemplate } from '../../redux/themeSlice'

const TemplateSelector = ({ atsScore }) => {
  const templateId = useSelector(state => state.theme.templateId)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-wrap items-center gap-2'>
      <span className='text-xs font-semibold text-slate-700'>Template:</span>
      <Button
        size='small'
        type={templateId === 'ats-minimal' ? 'primary' : 'default'}
        onClick={() => dispatch(setTemplate('ats-minimal'))}
        className='rounded-md text-xs'
      >
        Minimal
      </Button>
      <Button
        size='small'
        type={templateId === 'modern' ? 'primary' : 'default'}
        onClick={() => dispatch(setTemplate('modern'))}
        className='rounded-md text-xs'
      >
        Modern
      </Button>

      <Tooltip title='Estimated ATS Score'>
        <span
          className={`ml-1 inline-flex rounded-full px-2 py-0.5 text-xs font-semibold text-white transition-all ${
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
