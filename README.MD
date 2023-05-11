Design Decisions

Packages should be install with npm install --dev because of tailwind, vite and other dependencies required to run app in development.

For MyNews web app, I used React and TypeScript for the most part in places where i thougt types would be usefull.
I also chose to use Vite as the build tool, as it provides a fast and efficient development environment.

In terms of styling, I used TailwindCSS and WindiCSS plugins which allowed me to quickly prototype and develop the user interface of the application.

The latest news widget is a bit limited as far as infinite scrolling is concerned because the api has a limit on the number of news that can be fetched without paying a premium.
To store favorite posts, I chose local storage from the browser, so that the posts will remain even after the page is reloaded.
When retrieving all news on the home page, the api does not give the news category, so I generated it myself, while when retrieving by category, the api gives the category.

For data retrieval, I used the Axios library to fetch data from a third-party news api.
