import { useMemo } from 'react'

export const useAtsScore = (resumeData) => {
  return useMemo(() => {
    const { personalInfo } = resumeData
    let score = 40

    // Personal info points
    if (personalInfo?.firstName && personalInfo?.lastName) score += 5
    if (personalInfo?.email) score += 5
    if (personalInfo?.phone) score += 5
    if (personalInfo?.summary) score += 5

    // Content sections points
    score += Math.min(resumeData.education?.length || 0, 4) * 10
    score += Math.min(resumeData.experience?.length || 0, 4) * 12
    score += Math.min(resumeData.projects?.length || 0, 3) * 8
    score += Math.min(resumeData.skills?.length || 0, 5) * 3
    score += Math.min(resumeData.certifications?.length || 0, 2) * 5
    score += Math.min(resumeData.languages?.length || 0, 2) * 3
    score += Math.min(resumeData.achievements?.length || 0, 2) * 4

    return Math.min(score, 100)
  }, [resumeData])
}
