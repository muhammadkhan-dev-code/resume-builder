# Resume Builder

A modern, professional resume builder application built with React and Vite. Create, customize, and generate ATS-optimized resumes with real-time preview and instant PDF export.

## ✨ Features

- **Live Preview**: Real-time resume preview as you type
- **ATS Optimization**: Built-in ATS score calculator (85+ easily achievable)
- **Single-Page A4 Layout**: Professional resume fits perfectly on one page
- **Multiple Templates**: Choose between ATS-minimal and modern resume templates
- **Dark/Light Mode**: Full theme support with persistent storage
- **Instant Export**: Generate and download resume as PDF
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **No Data Loss**: All form data auto-saves to your browser's local storage
- **Professional Styling**: Modern, clean design built with Tailwind CSS

## 🛠 Tech Stack

- **Frontend Framework**: React 19.2.4 + Vite 8.0.3 (Fast Refresh for instant feedback)
- **Styling**: Tailwind CSS 4.2.2 (utility-first CSS framework)
- **State Management**: Redux Toolkit + React Redux (global theme state)
- **Form Handling**: Ant Design 6.3.4 (UI components and form validation)
- **Routing**: React Router v7 (SPA navigation)
- **Data Management**: React Context API (resume state with Fast Refresh optimization)

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd resume-builder
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will open at `http://localhost:5173/`

## 📖 How to Use

### Building Your Resume

1. **Navigate to Builder**: Click "Build Now" on the landing page
2. **Fill Out Sections**: Complete any of these sections in the left panel:
   - Personal Information (name, email, phone, etc.)
   - Professional Summary
   - Work Experience
   - Education
   - Technical Skills
   - Projects
   - Certifications
   - Languages
   - Awards & Recognition

3. **Live Preview**: Your resume appears in real-time on the right side
4. **Switch Templates**: Use the template selector to choose ATS-minimal or modern layout
5. **View ATS Score**: See your resume's ATS compatibility score (green = 85+, amber = <85)
6. **Generate & Export**: Click "Generate & Export" to download as PDF

### Tips for Better ATS Scores

- **Personal Info** (20 pts): Include name, email, phone, and summary
- **Education** (40 pts max): Add up to 4 degree entries (10 pts each)
- **Experience** (48 pts max): Add up to 4 job entries (12 pts each)
- **Projects** (24 pts max): Add up to 3 project entries (8 pts each)
- **Skills** (15 pts max): Add up to 5 technical skills (3 pts each)
- **Bonuses**: Certifications, languages, and achievements add extra points

### ATS Scoring Breakdown

```
Base Score: 40 points
+ Personal Info: name (5) + email (5) + phone (5) + summary (5) = 20 points
+ Education: 10 points per entry (max 4) = 40 points
+ Experience: 12 points per entry (max 4) = 48 points
+ Projects: 8 points per entry (max 3) = 24 points
+ Skills: 3 points per entry (max 5) = 15 points
+ Certifications: 5 points per entry (max 2) = 10 points
+ Languages: 3 points per entry (max 2) = 6 points
+ Achievements: 4 points per entry (max 2) = 8 points

Total Possible: 100+ points (easily achievable with moderate content)
```

## 🎨 Features Highlights

### Professional Layout

- Centered header with contact information
- Clean section titles with divider lines
- Optimized spacing and typography for readability
- White background for printing compatibility

### Single-Page Design

- Automatically compresses content to fit on one A4 page
- Perfect for printing or PDF export
- No content spillover

### Fast Development

- Hot Module Replacement (HMR) for instant feedback
- No need to refresh the page after changes
- Smooth development experience with Vite

### Data Persistence

- Auto-save form data to localStorage
- Your resume persists across browser sessions
- Export and save as PDF anytime

## 📦 Build & Deployment

### Development

```bash
npm run dev
```

### Linting

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

Built files are output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🏗 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx                 # Top navigation
│   ├── LivePreview/               # Resume preview component
│   │   ├── LivePreview.jsx
│   │   └── LivePreview.css
│   └── ResumeForm/                # Form sections
│       ├── PersonalInfoForm.jsx
│       ├── EducationForm.jsx
│       ├── ExperienceForm.jsx
│       ├── ProjectsForm.jsx
│       ├── SkillsForm.jsx
│       ├── CertificationsForm.jsx
│       ├── LanguagesForm.jsx
│       └── AchievementsForm.jsx
├── pages/
│   ├── Builder.jsx                # Main builder page (form + preview)
│   └── LandingPage.jsx            # Welcome page
├── context/
│   ├── ResumeContext.jsx          # Provider component
│   ├── ResumeContextObject.jsx    # Context object
│   └── useResumeContext.jsx       # Custom hook
├── redux/
│   ├── store.js                   # Redux store setup
│   └── themeSlice.js              # Dark/light mode state
├── App.jsx                        # Root component
├── main.jsx                       # Entry point
└── index.css                      # Tailwind imports
```

## 🐛 Troubleshooting

### Resume doesn't fit on one page

- Remove some content (bullets, skills, certifications)
- The layout is optimized for ~3-4 entries per major section

### Data not persisting

- Check browser's localStorage settings
- Ensure cookies/storage not blocked
- Try a different browser

### PDF export issues

- Use Chrome/Edge for best PDF quality
- Ensure JavaScript is enabled
- Try the print preview first (Ctrl+P)

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📄 License

[Add your license here]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 📧 Support

For support, email [your-email] or open an issue in the repository.

---

**Happy Resume Building! 🎉**
