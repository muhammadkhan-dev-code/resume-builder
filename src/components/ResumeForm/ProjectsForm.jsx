import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row } from 'antd'
import { useEffect } from 'react'
import { useResumeContext } from '../../context/useResumeContext'

const ProjectsForm = () => {
  const [form] = Form.useForm()
  const { resumeData, updateSection } = useResumeContext()

  useEffect(() => {
    if (resumeData.projects && resumeData.projects.length > 0) {
      form.setFieldsValue({ projectsList: resumeData.projects })
    }
  }, [resumeData.projects, form])

  const onFinish = values => {
    updateSection('projects', values.projectsList || [])
  }

  return (
    <div>
      <h3>Projects</h3>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{ projectsList: resumeData.projects || [{}] }}
      >
        <Form.List name='projectsList'>
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
                        label='Project Title'
                        rules={[
                          { required: true, message: 'Missing project title' }
                        ]}
                      >
                        <Input placeholder='Portfolio Website' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'link']}
                        label='Project Link'
                        rules={[{ type: 'url', message: 'Valid URL required' }]}
                      >
                        <Input placeholder='https://github.com/johndoe/portfolio' />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    {...restField}
                    name={[name, 'techStack']}
                    label='Tech Stack'
                    rules={[
                      {
                        required: true,
                        message: 'Please specify the tech stack used'
                      }
                    ]}
                  >
                    <Input placeholder='React, Node.js, MongoDB' />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    label='Description'
                    rules={[
                      { required: true, message: 'Please describe the project' }
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder='Describe the project objective and your contributions'
                    />
                  </Form.Item>

                  <Button
                    type='dashed'
                    danger
                    onClick={() => remove(name)}
                    icon={<MinusCircleOutlined />}
                  >
                    Remove Project
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
                  Add Project
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Save Projects
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ProjectsForm
