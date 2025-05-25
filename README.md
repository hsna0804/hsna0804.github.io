# Portfolio Website

A modern, responsive portfolio website showcasing work experience, projects, and skills. This website is designed to be easily deployable on GitHub Pages.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Interactive contact form
- Modern UI with animations
- Skills showcase
- Project portfolio
- Work experience timeline

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla)
- Font Awesome for icons

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Initialize git in this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add your GitHub repository as remote:
   ```bash
   git remote add origin YOUR_REPOSITORY_URL
   git branch -M main
   git push -u origin main
   ```
4. Go to your repository settings on GitHub
5. Scroll down to "GitHub Pages" section
6. Select "main" branch as source
7. Your site will be published at `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

## Local Development

To run this website locally, you can use any local server. Here's one way using Python:

```bash
# If you have Python 3:
python -m http.server 8000

# If you have Python 2:
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

## Customization

1. Update the content in `index.html` with your personal information
2. Modify the colors in `css/style.css` by changing the CSS variables in the `:root` selector
3. Add your social media links in the footer section of `index.html`
4. Update the contact form handling in `js/main.js` to work with your preferred backend

## License

MIT License - feel free to use this template for your own portfolio! 