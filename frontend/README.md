# install vite
npm create vite@latest

# install daisy ui 
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest

# react-hook-form
npm i react-hook-form

# zod : use for validation in form
npm i zod
for using zod u need hook form resolver

# hook-form-resolver 
npm i @hookform/resolvers

<!-- errors object format  -->
{
    firstName:{
        type:'minLength'
        message:"minimum char should be 3"
    },
    emaildId:{
        type:'invalid_string'
        message:"Invalid Email"
    }
}

# store 
1.user Info
2.loading
3.isAuthenticated:bool value => if user is not authenticated we route him to signup or login page using this variable
4.error