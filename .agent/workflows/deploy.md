---
description: Deploy the application to Vercel
---

# Deploy to Vercel

This workflow guides you through deploying the Complexo Fitness application to Vercel.

## Prerequisites

- Ensure the application builds successfully locally
- Have a Vercel account (sign up at https://vercel.com if needed)
- Know your environment variables (from `.env` file)

## Option 1: Deploy via Vercel Dashboard (Recommended for first-time)

1. **Build the application locally to verify**
   ```bash
   npm run build
   ```

2. **Visit Vercel Dashboard**
   - Go to https://vercel.com/new
   - Sign in with your GitHub, GitLab, or Bitbucket account

3. **Import Git Repository**
   - If your project is on GitHub/GitLab/Bitbucket, click "Import Project"
   - Select your repository
   - Vercel will auto-detect it's a Vite project

4. **Configure Project**
   - Project Name: `complexo-fitness-chat` (or your preferred name)
   - Framework Preset: Vite (should be auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Add Environment Variables**
   - Click "Environment Variables"
   - Add each variable from your `.env` file
   - Common variables:
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_ANON_KEY`
     - Any other `VITE_*` variables

6. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 1-2 minutes)
   - You'll get a URL like `https://your-project.vercel.app`

## Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Build the application**
   ```bash
   npm run build
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```
   
   Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? (select your account)
   - Link to existing project? `N` (first time) or `Y` (subsequent deploys)
   - Project name: `complexo-fitness-chat`
   - Directory: `./`
   - Override settings? `N`

5. **Add environment variables** (if not done via dashboard)
   ```bash
   vercel env add VITE_SUPABASE_URL
   vercel env add VITE_SUPABASE_ANON_KEY
   ```
   
   Then redeploy:
   ```bash
   vercel --prod
   ```

## Post-Deployment Verification

1. **Visit the deployed URL** provided by Vercel

2. **Test key functionality**:
   - Homepage loads correctly
   - Navigation works between pages
   - Chatbot button appears
   - WhatsApp redirect works
   - FitStore logo displays correctly

3. **Test routing**:
   - Navigate to different pages
   - Refresh the page (should not show 404)
   - Use browser back/forward buttons

4. **Check console for errors**:
   - Open browser DevTools (F12)
   - Look for any console errors
   - Verify Vercel Analytics is loading

## Subsequent Deployments

After the initial setup:

**Automatic deployments** (if using Git integration):
- Push to your main/master branch
- Vercel automatically deploys

**Manual deployments** (via CLI):
```bash
vercel --prod
```

## Troubleshooting

**Build fails**: Check the build logs in Vercel dashboard for specific errors

**Environment variables not working**: 
- Ensure they start with `VITE_` prefix
- Redeploy after adding variables

**404 on page refresh**: 
- Verify `vercel.json` exists with rewrite rules
- Redeploy if you just added it

**Slow loading**: 
- Check Vercel Analytics for performance insights
- Consider enabling Vercel Edge Network features
