import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row } from 'antd'
import { useEffect } from 'react'
import { useResumeContext } from '../../context/useResumeContext'

const ExperienceForm = () => {
  const [form] = Form.useForm()
  const { resumeData, updateSection } = useResumeContext()

  useEffect(() => {
    if (resumeData.experience && resumeData.experience.length > 0) {
      form.setFieldsValue({ experienceList: resumeData.experience })
    }
  }, [resumeData.experience, form])

  const onFinish = values => {
    updateSection('experience', values.experienceList || [])
  }

  return (
    <div>
      <h3>Work Experience</h3>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{ experienceList: resumeData.experience || [{}] }}
      >
        <Form.List name='experienceList'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div
                  key={key}
                  className='mb-4 rounded-lg border border-zinc-200 p-4'
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'jobTitle']}
                        label='Job Title'
                        rules={[
                          { required: true, message: 'Missing job title' }
                        ]}
                      >
                        <Input placeholder='Software Engineer' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'company']}
                        label='Company'
                        rules={[
                          { required: true, message: 'Missing company name' }
                        ]}
                      >
                        <Input placeholder='Acme Corp' />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'startDate']}
                        label='Start Date'
                      >
                        <Input placeholder='Jan 2020' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'endDate']}
                        label='End Date'
                      >
                        <Input placeholder='Present' />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    label='Description'
                    rules={[
                      {
                        required: true,
                        message: 'Please describe your responsibilities'
                      }
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder='Describe your achievements and responsibilities'
                    />
                  </Form.Item>

                  <Button
                    type='dashed'
                    danger
                    onClick={() => remove(name)}
                    icon={<MinusCircleOutlined />}
                  >
                    Remove Experience
                  </Button>
                </div>
              ))}
              <Form.Item>
                <Button
                  type='dashed'
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Experience
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Save Experience
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ExperienceForm
