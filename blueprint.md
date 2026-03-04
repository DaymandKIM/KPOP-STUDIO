# Blueprint: K-pop Studio Lookalike (Demon Hunter Edition)

## 1. Overview
K-pop Studio Lookalike: Demon Hunter Edition is an interactive, multi-lingual web application that uses AI to find the K-pop star that most closely resembles the user's uploaded or captured photo. The application features a "K-POP Demon Hunters" aesthetic, framing the search as a "Hunter Identification" process, and includes an "Idol Encyclopedia" to browse the roster of active hunters.

## 2. Core Features & Capabilities
*   **Hunter Identification (AI Analysis):** Analyzes facial features using a pre-trained Teachable Machine model to identify the user's K-pop "hunter" counterpart.
*   **Idol Encyclopedia (Hunter Database):** A searchable, filterable roster of K-pop idols, categorized by their "Hunter Class" (e.g., Vanguard, Scout, Striker) and "Element".
*   **Multilingual Support (i18n):** EN and KO support for all interface elements.
*   **Responsive HUD-style Design:** A mobile-first, high-tech interface inspired by cyberpunk and demon hunter aesthetics.

## 3. Technology Stack
*   **Frontend Framework:** React 18, TypeScript, Vite
*   **Styling:** Tailwind CSS + Custom CSS for HUD effects
*   **AI/ML Integration:** `@teachablemachine/image`, `@tensorflow/tfjs`
*   **Internationalization:** `i18next`, `react-i18next`
*   **Icons:** `lucide-react` (for tech/hunter icons)

## 4. UI/UX Design Guidelines (K-POP Demon Hunters Theme)
*   **Theme:** Dark mode dominant (deep blacks, slate grays).
*   **Accents:** Cyber-neon Fuchsia and Cyan.
*   **Visual Elements:**
    *   **HUD Overlays:** Use of crosshairs, scanlines, and tech-wear patterns.
    *   **Sharp Borders:** Moving away from soft rounded corners to more angular, "armored" looks.
    *   **Typography:** Monospaced fonts for technical data (e.g., similarity scores) and bold, aggressive sans-serif for headings.
    *   **Animations:** Glitch effects on hover, "terminal" typing effects, and high-tech scanning animations.

## 5. Development Plan & Steps (Current)
1.  **Redesign Theme (Demon Hunter Aesthetic):**
    *   Update `index.css` with HUD-specific styles (scanlines, tech borders, monospaced fonts).
    *   Refine `App.tsx` layout to use a navigation bar for switching between "Identification" and "Encyclopedia".
2.  **Implement Idol Encyclopedia:**
    *   Create a data structure for Idols (Name, Group, Class, Element, Description).
    *   Build `IdolEncyclopedia` component with search and filter capabilities.
3.  **Update Translations:**
    *   Add "Demon Hunter" themed terminology to `i18n.ts`.
4.  **Refine AI Workflow:**
    *   Re-frame the "analyzing" state as "Targeting" or "Identifying".
    *   Update result display to show "Hunter Match" details.
5.  **Final Polish:**
    *   Add subtle animations and sound-like visual cues (visual only).
