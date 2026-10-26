# Nithesh Thangavel – Portfolio (React + Vite)

## Run in VS Code
1. Install Node.js 18+ from nodejs.org.
2. Open this folder in VS Code (File > Open Folder).
3. Open the terminal (Ctrl + `) and run:
   ```
   npm install
   npm run dev
   ```
4. Open the link shown (usually http://localhost:5173).

## Where to edit
All content is in `src/data.js`: contact details, photo, projects (images, live links, GitHub links), achievements, skill logos.
Project images are in `src/assets/`; replace a file with the same name to change it.
Your resume PDF is in `public/`.

## Send messages without opening email (EmailJS)
1. Create a free account at emailjs.com, add an Email Service (Gmail) and a template with
   To email: your address, Subject: `Portfolio message from {{from_name}}`,
   Content: `{{message}}  From: {{from_name}} ({{reply_to}})`, Reply-To: `{{reply_to}}`.
2. Put the Service ID, Template ID and Public Key in the `EJS` object in `src/data.js`.
3. In EmailJS > Account > Security, add your site's domain.
If EmailJS is not configured or fails, the form opens the visitor's email app instead.

## Deploy
Push to GitHub and import the repo in Vercel (framework: Vite), or run `npm run build` and upload `dist/`.
