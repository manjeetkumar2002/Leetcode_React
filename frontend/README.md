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