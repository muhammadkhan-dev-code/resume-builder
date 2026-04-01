import PreviewToolbar from '../components/BuilderLayout/PreviewToolbar'
import LivePreview from '../components/LivePreview/LivePreview'
import ResumeForm from '../components/ResumeForm/ResumeForm'
import { useResumeContext } from '../context/useResumeContext'
import { useAtsScore } from '../hooks/useAtsScore'

const Builder = () => {
  const { resumeData, generateResume } = useResumeContext()
  const atsScore = useAtsScore(resumeData)

  const handlePrint = () => window.print()
  const handleSaveDraft = () => alert('Saved in browser memory.')
  const handleGenerate = () => generateResume()

  return (
    <div className='flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='flex flex-1 gap-4 overflow-hidden p-4 lg:gap-6 lg:p-6'>
        {/* Form Panel */}
        <div className='hidden flex-col overflow-hidden rounded-lg bg-white shadow-lg lg:flex lg:w-1/2'>
          <ResumeForm />
        </div>

        {/* Preview Panel */}
        <div className='flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-lg lg:w-1/2'>
          <PreviewToolbar
            atsScore={atsScore}
            onSave={handleSaveDraft}
            onGenerate={handleGenerate}
            onExport={handlePrint}
          />
          <div className='flex-1 overflow-y-auto bg-gradient-to-b from-gray-100 to-gray-200 p-3 print:bg-white'>
            <LivePreview />
          </div>
        </div>
      </div>

      {/* Mobile Form Modal */}
      <div className='block lg:hidden'>
        <div className='fixed bottom-0 left-0 right-0 z-50 max-h-96 overflow-y-auto bg-white p-4 shadow-2xl'>
          <ResumeForm />
        </div>
      </div>
    </div>
  )
}

export default Builder
