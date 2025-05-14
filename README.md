# react from Namaste React 

# parcel 

- Dev build
- local server
- hmr = hot model replacement  (auto save refresh of our server)
- by using file watching algorithm - written in C++
- caching : faster builds
- image optimization
- minification
- bundling 
- compress
- consistent hasing 
- code spliting
- diffrential bundling - support old browsers
- Diagnostic report - error and warning
- Https
- Diffrent dev and prod bundles


# // Component Composition

# //Jsx  (similar to HTML syntax   but not exactly the same)


# // App planning
/*
 [
 haeder:
  logo
  about
  cart
  login
    signup
    logout
 ] 
 [
  body:
  saerch bar
  filter:
    veg
    non-veg
    rating
  sort:
    price low to high
    price high to low
  restaurant container:
    restaurant card:
     image
     name of restaurant
     star rating
     cuisine
     delivery time
 ]
 [
footer:
  copyright
  links
  contact us:
    social media links
    about us
]
*/

// NEVER UPDATE STATE VARIABLES DIRECTLY IN CLASS COMPONENTS
{ count: this.state.count + 1 } // WRONG WAY 
// UPADTE STATE USING SETSTATE FUNCTION
THIS.SETSTATE({ count: this.state.count + 1 }) // CORRECT WAY

//PROPS DRILLING
// CONTEXT (USED TO ACCESS THE DATA ANYWERE INSIDE APP)
// CONTEXT PROVIDER (USED TO CHANGE THE VALUES ANYWERE INSIDE OUR APP)

# // REDUX 
- INSTALL npm i @reduxjs/toolkit
- BUILD STORE 
- CONNECT OUR STORE TO APP
- SLICE
- DISPATCH(ACTION)
- REDUCE FUN
- SELECTOR


# TESTING FROM DEVELOPER
- UNIT TESTING
- INTEGRATIO TESTING
- END TO END TESTING
