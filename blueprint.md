# Blueprint: K-pop Studio Lookalike

## 1. Overview
K-pop Studio Lookalike is an interactive, multi-lingual web application that uses AI to find the K-pop star that most closely resembles the user's uploaded or captured photo. The application allows fans to discover their idol counterparts and explore a detailed encyclopedia of K-pop groups and members.

## 2. Core Features & Capabilities
*   **Idol Identification (AI Analysis):** Analyzes facial features using a high-precision face recognition engine to identify the user's K-pop idol lookalike.
*   **Idol Encyclopedia:** A searchable, filterable database of K-pop idols, including group information, member profiles, and latest news.
*   **Solo Artist Support:** Specialized UI for solo artists like IU, merging group and member details into a single card and a unified profile view.
*   **Latest Industry News:** Real-time (simulated) feed of the latest K-pop news for each group.
*   **Member TMI & Behind Stories:** Rich database of fun facts and behind-the-scenes stories (10+ per group).
*   **Multilingual Support (i18n):** Full support for 13 languages including English (EN), Korean (KO), Japanese (JA), Chinese (ZH), and more.
*   **Live Statistics:** Dynamic counter on the home screen showing the current number of groups and idols in the database.
*   **Premium Dark Design:** A modern, high-tech interface with neon accents and glassmorphism effects.

## 3. Technology Stack
*   **Frontend Framework:** React 19, TypeScript, Vite
*   **Styling:** Tailwind CSS 4
*   **AI/ML Integration:** `@vladmandic/face-api` (Face recognition with 128-d embedding vectors)
*   **Internationalization:** `i18next`, `react-i18next`
*   **Icons:** `lucide-react`

## 4. UI/UX Design Guidelines
*   **Theme:** Dark mode dominant (deep blacks, slate grays).
*   **Accents:** Cyber-neon Fuchsia, Purple, and Blue.
*   **Visual Elements:**
    *   **Glassmorphism:** Use of frosted glass effects for cards and overlays.
    *   **Neon Borders:** Animated multi-color borders for interactive elements.
    *   **Typography:** Bold, black sans-serif for impact, monospaced fonts for technical data.
    *   **Animations:** Smooth fade-ins, scaling effects, and pulse animations.

## 5. Development Status
1.  **Core Identification:** Implemented using advanced face recognition embedding.
2.  **Encyclopedia:** Functional with search, detailed group/member views, and solo artist optimization.
3.  **Content:** Expanded database with 10+ TMI and 5+ news items per main group.
4.  **Multilingual:** Implemented and integrated across all components.
5.  **Aesthetic:** Modern neon-dark theme fully applied.
