# AngularStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7 and working [NodeJs](https://nodejs.org/en/download/) version is 16.15.1

## Run
`ng server`

## To restart this project
#### Generate Angular
Create new angular project using
[nvm](https://github.com/nvm-sh/nvm) and 
[angular-cli](https://indepthcoder.medium.com/maintain-different-versions-of-angular-cli-on-the-same-machine-6828df198f59)  
`npx --yes --package @angular/cli@v13-lts ng new angular-starter --defaults`

###
#### Install [Tailwind CSS](https://tailwindcss.com/docs/guides/angular)
`npm install -D tailwindcss postcss autoprefixer`  
`npx tailwindcss init`  
`"./src/**/*.{html,ts}"` in tailwind.config.js  
``@tailwind base;
@tailwind components;
@tailwind utilities;`` in ./src/styles.css
