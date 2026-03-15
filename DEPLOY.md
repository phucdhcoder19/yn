# Deploy Your Portfolio to Vercel

Your portfolio is ready to deploy. Follow these steps:

## Option 1: Deploy via Vercel CLI (Quickest)

1. **Open a terminal** in the portfolio folder (`d:\yn\portfolio`)

2. **Log in to Vercel** (opens browser):
   ```bash
   npx vercel login
   ```
   Sign in with GitHub, GitLab, or email.

3. **Deploy**:
   ```bash
   npx vercel
   ```
   - Press Enter to accept defaults
   - You'll get a live URL like `https://portfolio-xxx.vercel.app`

4. **Deploy to production** (optional):
   ```bash
   npx vercel --prod
   ```

## Option 2: Deploy via GitHub + Vercel (Best for updates)

1. **Create a GitHub repo** at https://github.com/new
   - Name it `portfolio` (or any name)
   - Don't add README (you already have code)

2. **Push your code**:
   ```bash
   cd d:\yn\portfolio
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Vercel**:
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repo
   - Click Deploy (Vercel auto-detects Next.js)

4. **Future updates**: Just push to GitHub and Vercel will auto-deploy.
