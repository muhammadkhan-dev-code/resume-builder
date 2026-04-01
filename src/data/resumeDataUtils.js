/**
 * Resume Data Utility
 * Helper functions to load and manage resume data
 */

/**
 * Export resume data as JSON
 */
export const exportResumeAsJSON = (resumeData) => {
  const element = document.createElement('a')
  const file = new Blob([JSON.stringify(resumeData, null, 2)], {
    type: 'application/json'
  })
  element.href = URL.createObjectURL(file)
  element.download = `resume-${Date.now()}.json`
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

/**
 * Import resume data from JSON file
 */
export const importResumeFromJSON = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result)
        resolve(data)
      } catch (error) {
        reject(new Error('Invalid JSON file'))
      }
    }
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsText(file)
  })
}
