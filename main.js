const pinnedRepos = [
  {
     id: 1,
     name: "gatsby-workshop",
     description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  },
  {
    id: 2,
    name: "gatsby-workshop",
    description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  },
  {
    id: 3,
    name: "gatsby-workshop",
    description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  },
  {
    id: 4,
    name: "gatsby-workshop",
    description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  },
  {
    id: 5,
    name: "gatsby-workshop",
    description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  },
  {
    id: 6,
    name: "gatsby-workshop",
    description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  }
];

  const packages = [
  {
    id: 1,
    name: "docker",
    description: "a software platform used for building apps",
  },
  {
    id: 2,
    name: "apache maven",
    description: "a default package manager",
  },
  {  
    id: 3,
    name: "nuget",
    description: "a software platform used for building apps",
  },
  
  {
    id: 4,
    name: "ruby gems",
    description: "a standard format for apps",
  },
  { 
    id: 5,
    name: "containers",
    description: "a single place for your team",
  },
  { 
    id: 6,
    name: "npm",
    description: "a single place for your team",
  },
];
  
const repoArray = [
  {
     id: 1,
     name: "cards-on-mom",
     description: "This app randomly generates Mother's Day cards for the engineer too busy coding to buy one at Dollar General.  Just input her name then a few facts and VOILA!  Parental love achieved."
  },
  {
    id: 2,
    name: "nss-adventure",
    description: "This app is a text-based RPG that takes you on a quest down the halls of the legendary Nashville Software School.  Evern since the pandemic, the NSS doors have been closed and a mysterious entity has been growing in the shadows..."
  },
  {
    id: 3,
    name: "home-repo",
    description: "This app directs you to the nearest home improvement store based on GPS, time of day, and current mood."
  },
  {
    id: 4,
    name: "object-of-your-affection",
    description: "This app is a dating game that sets you up with your true love based on a set of data in an object within an array."
  },
  {
    id: 5,
    name: "unbreak-my-code",
    description: "This app only fixes the code of websites dedicated to the appreciation of Toni Braxton."
  },
  {
    id: 6,
    name: "angelfire-filter",
    description: "This app makes your website look like an angelfire website from circa 2003.."
  }

  ];

// Render to DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
  
// Dynamically render navbar
const navDiv = document.querySelector("#navBar");
const renderedNavbar = 
  `
  <nav class="navbar navbar-expand-lg bg-light">
  <div>
    <button class="navbar-brand" id="overviewButton">Overview</button>
    <button class="navbar-brand" id="repoButton">Repositories</button>
    <button class="navbar-brand" id="projectsButton">Projects</button>
    <button class="navbar-brand" id="packagesButton">Packages</button>
  </div>
</nav>
  `;
navDiv.innerHTML+=renderedNavbar;





// Dynamically render footer
const footDiv = document.querySelector("#footer");
const renderedFooter = 
  `
  this be tha footer!
  `;
footDiv.innerHTML+=renderedFooter;



































// // Dynamically render sidebar
// const sideDiv = document.querySelector("#sideBar");
// const renderedSidebar = 
//   `
//   this be tha sidebar!
//   `;
// sideDiv.innerHTML+=renderedSidebar;

// // Dynamically render footer
// const footDiv = document.querySelector("#footer");
// const renderedFooter = 
//   `
//   this be tha footer!
//   `;
// footDiv.innerHTML+=renderedFooter;

// // Dynamically render Search Form

// const pageType = 'repository'
// const searchFormDiv = document.querySelector("#searchForm");
// const renderedSearch = 
//   `
//   <input class="form-control" type="text" placeholder="Find a ${pageType}" aria-label="default input example">
//   `;
// searchFormDiv.innerHTML+=renderedSearch;


// // Dynamically render New Data Div

// const newDataDivDiv = document.querySelector("#newDataDiv");
// const renderedNewData = 
//   `
//   New Data Div Son!
//   `;
// newDataDivDiv.innerHTML+=renderedNewData;

// // Testing theory for one shared card
// const typeArray = repoArray;
// typeArray.forEach(taco => console.log(taco.description));



const projArray = [
  {
    id: 1,
    name: "Example 1", 
    description: " Example descrip." 
  },
  {
    id: 2,
    name: "my-goals", 
    description: "My goals descrip." 
  },
  {
    id: 3,
    name: "Sample My Goals", 
    description: "Goals for the NSS Bootcamp." 
  }
];
