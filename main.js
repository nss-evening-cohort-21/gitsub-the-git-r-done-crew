//repos
const pinnedRepos = [
  {
     id: 1,
     type: 'Overview',
     name: "gatsby-workshop",
     description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  },
  {
    id: 2,
    type: 'Overview',
    name: "gatsby-workshop",
    description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  },
  {
    id: 3,
    type: 'Overview',
    name: "gatsby-workshop",
    description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  },
  {
    id: 4,
    type: 'Overview',
    name: "gatsby-workshop",
    description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  },
  {
    id: 5,
    type: 'Overview',
    name: "gatsby-workshop",
    description: "This workshop covers the fundamentals of developing fast, accesible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custom Gatsby sites."
  },
  {
    id: 6,
    type: 'Overview',
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

const randomAdj = [
  'arrogant', 'blithering', 'constipated', 'frisky', 'maniacal', 'quixotic', 'sexy', 'territorial', 'vengeful', 'zippy', 'existential', 'universal', 'nervous', 'toxic', 'fleek', 'sarcastic', 'pliable', 'whimsical', 'loyal', 'youthful', 'trustworthy'
]

const randomNoun = [
  'chariot', 'pleonasm', 'wizard', 'spigot', 'aglet', 'guitar', 'hermit', 'bicycle', 'internship', 'honeysuckle', 'cornucopia', 'loudspeaker', 'zebra', 'malaise', 'xylophone', 'limosuine', 'toothbrush', 'explosion', 'taco', 'grandmother', 'process'
]

const projArray = [
  {
    id: 1,
    name: "Example 1", 
    description: " Example description." 
  },
  {
    id: 2,
    name: "my-goals", 
    description: "My goals description." 
  },
  {
    id: 3,
    name: "Sample My Goals", 
    description: "Goals for the NSS Bootcamp." 
  },
  {
    id: 4,
    name: "Project Example 4", 
    description: "Lorem ipsum dolor sit amet." 
  },
  {
    id: 5,
    name: "Project Example 5", 
    description: "Work in progress." 
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
  
// Main Render to DOM Function called by other functions
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

//cardsOnDom Function
const cardsOnDom = (array) => {
  let domString = "";
  for (const card of array) {
  domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">${card.description}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`;
  }
  renderToDom("#newDataDiv", domString);
  }


const navDiv = document.querySelector("#navBar"); // Creates nav variable for event listeners

// Renders navbar dynamically
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

// filter for navbar
const filter = (array, overViewCardsString) => {
  const overViewArray = [];
  
  for (const card of array) {
  if (card.type === overViewCardsString) {
  overViewArray.push(card);
  }
  }
  
  return overViewArray;
  }

//Projects Button in Navbar
const projectsTopSection = () => {
  const searchProjects = 
    `
    <input class="form-control" type="text" placeholder="Search all projects" aria-label="default input example">
    `;
  let navString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
}

// Dynamically renders form that lets you create a repo
navDiv.addEventListener('click', (mypersonalhell) => {
  if (mypersonalhell.target.id === "repoButton") {
  const adj = Math.floor(Math.random()*randomAdj.length);
  const noun = Math.floor(Math.random()*randomNoun.length);
  const renderedAddRepo = 
    `
    <form id="i-hate-this-form">
      <div>Create a Repository</div>
        <label class="form-label">Repository Name</label>
        <input class="form-control" id="new-repo-name">
      <div class="form-text">
        Great repository names are short and memorable. Need inspiration? How about <strong>${randomAdj[adj]}-${randomNoun[noun]}</strong>?
      </div>
      <div><label class="form-label">Description (optional)</label>
        <input id="new-repo-descrip" class="form-control">
      </div>
    <button id="make-repo" type="submit" class="btn btn-success">Create a Repository</button>
    </form>
    `;
    renderToDom("#formHolder", renderedAddRepo)}
})

const formHolderDiv = document.querySelector("#formHolder");

 //overViewTicker.addEventListener('click', () => {
  //const cardsAreOverView = filter(pinnedRepos, 'Overview');
  //cardsOnDom(cardsAreOverView);
 // });

 //event for clicking and displaying pinnedRepos
 navDiv.addEventListener('click', taco => {
  if (taco.target.id === 'overviewButton') {
    cardsOnDom(pinnedRepos);
  }
});

const pinnedRepoForm = 
`
<form id="form">
  <div class="mb-3">
    <label class="form-label">Create a pinned repository</label>
    <input type="text" class="form-control" id="name" aria-describedby="Repository Name" placeholder="Pinned repository name" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
    <div class="form-text">(optional)</div>
    <textarea class="form-control" id="description" rows="3"></textarea>
  </div>
  
  <button type="submit" class="btn btn-success" id="createPackagesBtn">Create Repository</button>
</form>
`;
renderToDom("#formHolder", pinnedRepoForm);

const overviewForm = document.querySelector('#form');

const createPinnedRepo = (e) => {
  e.preventDefault(); // EVERY TIME YOU CREATE A FORM

  const newPinnedObj = {
    id: pinnedRepos.length + 1,
    type: 'Overview',
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value
  }

  pinnedRepos.push(newPinnedObj);
  cardsOnDom(pinnedRepos);
  form.reset();
}

form.addEventListener('submit', createPinnedRepo);

// start app function
  const startApp = () => {
    renderedNavbar();
  }
  startApp();
