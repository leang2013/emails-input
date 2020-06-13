# Library emails-input

# Development

    1 - npm run start (Run app)
    2 - npm run build (Create build to prod)
    3 - npm run build:dev (Create build to dev)
   
 # Improvements

    1 - Testing
    2 - Build with webpack
    3 - CDN
    4 - Performance
    5 - NPM publish
    
    
 # Documentation
 
 # New Browsers
 
      For new browsers with support HTMLElement you can
      Include this script <script type="text/javascript" src="./emails-input-es6.js"></script>
      In your HTML you only with the tag intance the component <emails-input></emails-input>
      You can add a lot of them
      
        Demo Page: https://leang2013.github.io/emails-input/dist/index-es6.html
 # Old Browsers
      
      For old browsers with not support HTMLElement you can
      Include this script <script type="text/javascript" src="../src/js/es5.js"></script>
      In your HTML you need to do this for example:
          var inputContainerNode = document.querySelector('#emails-input');
          var emailsInput = EmailsInput(inputContainerNode);
          
          Demo page: https://leang2013.github.io/emails-input/dist/index-es5.html
      
