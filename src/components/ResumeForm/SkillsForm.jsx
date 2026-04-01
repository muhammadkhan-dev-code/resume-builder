import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { useEffect } from 'react'
import { useResumeContext } from '../../context/useResumeContext'

const SkillsForm = () => {
  const [form] = Form.useForm()
  const { resumeData, updateSection } = useResumeContext()

  useEffect(() => {
    if (resumeData.skills && resumeData.skills.length > 0) {
      form.setFieldsValue({ skillsList: resumeData.skills })
    }
  }, [resumeData.skills, form])

  const onFinish = values => {
    updateSection('skills', values.skillsList || [])
  }

  return (
    <div>
      <h3>Skills</h3>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{ skillsList: resumeData.skills || [{}] }}
      >
        <Form.List name='skillsList'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className='mb-2 flex gap-2'>
                  <Form.Item
                    {...restField}
                    name={[name, 'skillPath']}
                    className='mb-0 flex-1'
                    rules={[{ required: true, message: 'Missing skill' }]}
                  >
                    <Input placeholder='e.g. React.js, Node.js, Project Management' />
                  </Form.Item>
                  <Button
                    type='text'
                    danger
                    onClick={() => remove(name)}
                    icon={<MinusCircleOutlined />}
                  />
                </div>
              ))}
              <Form.Item className='mt-4'>
                <Button
                  type='dashed'
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Skill
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Save Skills
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SkillsForm
