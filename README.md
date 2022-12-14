<h1>Code Labs Academy</h1>


This repository is for the code showcased in the [PRACTICAL GUIDE](https://codelabsacademy.com/blog/react-state-management)<span style="text-decoration:underline;">.</span> Don't forget to check it out!

---

A live preview link can be accessed [here](https://resourcify-frontend.onrender.com/)<span style="text-decoration:underline;">.</span>

Consider the case where we implement the authentication process for a React application. 

![User Login](https://drive.google.com/uc?export=view&id=1JG3bgmxkXEXc00vsJ1ilLJDnjnaTvMXl)


As shown in the GIF above, we want to allow users to login or sign up to our application using credentials. If valid credentials were provided, the user will be logged in, the application will automatically navigate to the home page and the user can proceed to use the application. 

Similarly, If the user logs out, the home page resources will be protected behind login, the login page will be the only page accessible by the user.

Thinking of this workflow in terms of implementation, we would have a main component named App, the App component will redirect the user to one of two pages: Home or Login, the current state of user ( logged in, logged out) will dictate which page the user is redirected to, a change in the current state of the user (for example changing from logged in to logged out) should trigger an instant redirection to the corresponding page.




![State](https://drive.google.com/uc?export=view&id=1BIuvUVyYQCfFoefzh9UxUAF86Yj0tJYD)






As shown in the illustration above, we want the App component to consider the current state and only render one of the two pages – Home or Login – based on that current state. 

If the user is null, it means we don’t have any authenticated user, so we navigate to the login page automatically and protect the home page using conditional rendering. If the user exists, we do the opposite.

Now that we have a solid understanding of what should be implemented, let's explore a few options, but first let’s set up our React project, 

The project repo contains a sample backend application that we will use to implement the frontend side (we won't go into it as it's not the main focus here but the code was intentionally kept simple so you won't have a hard time with it)

We start by creating the following pages and components:



* Home Page
* Login Page
* EditUser Page
* Navbar Component
* UserDropdown Component

A React application with multiple pages needs proper navigation, for that we can use the react-router-dom to create a global browser router context and register different React routes.

```bash

yarn add react-router-dom

```

We know many readers prefer following along with tutorials, so here’s the starter template to get you up to speed. This starter branch uses DaisyUI for predefined TailwindCSS JSX components. It includes all components, pages and the router already setup. If you’re considering following along with this tutorial, building the whole auth flow by yourself following straightforward steps, start by forking the repository first. After you fork the repository, clone it and start from the  **[start-here](https://github.com/codelabsacademy/fullstack-resourcify/tree/start-here) **branch**:**

```js

git clone git@github.com:<your-username>/fullstack-resourcify.git

```

Once you pull the start-here branch:



* Open the project with your preferred code editor 
* Change directory to **frontend/**
* Install dependencies: yarn
* Start a development server: yarn dev·

The preview should look something like this:




![Changing user name](https://drive.google.com/uc?export=view&id=1dnhed7L_GQWHxgB3CtfenYbDP8dj1Qx-)





The name rendered in the Navbar – top right side – is a state variable defined in the main App component. The same variable is passed to both Navbar and Home page. The simple form used above actually updates the “name” state variable from the EditPage component.


---

This repository is for the code showcased in the [PRACTICAL GUIDE](https://codelabsacademy.com/blog/react-state-management)<span style="text-decoration:underline;">.</span> Don't forget to check it out!