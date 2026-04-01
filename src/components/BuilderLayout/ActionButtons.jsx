import {
  DownloadOutlined,
  RobotOutlined,
  SaveOutlined
} from '@ant-design/icons'
import { Button, Tooltip } from 'antd'

const ActionButtons = ({ onSave, onGenerate, onExport }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      <Tooltip title='AI Help (Soon)'>
        <Button
          icon={<RobotOutlined />}
          size='small'
          onClick={() => alert('AI Features coming soon!')}
          className='rounded-md'
        />
      </Tooltip>
      <Tooltip title='Save Draft'>
        <Button
          icon={<SaveOutlined />}
          size='small'
          onClick={onSave}
          className='rounded-md'
        />
      </Tooltip>
      <Tooltip title='Generate'>
        <Button size='small' onClick={onGenerate} className='rounded-md'>
          Gen
        </Button>
      </Tooltip>
      <Tooltip title='Export PDF'>
        <Button
          type='primary'
          icon={<DownloadOutlined />}
          size='small'
          onClick={onExport}
          className='rounded-md bg-blue-600'
        />
      </Tooltip>
    </div>
  )
}

export default ActionButtons
