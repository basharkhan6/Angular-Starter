# AngularStarter


## Requirements
- NodeJs v16.15.1 (suggested to use [nvm](https://github.com/nvm-sh/nvm))

## Setup
`npm install`

## Run
`ng serve`  
This will start development server in port **4200**

## To re create this project
#### Generate [Angular](https://angular.io/)
Create new angular project using
[angular-cli](https://indepthcoder.medium.com/maintain-different-versions-of-angular-cli-on-the-same-machine-6828df198f59)  
`npx --yes --package @angular/cli@v13-lts ng new angular-starter --defaults`

###
#### Install [Tailwind CSS](https://tailwindcss.com/docs/guides/angular)

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
Put `"./src/**/*.{html,ts}"` under **content** in *tailwind.config.js* and
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
in *./src/styles.css*

###
#### Install [PrimeNg](https://www.primefaces.org/primeng/setup)
```
npm install primeng --save
npm install primeicons --save
```
Put below css reference under **styles** in *angular.json*
```
"node_modules/primeng/resources/themes/saga-blue/theme.css",
"node_modules/primeng/resources/primeng.min.css",
"node_modules/primeicons/primeicons.css",
```
