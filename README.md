This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify










/////////////////////////////////////////////////////////

* {
  margin: 0;
  padding: 0;
}

//Pantallas grandes
.contenedornav {
  position: fixed;
  display: flex;
  top: 0;
  margin: auto;
  height: 10vh;
  width: 98vw;
  align-items: center;
  font-size: 1.2rem;
  border-radius: 15px;
  background: #F0F0F3;
  box-shadow: 20px 20px 60px #cccccf,
    -20px -20px 60px #ffffff;
    z-index: 1;

}

.contenedornav--logosiz {
  position: relative;
  margin-left: 4vw;
    .contenedornav-icon {
    margin: 0.2em;
  }
}

.contenedornav--iconomenu {
  display: none;
}

.contenedornav--nav-menu {
  position: absolute;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 10vh;
  opacity: 1;
  list-style: none;
  padding: 2em;
  
}

  .contenedornav-logo {
    color: #2C3E50;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
  }

  .contenedornav-logo:hover {
    color: #2C3E50;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    background: #F0F0F3;
 
  }


.nav-item {
    height: 80px;
    border-bottom: 2px solid transparent;
    display: flex;
  }

  .nav-item:hover {
    border-bottom: 2px solid #2C3E50;

    h4 {
      text-decoration: none;
      color: #2C3E50;
    }
  }

  .nav-links {
    color: #2C3E50;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;

    a {
      text-decoration: none;
    }
  }

  .nav-links:hover {
    color: #2C3E50;
    align-items: center;
    text-decoration: none;


    a {
      text-decoration: none;
    }
  }

  .FaBars {
    color: #fff;
  }





//Pantallas pequeñas
@media screen and (max-width: 960px) {
  
  *{
    margin: 0;
    padding: 0;
  }
  .contenedornav {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    top: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    position: fixed;
    height: 10vh;
    width: 100vw;
    border: solid royalblue;

    
    
    .contenedornav--iconomenu {
      display: block;
      position: absolute;
      top: -0.5em;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      border: solid red;
      .fa-times {
        font-size: 2rem;
      }
    }

    .contenedornav--container {
      position: absolute;
      
      width: 100vw;
      height: 10vh;
      border: solid;
    }


    
    .contenedornav--nav-menu {
      display: flex;
      flex-direction: column;
      width: 80vw;
      height: 47vh;
      position: absolute;
      top: 10vh;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
    
    .contenedornav--nav-menu.active {
      display: flex;
      list-style: none;
      color: #2C3E50;
      top: 11vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: #F0F0F3;
      left: 7.5vw;
      width: 85vw;
      opacity: 0.95;
      transition: all 0.6s ease;
      z-index: 1;
      padding-inline-start: 0;
      border-radius: 15px;
      box-shadow: 20px 20px 60px #cccccf,
      -20px -20px 60px #ffffff;
    }
    
    .nav-links {
      text-align: center;
      padding: 1rem;
      width: 85vw;
      display: table;
      color: #2C3E50;
      text-decoration: none;
    }

    .nav-links:hover {
      color: #f00946;
      text-align: center;
      
      a {
        text-decoration: none;
      }
    }

    
    .nav-item:hover {
      border: none;
      align-items: flex-end;
    }

    .nav-item {
      width: 100%;
      align-items: flex-end;

    }
    
    
    .contenedornav-logo {
      top: 0;
      left: 0;
    }

 
    
    .nav-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 120px;
    }
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////

 .contenedornav--iconomenu {
        display: block;
        position: absolute;
        top: -0.5em;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        border: solid red;
        .fa-times {
          font-size: 2rem;
        }
      }
  
      .contenedornav--container {
        position: absolute;
        
        width: 100vw;
        height: 10vh;
        border: solid;
      }
  
  