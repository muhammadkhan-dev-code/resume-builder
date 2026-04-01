import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'
import { useEffect } from 'react'
import { useResumeContext } from '../../context/useResumeContext'

const { Option } = Select

const LanguagesForm = () => {
  const [form] = Form.useForm()
  const { resumeData, updateSection } = useResumeContext()

  useEffect(() => {
    if (resumeData.languages && resumeData.languages.length > 0) {
      form.setFieldsValue({ languagesList: resumeData.languages })
    }
  }, [resumeData.languages, form])

  const onFinish = values => {
    updateSection('languages', values.languagesList || [])
  }

  return (
    <div>
      <h3>Languages</h3>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{ languagesList: resumeData.languages || [{}] }}
      >
        <Form.List name='languagesList'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className='mb-2 flex items-start gap-2'>
                  <Form.Item
                    {...restField}
                    name={[name, 'language']}
                    className='mb-0 flex-1'
                    rules={[{ required: true, message: 'Missing language' }]}
                  >
                    <Input placeholder='English' />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'proficiency']}
                    className='mb-0 flex-1'
                    rules={[{ required: true, message: 'Missing proficiency' }]}
                  >
                    <Select placeholder='Select Proficiency'>
                      <Option value='Native'>Native</Option>
                      <Option value='Fluent'>Fluent</Option>
                      <Option value='Proficient'>Proficient</Option>
                      <Option value='Intermediate'>Intermediate</Option>
                      <Option value='Basic'>Basic</Option>
                    </Select>
                  </Form.Item>
                  <Button
                    type='text'
                    danger
                    onClick={() => remove(name)}
                    icon={<MinusCircleOutlined />}
                    className='mt-1'
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
                  Add Language
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Save Languages
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LanguagesForm
