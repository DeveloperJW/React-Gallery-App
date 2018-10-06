# React Gallery App - Unit 07

- Purpose of this project: 

  - This project is created for the purpose of JavaScript Full Stack TechDegree - Unit 07 with TeamTreehouse. 
  
  - The app has be deployed to herokuapp: [click here for live demo](https://pure-lowlands-81431.herokuapp.com/)
  
  
- Project Description:
  - For this project, 
    - you'll Use JavaScript and JSX to build out the gallery components in a modular fashion.
    - Use React Router to set up routes for three default topic pages and a search page.
    - Use the Fetch API or a tool like Axios to fetch data from the Flickr API and use it to display images in your app.
    - Add logic to handle the search and various requirements of the project.
  
  - The App will request a JSON object from the API and parse the data so that 24 pictures are listed
  
  - This APP uses the Flickr API (https://www.flickr.com/services/api/) to grab information for 24 pictures with certain tag name and use 
  that data to build a gallery showcase app.
  
  - FetchAPI is used for this project.

Note (how to use this app): 
-
- You need to get your own Flickr API for the app 
- Steps:
    1. Create a file named '.config.js' and save under src folder
    2. in the '.config.js', copy and paste the following code, and substitute with your own flickr API
  ```
  const apiKey='You flickr API';
  export default apiKey;
  ```
  

Extra Credit:
-
- Add a loading indicator that displays each time the app fetches new data. Since the data for the three main topic pages can be requested when the page first loads, it's okay if the loading indicator is only present on the search route.
    
- If no matches are found by the search, display a friendly user message to tell the user there are no matches.
    
- Include a 404-like error route that displays a friendly 404 error page when a URL does not match an existing route.
