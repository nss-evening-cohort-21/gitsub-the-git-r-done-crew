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
  
// Dynamically rendered navbar
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

renderToDom("#navBar", navString);
};

navDiv.addEventListener('click', taco => {
  if (taco.target.id === 'repoButton') {
    repoOnDom(repoArray);
  }
});

// Puts repo search on DOM
const repoSearch = document.querySelector("#repoButton");
navDiv.addEventListener('click', (garbage) => {
  if (garbage.target.id === "repoButton") {
  const renderedSearch = 
    `
    <input id="ihatethis" class="form-control" type="text" placeholder="Find a repository" aria-label="default input example">
    `;
  renderToDom("#searchForm", renderedSearch);}
})

const repoOnDom = (array) => {
  let domString = "";  // Starts function with empty string
  // Takes material from object and puts it into an HTML card after you click 'repo' button
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

formHolderDiv.addEventListener('click', (pleaseholdmyhand) => {

  pleaseholdmyhand.preventDefault();

  if (pleaseholdmyhand.target.id === "make-repo") {
  const object = {
    id: repoArray.length+1,
    name: document.querySelector("#new-repo-name").value,
    description: document.querySelector("#new-repo-descrip").value
  }
  repoArray.push(object);

  // defines form as an HTML element so it can be reset
  const form = document.querySelector("#i-hate-this-form");

// resets form this project is my greatest failure
  form.reset();

  repoOnDom(repoArray);
  console.log(repoArray);
}
});

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

//adds pkgs on Dom
const packagesOnDom = (array) => {
  let domString = ""; 
  for (const packages of array) {
    domString += `<div class="card flex-wrap" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${packages.name}</h5>
      <p class="card-text">${packages.description}</p>
      <button class="btn btn-primary" >Learn More</button>
    </div>
  </div>`;
  }
  renderToDom("#newDataDiv", domString);
};
const pkgsForm = 
`
<form id="pkgsform">
  <div class="mb-3">
    <label class="form-label">Create new package</label>
    <input type="text" class="form-control" aria-describedby="Package Name" placeholder="package name" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
    <div class="form-text">(optional)</div>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <button type="submit" class="btn btn-success" id="createPackagesBtn">Create packages</button>
</form>
`;
renderToDom("#formHolder", pkgsForm);








//deletes pkg

//if (e.target.id.includes("delete")) {
  //const [, id] = e.target.id.split("--");
  //const index = packages.findIndex(e => e.id === Number(id));
  //const removed = packages.splice(index, 1); 
  //packages.push(removed[0]);
  //packagesOnDom(packages);
  


navDiv.addEventListener('click', event => {
  if (event.target.id === 'packagesButton') {
    packagesOnDom(packages);
  }
});
//Creates package











// Dynamically render footer
const footDiv = document.querySelector("#footer");
const renderedFooter = () => {
  const footString =
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
renderToDom("#footer", footString);
}

const startApp = () => {
  renderedNavbar();
  renderedFooter();
};
startApp(); 




  
 
