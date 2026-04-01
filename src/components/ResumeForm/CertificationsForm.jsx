import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row } from 'antd'
import { useEffect } from 'react'
import { useResumeContext } from '../../context/useResumeContext'

const CertificationsForm = () => {
  const [form] = Form.useForm()
  const { resumeData, updateSection } = useResumeContext()

  useEffect(() => {
    if (resumeData.certifications && resumeData.certifications.length > 0) {
      form.setFieldsValue({ certificationsList: resumeData.certifications })
    }
  }, [resumeData.certifications, form])

  const onFinish = values => {
    updateSection('certifications', values.certificationsList || [])
  }

  return (
    <div>
      <h3>Certifications</h3>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{
          certificationsList: resumeData.certifications || [{}]
        }}
      >
        <Form.List name='certificationsList'>
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
                        name={[name, 'title']}
                        label='Certification Name'
                        rules={[
                          {
                            required: true,
                            message: 'Missing certification name'
                          }
                        ]}
                      >
                        <Input placeholder='AWS Certified Solutions Architect' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'issuer']}
                        label='Issuing Organization'
                        rules={[
                          {
                            required: true,
                            message: 'Missing issuing organization'
                          }
                        ]}
                      >
                        <Input placeholder='Amazon Web Services' />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'issueDate']}
                        label='Issue Date'
                      >
                        <Input placeholder='Jan 2023' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'credentialUrl']}
                        label='Credential URL'
                      >
                        <Input placeholder='https://...' />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Button
                    type='dashed'
                    danger
                    onClick={() => remove(name)}
                    icon={<MinusCircleOutlined />}
                  >
                    Remove Certification
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
                  Add Certification
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Save Certifications
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CertificationsForm
