# Angular Starter
This is **an angular boilerplate project** with basic common features and test cases.  
The main target of this project is to **create a highly scalable, reusable, well-architect front-end application**
and tries to use and implement the best practices of Angular and JavaScript.  
More information and external resources are attached in this **README.md** file.


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
- **Guard**  
*ref: core->guards->AuthGuard*
- Resolver
- Interceptor  
*ref: core->interceptors->AuthInterceptor; app.module.ts*
- Tests

#### Other Features
- Customized ToasterService by using [PrimeNG`s Toast](https://www.primefaces.org/primeng/toast)  
*ref: app.component.html; core.module.ts(providers); usages: core -> services -> ToasterService*
- Encrypt user data in Local Storage by [localstorage-slim](https://www.npmjs.com/package/localstorage-slim)  
*ref: modules->auth->AuthService*

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
Import `BrowserAnimationsModule` or `NoopAnimationsModule` in AppModule

Install [localstorage-slim](https://www.npmjs.com/package/localstorage-slim)  
```npm i localstorage-slim```

## References
- [For Architecture](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7)
- [For App Layout](https://indepth.dev/posts/1235/how-to-reuse-common-layouts-in-angular-using-router-2)
- [Encrypt Local Data](https://digitalfortress.tech/js/encrypt-localstorage-data/)
