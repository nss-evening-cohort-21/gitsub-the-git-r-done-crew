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
  
// Render to DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
  
// Dynamically render navbar
const navDiv = document.querySelector("#navBar");
const renderedNavbar = () => {
  const navString =
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
renderToDom("#navBar", navString)
};

//Projects Button in Navbar
const projectsOnDom = (array) => {
  let domString = "";
  let topString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Open Closed</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </nav>`;
  
  for (const proj of array) {
    domString += `
      <ul class="list-group list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${proj.name}</div>
            ${proj.description}
          </div>
          <span class="bg rounded-pill">•••</span>
        </li>
      </ul>
    `;
    let projString = topString + domString;
    renderToDom('#newDataDiv', projString);  
  }; 
};

//click event to show Projects
navDiv.addEventListener('click', event => {
  if (event.target.id === 'projectsButton') {
    projectsOnDom(projArray);
  }
});









// Dynamically render footer
const footDiv = document.querySelector("#footer");
const renderedFooter = 
  `
  this be tha footer!
  `;
footDiv.innerHTML+=renderedFooter;




const startApp = () => {
  renderedNavbar();
  
};
startApp(); 





























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
