import { useContext } from 'react'
import { ResumeContext } from './ResumeContextObject'

export const useResumeContext = () => {
  return useContext(ResumeContext)
}
