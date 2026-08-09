# DevOps Portfolio Website

A responsive static portfolio website for showcasing a DevOps project.

## Files

- `index.html` — portfolio content
- `style.css` — responsive dark DevOps-style design
- `script.js` — mobile navigation and small interactions
- `assets/screenshots/` — add your project screenshots here

## Before publishing

Update these placeholders in `index.html`:

- `jefryjonegmail.com`
- LinkedIn `https://www.linkedin.com/in/jone-jefry/` link
- Any project/live-demo URL [you want to show](http://13.205.4.143)

## Add project screenshots

Create:

```text
assets/screenshots/
```

Add your screenshots using names such as:

```text
jenkins-dashboard.png
jenkins-config.png
jenkins-build.png
ec2-instance.png
security-group.png
dockerhub-dev.png
dockerhub-prod.png
deployed-app.png
uptime-kuma.png
```

Then replace the placeholder blocks in `index.html` with `<img>` tags if desired.

## GitHub Pages

1. Create a GitHub repository, for example `devops-portfolio`.
2. Upload `index.html`, `style.css`, `script.js`, and `assets/`.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. GitHub will provide your Pages URL.

## Local test

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```


## Portfolio details added

- Email: `jefryjone@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/jone-jefry/`
- Live application: `http://13.205.4.143`
- Real project screenshots are stored under `assets/screenshots/`.
