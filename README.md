# Express Styles Overview

A place for building samples of styles.

Variables are named beginning with "--zero". Change to name for your system.

## Dependencies

- Uses Vite for postCSS compiling automation
- Uses express.js for partials (header, footer, sidebars)
- [Node.js](https://nodejs.org/)

## Starting

'npm i'

### To run express.js server

'npm run start'

Runs in http://localhost:5050/.

### To compile postCSS

'npm run dev'


## Style the System

### To change fonts
- import them in views > partials > head.ejs
- override the font variables in src > vars > vars-fonts.css

### To change colors
- Create your primitive palette in src > vars > vars-colors-primitive.css
- Set foreground, background, border, accent in src > vars > vars-colors-semantic-light.css
- To use dark mode, set colors in src > vars > vars-colors-semantic-dark.css and uncomment that file in src > style.css

### To add icons
- Place the icon images into public > assets > icons
- Create classes for each icon in src > elements > _icon.css

## Adding pages
Add pages to the /views directory. You can create a new subdirectory for separate sites. Files should use extension ".ejs" and contain semantic HTML.

### Layouts and Partials
A site needs two subdirectories within the site subdirectory:

- /layouts
- /partials

The /layouts directory contains the full width and sidebar templates which reference the /partials. 

The /partials directory contains elements which appear on multiple pages, such as the header, footer, and sidebar nav for each section. 

### App.js File
Every new page needs to be added to the app.js file using the following patterns.

### Full width page
Add to app.js using:

```
app.get('/template', (req, res) => {
  res.render('template', { title: 'Template', layout: './template/layouts/full-width' });
});
```

### Regular width with sidebar
Add to app.js using:

```
app.get('/template/content-page', (req, res) => {
  res.render('template/content-page', { title: 'Content Page', layout: './template/layouts/sidebar' });
```

## Front-end Development

### Tech Stack
We are using:

- node
- chokidar
- gulp
- PostCSS
- BEM CSS methodology
- ITCSS methodology
- Prettier

### PostCSS
PostCSS is in a separate directory from compiled CSS.
⚠️ DO NOT WRITE CSS IN THE CSS/Components DIRECTORY.
✅ Write CSS in the pcss directory.
✅ Add components as imports to css/style.css
CSS should be written using ancestor nesting and Block-Object-Modifier methodology. We are using postCSS (instead of native nesting) so that BEM methodology can be applied through concatenation of class partials.

### CSS
All CSS is contained within /public/css. 

CSS files should use BEM with nesting, and be organized in the following order, using these code comment labels as needed:

```
  /*** Variables ***/
  /*** Component ***/
  /*** Elements ***/
  /*** States ***/
  /*** Variants ***/
```

## Assets
This directory in /public/assets contains shared graphics such as logos and icons which are needed by the CSS. 

## Images
Images are in /public, sorted into subdirectories by site. The /public/images folder contains placeholder images.

### Linting
 We should lint only the folder src/postcss (do not lint compiled CSS). We can apply SCSS rules for nesting.
 
This repo has stylelintrc.json for setting linting rules and stylelintignore for ignore files.

To run linting on PostCSS:
'npx stylelint "src/postcss/*.css"'


