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
    name: "angelfire-filter",
    description: "This app makes your website look like an angelfire website from circa 2003.."
  }
]

// Render to DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
