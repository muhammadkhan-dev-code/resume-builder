import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { useEffect } from 'react'
import { useResumeContext } from '../../context/useResumeContext'

const AchievementsForm = () => {
  const [form] = Form.useForm()
  const { resumeData, updateSection } = useResumeContext()

  useEffect(() => {
    if (resumeData.achievements && resumeData.achievements.length > 0) {
      form.setFieldsValue({ achievementsList: resumeData.achievements })
    }
  }, [resumeData.achievements, form])

  const onFinish = values => {
    updateSection('achievements', values.achievementsList || [])
  }

  return (
    <div>
      <h3>Achievements & Awards</h3>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{ achievementsList: resumeData.achievements || [{}] }}
      >
        <Form.List name='achievementsList'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className='mb-2 flex gap-2'>
                  <Form.Item
                    {...restField}
                    name={[name, 'achievement']}
                    className='mb-0 flex-1'
                    rules={[{ required: true, message: 'Missing achievement' }]}
                  >
                    <Input.TextArea
                      autoSize
                      placeholder='Employee of the Year 2022'
                    />
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
                  Add Achievement
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Save Achievements
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AchievementsForm
