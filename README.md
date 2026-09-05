## Angel's Portfolio

Welcome to my personal portfolio. I am Angel, an IT graduate who enjoys building useful digital experiences, learning new technologies, and combining development with design.

This website highlights my skills, projects, interests, and the progress I am making as a developer.

## Built With

- React
- Vite
- JavaScript
- HTML and CSS
- React Router

## Skills

- Front end: HTML, CSS, JavaScript, React, Vue, and TypeScript
- Back end: PHP, C#, and MySQL
- Tools: Git, GitHub, VS Code, Visual Studio, and Figma

## Featured Projects

- **Portfolio Website**: A personal website showcasing my work and development journey.
- **Workease Admin**: A C# and WPF desktop application for managing CDW operations.
- **Workease CDW**: A .NET MAUI mobile application for field workers.

## Run Locally

Make sure Node.js is installed, then run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.
To create a production build:

```bash
npm run build
```

## Deploy With GitHub Pages

### 1. Create a GitHub repository

Create an empty repository on GitHub. For example:

```text
Angelportfolio
```

Do not add a second README, `.gitignore`, or license if this project already contains them.

### 2. Push the project

From the project folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/Angelportfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `Angelportfolio` with your GitHub username and repository name.

### 3. Configure Vite

In `vite.config.js`, set the base to your repository name:

```js
export default defineConfig({
  plugins: [react()],
  base: "/AngelPortfolio/",
});
```

If the repository has another name, use that name instead of `Angelportfolio`.

Commit and push this change:

```bash
git add vite.config.js
git commit -m "Configure GitHub Pages"
git push
```

### 4. Enable GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings**, then **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and choose the Vite deployment workflow if GitHub offers it.
5. Commit the workflow and wait for it to finish.

When deployment finishes, the site will be available at:

```text
https://YOUR-USERNAME.github.io/Angelportfolio/
```

The site may take a few minutes to appear after the first deployment.

## Contact

You can use the contact section of the portfolio to get in touch.
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

