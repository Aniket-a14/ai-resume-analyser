# Resume Tuner

**Smart feedback for your dream job.**

Resume Tuner is an AI-powered application designed to help job seekers optimize their resumes for specific job descriptions. By analyzing your resume against a target job role, it provides an ATS (Applicant Tracking System) score, actionable feedback, and detailed suggestions to improve your chances of getting hired.

## Features

-   **AI-Powered Analysis**: Utilizes advanced AI to analyze your resume content in the context of the job you're applying for.
-   **ATS Scoring System**: Get a concrete score (0-100) representing how well your resume matches the job description.
-   **Job Description Matching**: Tailored feedback based on the specific requirements of the job title and description you provide.
-   **Visual Score Gauges**: Easy-to-understand visual indicators for your overall score and key metrics.
-   **History Tracking**: Automatically saves your past analyses so you can track your improvements over time.
-   **Privacy-Focused**: Built on Puter.js, ensuring your data is handled securely.

## Tech Stack

-   **Framework**: [React Router v7](https://reactrouter.com/)
-   **UI Library**: [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Backend/Cloud**: [Puter.js](https://puter.com/) (File System, Key-Value Store, AI)
-   **PDF Processing**: [PDF.js](https://mozilla.github.io/pdf.js/)
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)

## Getting Started

### Prerequisites

-   Node.js (v20 or later recommended)
-   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd ai-resume-analyser
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Create a production build:

```bash
npm run build
```

### Deployment

You can deploy this application to any platform that supports Node.js or Docker.

#### Docker

```bash
docker build -t resume-tuner .
docker run -p 3000:3000 resume-tuner
```

## Usage

1.  **Sign In**: Log in using your Puter account.
2.  **Upload**: Click "Upload Resume" or drag and drop your PDF resume.
3.  **Details**: Enter the Company Name, Job Title, and Job Description for the role you are targeting.
4.  **Analyze**: Click "Analyze Resume" and wait for the AI to process your document.
5.  **Review**: View your ATS score, summary, and detailed improvement tips.

---

Built with ❤️ using React Router and Puter.js.
