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
    description: "This app is a text-based RPG that takes you on a quest down the halls of the legendary Nashville Software School.  Ever since the pandemic, the NSS doors have been closed and a mysterious entity has been growing in the shadows..."
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

const randomAdj = [
  'arrogant', 'blithering', 'constipated', 'frisky', 'maniacal', 'quixotic', 'sexy', 'territorial', 'vengeful', 'zippy'
]

const randomNoun = [
  'chariot', 'pleonasm', 'wizard', 'spigot', 'aglet', 'guitar', 'hermit', 'bicycle', 'internship', 'honeysuckle'
]

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

// Render functions to DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
  
// Dynamically render navbar
const navDiv = document.querySelector("#navBar");

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
navDiv.innerHTML+=navString;

// Puts repo search on DOM
const repoSearch = document.querySelector("#repoButton");
repoSearch.addEventListener('click', () => {
  // const searchFormDiv = document.querySelector("#searchForm"); // Puts search bar on top of card
  const renderedSearch = 
    `
    <input class="form-control" type="text" placeholder="Find a repository" aria-label="default input example">
    `;
  // searchFormDiv.innerHTML+=renderedSearch;
  renderToDom("#searchForm", renderedSearch);
})

const repoOnDom = (array) => {
  let domString = "";  // Starts function with empty string
  // Turns each first year object into an HTML card after you click 'repo' button
  for (const repo of array) {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title repo-name">${repo.name}</h5>
      <p class="card-text repo-description">${repo.description}</p>
      </div> 
    </div>
    `; 
    }
  // Renders HTML cards onto the DOM
    renderToDom("#newDataDiv", domString);
  }

// Displays Repos when you click on 'Repositories' in Navbar
const showRepo = document.querySelector("#repoButton");
showRepo.addEventListener('click', () => {
  const quesadilla = repoArray;
  repoOnDom(quesadilla); // repo button clicked, function called w/in another function
})


// Dynamically renders form that lets you create a repo
const addRepoForm = document.querySelector("#repoButton");
addRepoForm.addEventListener('click', () => {
  const adj = Math.floor(Math.random()*10);
  const noun = Math.floor(Math.random()*10);
  const formHolderDiv = document.querySelector("#formHolder");
  const renderedAddRepo =
    `
    <div><div>Create a Repository</div>
    <label id = "new-repo-name" class="form-label">Repository Name</label>
    <input class="form-control">
    <div class="form-text">
    Great repository names are short and memorable. Need inspiration? How about <strong>${randomAdj[adj]}-${randomNoun[noun]}</strong>?
    <div><label id = "new-repo-name" class="form-label">Description (optional)</label>
    <input class="form-control"></div>
    </div>
    `;
  formHolderDiv.innerHTML+=renderedAddRepo;
})






// Dynamically render footer
const footDiv = document.querySelector("#footer");
const renderedFooter = 
  `
  <nav class="navbar navbar-expand-lg bg-light">
  <div id="copyright">
    <em>© 2022 FakeBook, Inc. </em> 
    <a href="#">Terms</a>
    <a href="#">Privacy</a>
    <a href="#">Security</a>
    <a href="#">Status</a>
    <a href="#">Help</a>
    <a href="#">Contact FakeBook</a>
    <a href="#">Pricing</a>
    <a href="#">API</a>
    <a href="#">Training</a>
    <a href="#">Blog</a>
    <a href="#">About</a>
  </div>
  </nav>
  `;
footDiv.innerHTML+=renderedFooter;



const startApp = () => {
 
  repoSearch();
  addRepoForm();
};

startApp();




































 
