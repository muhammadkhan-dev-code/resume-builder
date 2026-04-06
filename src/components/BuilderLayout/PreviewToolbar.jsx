import ActionButtons from './ActionButtons'
import TemplateSelector from './TemplateSelector'

const PreviewToolbar = ({ atsScore, onSave, onGenerate, onExport }) => {
  return (
    <div className='border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 p-2 sm:p-3 md:p-4'>
      <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
        <TemplateSelector atsScore={atsScore} />
        <ActionButtons
          onSave={onSave}
          onGenerate={onGenerate}
          onExport={onExport}
        />
      </div>
    </div>
  )
}

export default PreviewToolbar
