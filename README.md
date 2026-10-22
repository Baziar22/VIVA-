# VIVA Driving School website

A simple static website (HTML, CSS, JavaScript). No build step, no paid services.
**Almost everything you will ever edit is in `js/config.js`.**

## 1. Run and test it on your computer
1. Unzip `viva-website.zip`.
2. Easiest: double-click `index.html` to open it in your browser.
3. Better (matches the real website): open a terminal in the folder and run `python3 -m http.server 8000`, then visit http://localhost:8000.

## 2. Edit services and prices (`js/config.js`)
- **Services:** change `title` or `text`. `status: "confirmed"` shows the service normally. `status: "to-confirm"` adds an "Ask if available" tag. Change to `"confirmed"` once you are sure you offer it. To remove a service, delete its whole `{ ... },` block.
- **Prices:** in `prices`, replace `price: null` with text in quotes, e.g. `price: "£40", detail: "per hour"`. While it says `null` the site shows "Contact us for prices". Add or delete `{ ... },` blocks to change packages. Update `pricesNote` too.

## 3. Replace the car or instructor photo
Save your new photo in `assets/images/` (JPG, under about 300 KB, ideally resized to about 1000 px wide), then change the `photo` line in `config.js` (`business.car.photo` or the instructor's `photo`). Also update the `alt` text describing the photo.

## 4. Add a student photograph
1. Copy the photo into `assets/students/` (about 720 px wide, JPG).
2. In `config.js`, under `students`, add a line: `{ src: "assets/students/student-4.jpg", alt: "Student holding a pass certificate" },`
Only add photos you have permission to publish. Do not add names.
The **PASSED** tick is added automatically.

## 5. Add another instructor
In `config.js`, under `instructors`, copy the whole `{ ... }` block, add a comma, and edit `name`, `role`, `photo`, `alt`, `bio`. Leave `name` or `bio` as `""` if not confirmed. Cards line up automatically.

## 6. Update areas and test centres
- **Areas:** edit the `areas` list. Each name is in quotes followed by a comma.
- **Test centres:** `testCentres` is empty, so the section and menu link are hidden. Add verified centres from the official GOV.UK list, e.g. `{ name: "Centre name", url: "https://official-link" },`. The section appears automatically.

## 7. Upload to a new GitHub repository
1. Sign in at github.com, click **+** then **New repository**, name it (e.g. `viva-website`), keep it Public, and click **Create repository**.
2. Click **uploading an existing file**.
3. Unzip the project and drag **everything inside the folder** (index.html, css, js, assets, README.md, .nojekyll) into the page. `index.html` must be at the top level, not inside another folder.
4. Click **Commit changes**.
Optional GitHub Pages: Settings > Pages > Source "Deploy from a branch", branch `main`, folder `/ (root)`, Save. The site will be at `https://YOUR-NAME.github.io/viva-website/`. All paths are relative, so it works in a subfolder.

## 8. Deploy on Vercel
1. Sign in at vercel.com with your GitHub account.
2. Click **Add New > Project** and import the new repository.
3. Leave Framework Preset as **Other**. Leave Build Command and Output Directory empty.
4. Click **Deploy**. Every future change you commit to GitHub redeploys automatically.
