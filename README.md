# BMTAI Projects website

Static HTML, CSS, and JavaScript. No server, dependencies, or build step required.

## Deploy on Vercel
1. Unzip this archive.
2. Upload its contents to a new GitHub repository (index.html should be at the repository root).
3. In Vercel, Add New > Project and import the repository.
4. Select Framework Preset: Other. Leave Build Command empty and use the repository root as the Output Directory (.).
5. Deploy.
6. Open Project Settings > Domains, add your domain, and apply the DNS records Vercel shows at your domain provider.

The included vercel.json sets a buildless static deployment.

## Edit the site
- index.html: company homepage
- projects/index.html: Projects page
- projects.js: project collection; add a new object to the projects array to add a project card
- style.css: shared styling and responsive layout
- header.png: full brand logo (source artwork)
- assets/: logo mark used in the header/footer, plus favicons

## Preview locally
Run `python3 -m http.server 8000` in this directory, then open http://localhost:8000.
The Projects page is http://localhost:8000/projects/.

Fonts load from Google Fonts; system fonts are used as fallback.
This export contains public website files only. It has no ChatGPT login requirement or Sites credentials.
