import { Tabs } from 'antd'
import AchievementsForm from './AchievementsForm'
import CertificationsForm from './CertificationsForm'
import EducationForm from './EducationForm'
import ExperienceForm from './ExperienceForm'
import LanguagesForm from './LanguagesForm'
import PersonalInfoForm from './PersonalInfoForm'
import ProjectsForm from './ProjectsForm'
import SkillsForm from './SkillsForm'

const { TabPane } = Tabs

const ResumeForm = () => {
  const tabs = [
    { key: '1', tab: '👤 Personal', component: PersonalInfoForm },
    { key: '2', tab: '🎓 Education', component: EducationForm },
    { key: '3', tab: '💼 Work', component: ExperienceForm },
    { key: '4', tab: '🛠 Skills', component: SkillsForm },
    { key: '5', tab: '📁 Projects', component: ProjectsForm },
    { key: '6', tab: '📜 Certs', component: CertificationsForm },
    { key: '7', tab: '🌐 Languages', component: LanguagesForm },
    { key: '8', tab: '🏆 Awards', component: AchievementsForm }
  ]

  return (
    <div className='flex h-full flex-col bg-gradient-to-b from-blue-50 to-indigo-50'>
      <div className='border-b border-blue-200 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white sm:px-6 sm:py-4'>
        <h2 className='text-lg font-bold sm:text-xl'>Build Resume</h2>
        <p className='text-xs text-blue-100 sm:text-sm'>
          Complete each section
        </p>
      </div>
      <div className='flex-1 overflow-hidden'>
        <Tabs
          defaultActiveKey='1'
          tabPosition='left'
          className='h-full [&_.ant-tabs-tab]:!px-3 [&_.ant-tabs-tab]:!py-2 [&_.ant-tabs-tab]:text-xs sm:[&_.ant-tabs-tab]:text-sm'
        >
          {tabs.map(({ key, tab, component: Component }) => (
            <TabPane tab={tab} key={key}>
              <div className='overflow-y-auto pr-2 sm:pr-4'>
                <Component />
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default ResumeForm
