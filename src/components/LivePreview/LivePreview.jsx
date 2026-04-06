import { useResumeContext } from '../../context/useResumeContext'

const LivePreview = () => {
  const { resumeData } = useResumeContext()
  const {
    personalInfo,
    education,
    experience,
    skills,
    projects,
    certifications,
    languages,
    achievements
  } = resumeData

  const hasPreviewData =
    (experience && experience.length > 0) ||
    (education && education.length > 0) ||
    (projects && projects.length > 0) ||
    (skills && skills.length > 0) ||
    (certifications && certifications.length > 0) ||
    (languages && languages.length > 0) ||
    (achievements && achievements.length > 0)

  const fullName =
    [personalInfo?.firstName, personalInfo?.lastName]
      .filter(Boolean)
      .join(' ') || 'Your Name'

  const splitBullets = value => {
    if (!value) {
      return []
    }

    return value
      .split(/\n|\.|•/g)
      .map(line => line.trim())
      .filter(Boolean)
  }

  const sectionTitleClass =
    'mb-1 mt-1.5 text-[10px] font-bold uppercase tracking-wide text-black border-b border-gray-300 pb-0.5 sm:mb-1.5 sm:mt-2 sm:text-[11px]'

  const sectionDivider = (
    <div className='mb-1 h-px w-full bg-gradient-to-r from-gray-300 to-transparent'></div>
  )

  return (
    <div className='flex items-start justify-center overflow-y-auto p-1 sm:p-2 md:p-4 print:min-h-0 print:overflow-visible print:p-0'>
      <div className='box-border h-[297mm] w-full max-w-[210mm] overflow-hidden bg-white px-3 py-2 text-black shadow-lg transition-all duration-300 sm:px-6 sm:py-5 print:min-h-0 print:max-w-none print:shadow-none print:px-0 print:py-0'>
        <header className='mb-1 border-b-2 border-black pb-1 text-center sm:mb-1.5 sm:pb-2'>
          <h1 className='mb-0.5 text-lg font-bold text-black sm:text-2xl'>
            {fullName}
          </h1>
          <div className='flex flex-wrap items-center justify-center gap-1 text-[8px] text-black sm:gap-2 sm:text-[10px]'>
            {personalInfo?.email && (
              <span className='rounded bg-gray-100 px-1 py-0.5 sm:px-2'>
                {personalInfo.email}
              </span>
            )}
            {personalInfo?.phone && (
              <>
                <span className='hidden text-gray-400 sm:inline'>•</span>
                <span className='rounded bg-gray-100 px-1 py-0.5 sm:px-2'>
                  {personalInfo.phone}
                </span>
              </>
            )}
            {personalInfo?.linkedin && (
              <>
                <span className='hidden text-gray-400 sm:inline'>•</span>
                <span className='rounded bg-gray-100 px-1 py-0.5 sm:px-2'>
                  {personalInfo.linkedin.replace(/^https?:\/\//, '')}
                </span>
              </>
            )}
          </div>
          {personalInfo?.summary && (
            <p className='mt-1 text-[9px] leading-snug text-gray-800 sm:text-[10px] sm:leading-tight'>
              {personalInfo.summary.substring(0, 150)}...
            </p>
          )}
        </header>

        {experience && experience.length > 0 && (
          <section className='mb-2 sm:mb-3'>
            <h2 className={sectionTitleClass}>Experience</h2>
            {sectionDivider}
            {experience.map((item, index) => (
              <div key={`exp-${index}`} className='mb-1.5 sm:mb-2'>
                <div className='flex items-baseline justify-between gap-1 sm:gap-2'>
                  <h3 className='text-[10px] font-bold text-black sm:text-[11px]'>
                    {item.jobTitle || 'Position'}
                  </h3>
                  <span className='shrink-0 text-[8px] text-gray-600 font-semibold sm:text-[10px]'>
                    {item.startDate || 'Start'}
                    {item.endDate ? ` - ${item.endDate}` : ''}
                  </span>
                </div>
                <p className='text-[9px] font-semibold text-gray-700 sm:text-[10px]'>
                  {item.company}
                </p>
                <ul className='list-disc space-y-0.5 pl-4 text-[8px] text-gray-800 sm:text-[9px]'>
                  {splitBullets(item.description)
                    .slice(0, 2)
                    .map((line, idx) => (
                      <li
                        key={`exp-${index}-line-${idx}`}
                        className='leading-tight'
                      >
                        {line.length > 60
                          ? line.substring(0, 60) + '...'
                          : line}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {education && education.length > 0 && (
          <section className='mb-2 sm:mb-3'>
            <h2 className={sectionTitleClass}>Education</h2>
            {sectionDivider}
            {education.map((item, index) => (
              <div key={`edu-${index}`} className='mb-1 sm:mb-2'>
                <div className='flex items-baseline justify-between gap-1 sm:gap-2'>
                  <h3 className='text-[10px] font-bold text-black sm:text-[11px]'>
                    {item.degree}
                  </h3>
                  <span className='shrink-0 text-[8px] text-gray-600 sm:text-[9px]'>
                    {item.endDate}
                  </span>
                </div>
                <p className='text-[9px] text-gray-700 sm:text-[10px]'>
                  {item.institution}
                </p>
              </div>
            ))}
          </section>
        )}

        {projects && projects.length > 0 && (
          <section className='mb-2 sm:mb-3'>
            <h2 className={sectionTitleClass}>Projects</h2>
            {sectionDivider}
            {projects.map((item, index) => (
              <div key={`proj-${index}`} className='mb-1.5 sm:mb-2'>
                <h3 className='text-[10px] font-bold text-black sm:text-[11px]'>
                  {item.title}
                </h3>
                <ul className='list-disc space-y-0.5 pl-4 text-[8px] text-gray-800 sm:text-[9px]'>
                  {splitBullets(item.description)
                    .slice(0, 1)
                    .map((line, idx) => (
                      <li
                        key={`proj-${index}-line-${idx}`}
                        className='leading-tight'
                      >
                        {line.length > 60 ? line.substring(0, 60) : line}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {skills && skills.length > 0 && (
          <section className='mb-2 sm:mb-3'>
            <h2 className={sectionTitleClass}>Skills</h2>
            {sectionDivider}
            <div className='flex flex-wrap gap-1 text-[8px] sm:text-[9px]'>
              {skills
                .map(item => item.skillPath)
                .filter(Boolean)
                .slice(0, 10)
                .map((skill, index) => (
                  <span
                    key={`skill-${index}`}
                    className='rounded bg-gray-200 px-1.5 py-0.5 text-black'
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </section>
        )}

        {certifications && certifications.length > 0 && (
          <section className='mb-2 sm:mb-3'>
            <h2 className={sectionTitleClass}>Certifications</h2>
            {sectionDivider}
            {certifications.map((item, index) => (
              <div key={`cert-${index}`} className='mb-1'>
                <p className='text-[9px] font-semibold text-black sm:text-[10px]'>
                  {item.title}
                </p>
              </div>
            ))}
          </section>
        )}

        {languages && languages.length > 0 && (
          <section className='mb-2 sm:mb-3'>
            <h2 className={sectionTitleClass}>Languages</h2>
            {sectionDivider}
            <ul className='list-disc space-y-0.5 pl-4 text-[8px] text-gray-800 sm:text-[9px]'>
              {languages.map((item, index) => (
                <li key={`lang-${index}`} className='leading-tight'>
                  {item.language} - {item.proficiency}
                </li>
              ))}
            </ul>
          </section>
        )}

        {!hasPreviewData && (
          <div className='mt-8 rounded border-2 border-dashed border-gray-300 bg-gray-100 p-4 text-center sm:p-8'>
            <p className='text-[9px] text-black sm:text-[10px]'>
              Fill form & Save to preview
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LivePreview
