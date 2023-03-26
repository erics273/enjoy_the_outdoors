# Capstone Project: Enjoy the Outdoors

Build a website that helps a user find things to do to enjoy the great outdoors.

## Basic Requirements

The website will include the following in order to be considered complete:

- **A Homepage** - Links to two pages: a National Parks search page and a Mountains information page

- **A National Parks Search Page** - Provide a user interface that allows the user to search for parks.  Data is in `nationalparks.json`

- **Mountains Information Page** - Provide a user interface that allows the user to explore details of 48 mountains. Data is in `mountains.json`.

## Implementation Details

Implentation requirements and details:

- **National Parks search page**
- **Mountains Information page**
- **Stretch goals**

### National Parks Search Page

This page will allow the user to search for national parks that they might be interested in.  The parks are provided to you in `nationalparks.json`.  Spend some time examining this file.

Ultimately, the user would like to have two ways to search for a national park:

- **By location**
- **By park type**

**Search by Location - Highest Priority** - User selects the state/territory from a [dropdown](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select). Provided in `locations.json`.  **Confirm park matches the location by comparing it to the park's State" property**.

**Search by Park Type** - User selects description from a [dropdown](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select). Provided in `parktypes.json`.  **Confirm park matches the description by checking to see if the park's "LocationName" property ***contains*** the description**.

Challenges: User will be presented two search options.
Choice:  use [radio buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
OR
Use a [dropdown](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) with the search types as [options](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)

#### National Parks Search Page Stretch Goals

##### These stretch goals should be treated as the lowest priority tasks

- Provide a View All National Parks option.
- Some National Parks contain a **"Visit"** property that contains a URL to a page about the park.
-- Display the URL in a hyperlink along with park details.  Open in a different tab/window.

#### IMPLEMENTATION HINTS

- You will need to include data from three JSON data files loaded into your application.
- Get the two search options to load their respective options before getting the actual search working. Options include:
  - Using radio buttons to select search type (By Location/By Park Type) and then hide/show different dropdowns with search criteria in them when the radio buttons are clicked
  - Using a dropdown to select search type (By Location/By Park Type) and then hide/show different dropdowns with search criteria in them when the search type selection changes
  - You might also decide to use only one search criteria dropdown and dynamically load its options with states or park types based on the search type selection.
- **Suggestion:** Get the "Search by Location" feature working first.
- When you are working on the "Search by Park Type", you need to make sure the two strings have the same casing when you search.  The easiest way to do this is to use the `String` objects [`.toLowerCase()`](https://mdn.io/toLowerCase)  (or [`.toUpperCase()`](https://mdn.io/toUpperCase) ) to make the strings the same case.

### Mountains Information Page

This page will provide a drop down list of the 48 mountains listed in `mountains.json.` Make sure to spend some time examining this file.

When the user selects a mountain, your page will display information about that mountain, including:

- Mountain Name
- Description
- Elevation
- Any other information you find interesting about the Mountain.

> **NOTE:** This page will NOT allow the user to search mountains using any type of filter.

#### Mountain Information Page Stretch Goals

##### These stretch goals should be treated as the lowest priority tasks

- Display an image of the mountain along with the mountain information.
- Impress the user by displaying the sunrise and sunset time "today" for any mountain along with the other mountain data.

  ```js

  //function that can "fetch" the sunset/sunrise times
  async function getSunsetForMountain(lat, lng){
      let response = await fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`)
      let data = await response.json()
      return data
  }

  //Using the function to fetch the sunset/sunrise times for a specific mountain 
  getSunsetForMountain("44.320686", "-71.291742").then(sunsetData => {
      console.log(sunsetData.results)
  });
  ```

> NOTE(S): the lat and lng values are included in the mountain data. The times returned are in UTC are not adjusted for local summer variations. Label the output as UTC time when you display them.

## What Makes A Good Capstone Project?

- Build a consistent look-and-feel throughout the site with intuitive navigation
- Implement at least the required pages
- Have a responsive user interface
- Build a public repo for your code, use an appropriate branching strategy, and have a commit history with meaningful commit messages

**Implement best practices:**  

- Have a good directory structures (ex: css, images and scripts folders)
- Use good file naming conventions (ex: lowercase file names with no spaces)
- Have well-formatted HTML, CSS and JavaScript (indentions, blank lines, etc)
- Use good names for your HTML elements and JavaScript variables/functions
- Use HTML, CSS and JavaScript comments effectively
- Make sure there are no JavaScript errors at run time (check the Console tab in the browser frequently)
