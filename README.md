# AuraESL - Interactive A1 to A2 English Learning App

AuraESL is a modern, responsive, and interactive ESL learning single-page application (SPA) designed to help Turkish speakers transition from A1 (Beginner) to A2 (Elementary) English proficiency in 30 minutes of focused interactive drills.

Features a premium **glassmorphism dark UI** with sound synthesis, text-to-speech audio pronunciation, interactive quizzes, speaking simulation, and a dedicated curriculum for **If Clause Type 0 & 1** and conditional tenses.

---

## ⚡ Live Demo & Vercel Deployment

This project is fully optimized for **zero-config static deployment** on [Vercel](https://vercel.com/). You can deploy it for free in less than a minute!

### How to Deploy on Vercel (For Free):

1. **Push this code to GitHub**:
   - Create a new empty repository on your GitHub account.
   - Push your local files to that repository (see instructions below).
2. **Connect to Vercel**:
   - Log into [Vercel](https://vercel.com/) (using your GitHub account).
   - Click **"Add New"** > **"Project"**.
   - Import your newly created GitHub repository.
   - Click **"Deploy"**! Vercel will automatically detect the static HTML/CSS/JS files and publish your app online with a free `https://your-project-name.vercel.app` domain.

---

## 🛠️ Local Development & Git Setup

To manage your code locally and push it to your GitHub repository:

1. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of AuraESL app"
   ```

2. **Link and Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

## 📂 Project Structure

- `index.html` - The structural shell of the SPA containing the sidebar, headers, and dynamic tab panels.
- `styles.css` - Custom styling utilizing CSS variables for dark-mode glassmorphism, responsive flex layouts, and keyframe animations.
- `content.js` - Complete course curriculum, grammar library index, tenses questions database, and If-clause lessons with Turkish support notes.
- `app.js` - Routing controller, multiple-choice/fill-in/word-order quiz engines, mock audio recorder, Web Audio API synth tones, and Web Speech API text-to-speech engine.

---

## 🌟 Features Implemented

- **A1-A2 Transition (3 Phases)**: Self-contained 10-minute learning units containing vocabulary lists, grammar boxes, interactive exercises, and speaking practice.
- **Tenses for Conditionals Masterclass**: 12 speaking questions targeted at teaching tenses used in conditionals (Present Simple, Past Simple, Present Continuous, Will Future, Past Perfect).
- **If Clauses Type 0 & 1 Deep-Dive**: Learn structure, comparison table, scientific facts, future warnings, and alternative modals, backed by a 10-question practice exam.
- **Audio Feedback**: Built-in sound effects (synthesized directly in the browser via Web Audio API) and model answer pronunciation (Web Speech synthesis). No external static assets required!
