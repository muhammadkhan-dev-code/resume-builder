import {
  DownloadOutlined,
  RobotOutlined,
  SaveOutlined
} from '@ant-design/icons'
import { Button, Tooltip } from 'antd'

const ActionButtons = ({ onSave, onGenerate, onExport }) => {
  return (
    <div className='flex flex-wrap items-center gap-1 sm:gap-2 justify-end'>
      <Tooltip title='AI Help (Soon)'>
        <Button
          icon={<RobotOutlined />}
          size='small'
          onClick={() => alert('AI Features coming soon!')}
          className='rounded-md text-xs sm:text-sm'
        />
      </Tooltip>
      <Tooltip title='Save Draft'>
        <Button
          icon={<SaveOutlined />}
          size='small'
          onClick={onSave}
          className='rounded-md text-xs sm:text-sm'
        />
      </Tooltip>
      <Tooltip title='Generate'>
        <Button
          size='small'
          onClick={onGenerate}
          className='rounded-md text-xs sm:text-sm px-2'
        >
          <span className='hidden sm:inline'>Gen</span>
          <span className='sm:hidden'>G</span>
        </Button>
      </Tooltip>
      <Tooltip title='Export PDF'>
        <Button
          type='primary'
          icon={<DownloadOutlined />}
          size='small'
          onClick={onExport}
          className='rounded-md bg-blue-600 text-xs sm:text-sm'
        >
          <span className='hidden sm:inline'>PDF</span>
        </Button>
      </Tooltip>
    </div>
  )
}

export default ActionButtons
