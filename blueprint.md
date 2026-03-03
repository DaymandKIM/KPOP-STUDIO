# Blueprint: K-pop Studio Lookalike

## 1. Overview
K-pop Studio Lookalike is an interactive, multi-lingual web application that uses AI (Google Teachable Machine) to find the K-pop star that most closely resembles the user's uploaded or captured photo. The application aims for an energetic, dark-mode, neon-accented aesthetic resembling a modern K-pop stage or music video.

## 2. Core Features & Capabilities
*   **Image Input:** Users can upload an image from their device or capture a photo using their web camera.
*   **AI Analysis:** Utilizes a pre-trained Teachable Machine Image Model (TensorFlow.js) directly in the browser to analyze facial features.
*   **Multilingual Support (i18n):** Offers the app interface in multiple languages (English as default, plus Korean) using `react-i18next`.
*   **Result Display:** Shows the predicted K-pop star, the confidence percentage (similarity score), and a visual comparison (user photo vs. star photo).
*   **Responsive Design:** Fully optimized for mobile and desktop screens, prioritizing a mobile-first approach.

## 3. Technology Stack
*   **Frontend Framework:** React 18, TypeScript, Vite
*   **Styling:** Tailwind CSS (for rapid, utility-first styling and dark mode support)
*   **AI/ML Integration:** `@teachablemachine/image`, `@tensorflow/tfjs`
*   **Internationalization:** `i18next`, `react-i18next`
*   **Icons:** `lucide-react`

## 4. UI/UX Design Guidelines
*   **Theme:** Dark mode dominant (deep blacks, dark grays).
*   **Accents:** Vibrant neon colors (Electric Blue, Hot Pink, Cyber Purple) to represent the "K-pop" vibe.
*   **Typography:** Modern, sans-serif fonts (e.g., Inter or Roboto). Large, bold headings.
*   **Effects:** Use of `backdrop-blur` (glassmorphism) for cards, soft neon shadows for interactive elements (buttons, upload areas).
*   **Animations:** Smooth transitions for state changes (uploading -> analyzing -> result). A prominent, visually engaging loading animation during the AI analysis phase.

## 5. Development Plan & Steps (Current)
1.  **Project Initialization & Dependencies:**
    *   Set up React/Vite/TypeScript environment.
    *   Install necessary packages: `tailwindcss`, `postcss`, `autoprefixer`, `@teachablemachine/image`, `@tensorflow/tfjs`, `react-i18next`, `i18next`, `lucide-react`.
2.  **Configuration:**
    *   Configure Tailwind CSS (`tailwind.config.js`, `index.css`).
    *   Set up `i18n` translations (EN, KO).
3.  **Teachable Machine Integration:**
    *   Create a service or React hook to load the Teachable Machine model from a URL.
    *   Implement the `predict` function that takes an image element (or video frame) and returns probabilities.
    *   *(Note: Initially, a placeholder model URL or mock data will be used until the user provides their specific trained model URL).*
4.  **UI Component Development:**
    *   `Layout`: Header with Logo and Language Selector.
    *   `HomeView`: Hero section, instructions, Image Upload/Camera Capture component (Drag & Drop, Camera access).
    *   `AnalyzingView`: Neon/Cyberpunk style loading animation.
    *   `ResultView`: Display user photo, matched K-pop star info (Name, Group, Similarity %), and "Try Again" action.
5.  **State Management:**
    *   Manage application state (idle, capturing, analyzing, result, error) using React `useState` and `useEffect`.
6.  **Refinement:**
    *   Apply final styling touches, ensure mobile responsiveness, and test across different browsers.
