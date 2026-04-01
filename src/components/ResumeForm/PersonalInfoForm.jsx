import { Button, Col, Form, Input, Row } from 'antd'
import { useEffect } from 'react'
import { useResumeContext } from '../../context/useResumeContext'

const PersonalInfoForm = () => {
  const [form] = Form.useForm()
  const { resumeData, updateSection } = useResumeContext()

  // Load existing data
  useEffect(() => {
    if (resumeData.personalInfo) {
      form.setFieldsValue(resumeData.personalInfo)
    }
  }, [resumeData.personalInfo, form])

  const onFinish = values => {
    updateSection('personalInfo', values)
  }
  const onValuesChange = (changedValues, allValues) => {
    updateSection('personalInfo', allValues)
  }

  return (
    <div>
      <h3>Personal Information</h3>
      <Form
        form={form}
        layout='vertical'
        onValuesChange={onValuesChange}
        onFinish={onFinish}
        initialValues={resumeData.personalInfo}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name='firstName'
              label='First Name'
              rules={[
                { required: true, message: 'Please enter your first name' }
              ]}
            >
              <Input placeholder='Muhammad' />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='lastName'
              label='Last Name'
              rules={[
                { required: true, message: 'Please enter your last name' }
              ]}
            >
              <Input placeholder='Khan' />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name='email'
              label='Email'
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email address' }
              ]}
            >
              <Input placeholder='muhammad.khan@example.com' />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name='phone'
              label='Phone Number'
              rules={[
                { required: true, message: 'Please enter your phone number' }
              ]}
            >
              <Input placeholder='+1 234 567 8900' />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name='linkedin'
          label='LinkedIn URL'
          rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
        >
          <Input placeholder='https://linkedin.com/in/muhammadkhan' />
        </Form.Item>

        <Form.Item
          name='summary'
          label='Professional Summary'
          rules={[{ required: true, message: 'Please enter a summary' }]}
        >
          <Input.TextArea
            rows={4}
            placeholder='Briefly describe your professional background'
          />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Save Personal Info
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default PersonalInfoForm
