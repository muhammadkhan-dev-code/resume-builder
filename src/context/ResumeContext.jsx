import { useState } from 'react'
import { ResumeContext } from './ResumeContextObject'

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: 'Muhammad',
      lastName: 'Khan',
      email: 'muhammad.khan@example.com',
      phone: '+92 300 123 4567',
      linkedin: '',
      summary:
        ''
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    achievements: []
  })
  const [isGenerated, setIsGenerated] = useState(false)

  const updateSection = (section, data) => {
    setResumeData(prevData => ({
      ...prevData,
      [section]: data
    }))
  }

  const generateResume = () => {
    setIsGenerated(true)
  }

  const resetGenerated = () => {
    setIsGenerated(false)
  }

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateSection,
        isGenerated,
        generateResume,
        resetGenerated
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}
