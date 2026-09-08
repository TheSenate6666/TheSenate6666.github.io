# Game Industry Portfolio Website

A clean, professional portfolio website built with HTML, CSS, and JavaScript for GitHub Pages. Designed specifically for game developers and designers to showcase their work.

## 📁 Project Structure

```
TheSenate6666.github.io/
├── index.html                 # Main Work page
├── about.html                 # About page
├── resume.html                # Resume page (with PDF embed)
├── contact.html               # Contact page
├── README.md                  # This file
│
├── css/
│   └── style.css              # All styling
│
├── js/
│   ├── main.js                # Navigation & functionality
│   └── portfolio-data.js      # YOUR PROJECT DATA (edit this!)
│
├── images/                    # Project thumbnail images
│   ├── parkour-game.png
│   ├── project-2.png
│   └── ... more thumbnails
│
├── assets/
│   └── Max-Resume.pdf         # Your resume PDF
│
└── projects/                  # Individual project pages
    ├── parkour-game/
    │   ├── index.html
    │   └── assets/            # Project images & GIFs
    ├── project-2/
    │   ├── index.html
    │   └── assets/
    └── project-template.html  # Use this as a template for new projects
```

## 🚀 Quick Start

### 1. Clone Your Repository
```bash
git clone https://github.com/TheSenate6666/TheSenate6666.github.io.git
cd TheSenate6666.github.io
```

### 2. Add All Files
Copy all the files generated into your repository following the structure above.

### 3. Customize Your Info

**Edit these files with your information:**

- **about.html** - Update your bio and interests
- **contact.html** - Add your email, GitHub, LinkedIn, Discord, etc.
- **resume.html** - Add your resume PDF to `assets/Max-Resume.pdf`
- **css/style.css** - Adjust colors, fonts if desired (optional)

### 4. Add Your Portfolio Projects

This is the most important part! Edit `js/portfolio-data.js`:

```javascript
const portfolioProjects = [
    {
        id: 'my-first-project',
        title: 'Project Name',
        description: 'Brief one-line description of your project.',
        image: 'images/my-project-thumbnail.png',
        tags: ['Unreal Engine', 'Tag2', 'Tag3'],
        projectPage: 'projects/my-first-project/index.html'
    },
    // Add more projects here
];
```

## 📝 Adding a New Portfolio Project

### Step 1: Create Project Folder
```
projects/
└── my-awesome-project/
    ├── index.html
    └── assets/
        ├── image-1.png
        ├── image-2.png
        ├── gameplay-demo.gif
        └── ... more media
```

### Step 2: Create Project Page
1. Copy `projects/project-template.html`
2. Paste it as `projects/my-awesome-project/index.html`
3. Edit the HTML with your project information:
   - Title
   - Date
   - Team size
   - Description
   - Sections with images/GIFs/videos

### Step 3: Add Project to Data
Edit `js/portfolio-data.js` and add your project:

```javascript
{
    id: 'my-awesome-project',
    title: 'My Awesome Project',
    description: 'A brief description of what makes this project special.',
    image: 'images/my-awesome-project.png',
    tags: ['Unreal Engine 5', 'Game Design', 'Team Project'],
    projectPage: 'projects/my-awesome-project/index.html'
}
```

### Step 4: Add Thumbnail Image
- Create a preview image (recommended: ~400x250px)
- Save it to `images/my-awesome-project.png`
- Reference it in the portfolio data

### Step 5: Prepare Project Assets
- Add your project images to `projects/my-awesome-project/assets/`
- Optimize images for web (use tools like TinyPNG)
- GIFs should be reasonably sized (under 5MB ideally)

## 🎨 Customization

### Change Your Name/Role
Edit the `<h1>` and `.role` in each HTML file's header.

### Change Colors
Edit `css/style.css` - look for color values like `#000`, `#666`, etc.

### Change Fonts
Modify the `font-family` in `css/style.css`

### Update Navigation Links
Edit the `<nav>` section in each HTML file

## 📸 Media Guidelines

### Image Optimization
- **Thumbnails:** 400x300px, ~100KB
- **Project images:** Up to 1200px wide, ~300KB
- **GIFs:** Keep under 5MB, consider using video instead
- **Format:** PNG for graphics, JPG for photos, WebP if browser support needed

Use online tools like:
- TinyPNG.com for PNG/JPG compression
- Ezgif.com for GIF optimization

### Video Instead of GIFs
For better performance, use HTML5 video:
```html
<video width="100%" controls class="project-video">
    <source src="assets/gameplay.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>
```

## 🌐 Deploy to GitHub Pages

### First Time Setup
1. Make sure your repository is named `TheSenate6666.github.io` (exact match!)
2. Push all files to the `main` branch
3. Go to Settings → Pages → ensure "Deploy from branch" is set to `main`

### Every Update
```bash
git add .
git commit -m "Update portfolio with new project"
git push origin main
```

Your site will be live at: `https://theSenate6666.github.io`

## ✏️ Update Frequently Used Text

### About Page Content
Edit the paragraphs in `about.html` to match your experience and interests.

### Contact Information
In `contact.html`, update:
- Email address
- GitHub URL
- LinkedIn profile
- Twitter/Discord handles

### Header/Logo
Edit the `<h1>` and `.role` paragraph in each page's header section.

## 🔧 Troubleshooting

### Site Not Updating
- Wait 5-10 minutes for GitHub Pages to rebuild
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Check that files are in the main branch

### Images Not Loading
- Check the file path is correct
- Make sure image files exist in the `images/` or project `assets/` folders
- Use relative paths: `images/my-image.png` not `/images/my-image.png`

### Links to Projects Not Working
- Verify `projectPage` path in `portfolio-data.js` matches actual file location
- Check that project's `index.html` exists

### Styling Looks Wrong
- Clear browser cache
- Check that `css/style.css` is in the correct location
- Verify no typos in file paths

## 📚 Best Practices

1. **Keep Project Descriptions Concise** - 1-2 sentences max for portfolio cards
2. **Use High-Quality Images** - First impression is visual
3. **Include Relevant Tags** - Helps visitors quickly understand your skills
4. **Write Detailed Project Pages** - Explain challenges and solutions
5. **Update Regularly** - Add new projects as you complete them
6. **Test Links** - Ensure all internal links work before pushing
7. **Optimize Media** - Compress images and GIFs before uploading
8. **Mobile Test** - Check how it looks on phone/tablet

## 🎯 Portfolio Tips for Game Developers

- **Show Your Process** - Include concept art, iteration images
- **Highlight Your Role** - Clearly state what YOU specifically did
- **Include Gameplay Videos** - GIFs or short MP4 clips showing things in action
- **Explain Systems** - Use tech-focused language for game dev audience
- **Show Problem-Solving** - Discuss challenges and how you overcame them
- **Link to Related Work** - Connect projects to your thesis, talks, or publications
- **Keep It Current** - Remove old projects, prioritize recent work

## 📞 Getting Help

- **GitHub Issues:** Document bugs in your repo
- **Stack Overflow:** For specific HTML/CSS/JS questions
- **MDN Web Docs:** Great reference for web standards
- **GitHub Pages Docs:** https://docs.github.com/en/pages

## 📄 License

This portfolio template is free to use and modify for your own purposes.

---

**Happy coding! 🎮**
