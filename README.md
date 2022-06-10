# Angular Starter
This is an Angular Starter project with basic common features and test cases which is indented on learning purpose and can also be used as boilerplate project.
Here I tries to use and implement the best practices of Angular and JavaScript.
More information and external resources are attached in this README file.


## Requirements
- NodeJs v16.15.1 (suggested to use [nvm](https://github.com/nvm-sh/nvm))


## Setup
`npm install`


## Run
`ng serve`  
This will start development server in port **4200**


## Features 
#### Business Requirements
- Sign Up
- Sign In
- Sign Out
- Forget Password
- Reset Password
- Manage Profile (view/edit)
- Update Password

#### Angular Features
- Dynamic layout based on routing data.  
*ref: app-routing.module.ts*
- Custom Form **Validation** with dynamic error message.  
*ref: core->validations; usages: modules -> auth -> sign-up*
- Guard
- Resolver
- Interceptor
- Tests



## Architecture
#### *core:*
Angular specific configurations, tools and services like guards
, interceptors are placed here.
#### *layout:*
Layout components like navbar, header (breadcrumb, notice) , footer and its service should place here.

#### *module:*
All modules can place here like (this used in this project),
- modules -> AuthModule
- modules -> FeatureModule1
- modules -> FeatureModule2

or can organize by role and feature in submodule like,
- modules -> AuthModule
- modules -> AdminModule -> FeatureModule1
- modules -> UserModule -> FeatureModule2

#### *shared:*
All independent and reusable components, service, utilities should place here.


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


## Reference
- [For App Layout](https://indepth.dev/posts/1235/how-to-reuse-common-layouts-in-angular-using-router-2)
