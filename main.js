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

const randomAdj = [
  'arrogant', 'blithering', 'constipated', 'frisky', 'maniacal', 'quixotic', 'sexy', 'territorial', 'vengeful', 'zippy', 'existential', 'universal', 'nervous', 'toxic', 'fleek', 'sarcastic', 'pliable', 'whimsical', 'loyal', 'youthful', 'trustworthy'
]

const randomNoun = [
  'chariot', 'pleonasm', 'wizard', 'spigot', 'aglet', 'guitar', 'hermit', 'bicycle', 'internship', 'honeysuckle', 'cornucopia', 'loudspeaker', 'zebra', 'malaise', 'xylophone', 'limosuine', 'toothbrush', 'explosion', 'taco', 'grandmother', 'process'
]


// Main Render to DOM Function called by other functions
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

//****************  QUERY SELECTOR **************** //
const navDiv = document.querySelector("#navBar"); // Creates nav variable for event listeners


// *************** NAV BAR *************** //
// Renders navbar dynamically ************* //
// *************** NAV BAR *************** //
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


// ************ PLEASE WRITE OVER ME *************** //  
// ************ SIDEBAR GOES HERE *************** //
// ************ REPLACE HTML PLS *************** //
const rederedSidebar = () => {
  const sideString = `
  <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">SIDE BAR PLEASE REPLACE ME.</p>
  </div>
</div>
`;
  renderToDom("#sideBar", sideString)
};



//****************  QUERY SELECTOR **************** //
const formHolderDiv = document.querySelector("#formHolder");

// ***************** REPO ARRAY ****************** //
// ***************** REPO ARRAY ****************** //
// ***************** REPO ARRAY ****************** //

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
        <input class="form-control" id="new-repo-name" required>
      <div class="form-text">
        Great repository names are short and memorable. Need inspiration? How about <strong>${randomAdj[adj]}-${randomNoun[noun]}</strong>?
      </div>
      <div><label class="form-label">Description (optional)</label>
        <input id="new-repo-descrip" class="form-control" required>
      </div>
    <button id="make-repo" type="submit" class="btn btn-success">Create a Repository</button>
    </form>
    `;
    renderToDom("#formHolder", renderedAddRepo)}
    
})





// ************** OVERVIEW BUTTON / PINNED REPOS  ************** //
// ************** OVERVIEW BUTTON / PINNED REPOS  ************** //
// ************** OVERVIEW BUTTON / PINNED REPOS  ************** //


//cardsOnDom Function for Pinned Repos Array
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

 //event for clicking and displaying pinnedRepos
 navDiv.addEventListener('click', taco => {
  if (taco.target.id === 'overviewButton') {
    cardsOnDom(pinnedRepos);
  }
});

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

  

// ****** CREATE NEW PROJECT BUTTON FUNCTION ****** //
// to create unique ID. ticket explained: https://github.com/orgs/nss-evening-web-development/discussions/126 
const createId = (array) => {
  if (array.length) {
    const idArray = [];
    for (const el of array) {
      idArray.push(el.id);
    }
    return Math.max(...idArray) + 1;
  } else {
    return 0;
  }
};


// ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** //
// ****** ****** CLICK EVENT FOR FORM DIV aka #formHolder below our "cardsOnDom"  ****** ****** //
// ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** //

formHolderDiv.addEventListener('click', (pleaseholdmyhand) => {

  pleaseholdmyhand.preventDefault();

  // ************** A PART OF REPOSITORIES BUTTON ************ //
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

  // ********** A PART OF PROJECTS BUTTON ************* //
  // ****** CREATES NEW PROJECT BUTTON ****** //
} else if (pleaseholdmyhand.target.id === "projectsubmit") {    
  const newProjObj = { 
    id: createId(projArray), //students.length + 1, 
    name: document.querySelector("#projname").value,
    description: document.querySelector("#projectdescription").value, 
  }; 
    
    projArray.push(newProjObj);
    // const form = document.querySelector("#projform");
    // form.reset(); 
    projectsOnDom("#newDataDiv", projArray);

// you can't add an event listener, to something that hasn't been rendered
//Add an event listener for the form submit and pass it the function (callback)
    }
  }
);

// ****** ****** ****** ****** ****** ****** ****** ****** //
// ****** ****** projectsButton IN navBar ****** ****** //
// ****** ****** ****** ****** ****** ****** ****** ****** //


//Projects Button in Navbar
const projectsTopSection = () => {
  const searchProjects = 
    `
    <input class="form-control" type="text" placeholder="Search all projects" aria-label="default input example">
    `;
  let navString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
  const upperString = searchProjects + navString;
  renderToDom("#searchForm", upperString);
};

const projectsOnDom = (aDiv, array) => {
    let projString = ""; 
    for (const proj of array) {
    projString += `
      <ul class="list-group list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${proj.name}</div>
            <div class="form-text">Updated some future property ago</div>
            ${proj.description}
          </div>
          <span class="bg rounded-pill">•••</span>
        </li>
      </ul>
    `;
    };
    renderToDom(aDiv, projString);  
  };
  
  const projectsBottomSection = () => {
    const projForm =
    `
    <form id="projform">
      <div class="mb-3">
        <label class="form-label">Create a new project</label>
        <input type="text" class="form-control" id="projname" aria-describedby="Project Name" placeholder="Example 2" required>
        </input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
        <div class="form-text">(optional)</div>
        <input type="text" class="form-control" id="projectdescription" rows="3"></input>
      </div>
      
      <button type="submit" class="btn btn-success" id="projectsubmit">Create project</button>
    </form>
    `;
     
    renderToDom("#formHolder", projForm); 
  }; 

//click event to show Projects 
navDiv.addEventListener('click', event => {
  if (event.target.id === 'projectsButton') {
    projectsTopSection();
    projectsOnDom('#newDataDiv', projArray);
    projectsBottomSection(); 
    }
  }
);


// **************** PACKAGES ******************* //
// **************** PACKAGES ******************* //
// **************** PACKAGES ******************* //

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






// *************** FOOTER ************** //
// ***** Dynamically render footer ******//
// *************** FOOTER ************* //

// Dynamically render footer
//const footDiv = document.querySelector("#footer");
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
renderToDom("#footer", footString)  
};




// start app function
const startApp = () => {
  renderedNavbar();
  rederedSidebar();
  renderedFooter();
}
startApp();
