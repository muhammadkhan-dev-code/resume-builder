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
    <div className='flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100 pb-96 md:pb-0'>
      <div className='flex flex-1 flex-col gap-3 overflow-hidden p-2 sm:p-3 md:gap-6 md:flex-row md:p-6'>
        {/* Form Panel - Desktop Only */}
        <div className='hidden flex-col overflow-hidden rounded-lg bg-white shadow-lg md:flex md:w-1/2'>
          <ResumeForm />
        </div>

        {/* Preview Panel */}
        <div className='flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-lg md:w-1/2 min-h-0'>
          <PreviewToolbar
            atsScore={atsScore}
            onSave={handleSaveDraft}
            onGenerate={handleGenerate}
            onExport={handlePrint}
          />
          <div className='flex-1 overflow-y-auto bg-gradient-to-b from-gray-100 to-gray-200 p-2 sm:p-3 print:bg-white'>
            <LivePreview />
          </div>
        </div>
      </div>

      {/* Mobile Form Modal */}
      <div className='block md:hidden'>
        <div className='fixed bottom-0 left-0 right-0 z-50 max-h-[70vh] min-h-56 overflow-y-auto bg-white p-3 shadow-2xl sm:p-4 rounded-t-2xl'>
          <div className='mb-2 text-center'>
            <div className='mx-auto h-1 w-12 rounded-full bg-gray-300'></div>
          </div>
          <ResumeForm />
        </div>
      </div>
    </div>
  )
}

export default Builder
