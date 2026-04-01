import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row } from 'antd'
import { useEffect } from 'react'
import { useResumeContext } from '../../context/useResumeContext'

const EducationForm = () => {
  const [form] = Form.useForm()
  const { resumeData, updateSection } = useResumeContext()

  useEffect(() => {
    if (resumeData.education && resumeData.education.length > 0) {
      form.setFieldsValue({ educationList: resumeData.education })
    }
  }, [resumeData.education, form])

  const onFinish = values => {
    updateSection('education', values.educationList || [])
  }

  return (
    <div>
      <h3>Education</h3>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{ educationList: resumeData.education || [{}] }}
      >
        <Form.List name='educationList'>
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
                        name={[name, 'degree']}
                        label='Degree/Course'
                        rules={[
                          {
                            required: true,
                            message: 'Missing degree or course name'
                          }
                        ]}
                      >
                        <Input placeholder='Bachelor of Science in Computer Science' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'institution']}
                        label='Institution'
                        rules={[
                          {
                            required: true,
                            message: 'Missing institution name'
                          }
                        ]}
                      >
                        <Input placeholder='University Name' />
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
                        <Input placeholder='YYYY-MM' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'endDate']}
                        label='End Date (or Expected)'
                      >
                        <Input placeholder='YYYY-MM' />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    {...restField}
                    name={[name, 'score']}
                    label='Grade/GPA'
                  >
                    <Input placeholder='3.8/4.0 or 85%' />
                  </Form.Item>

                  <Button
                    type='dashed'
                    danger
                    onClick={() => remove(name)}
                    icon={<MinusCircleOutlined />}
                  >
                    Remove Education
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
                  Add Education
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Save Education
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EducationForm
