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

]
  
const repoArray = []

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
  };

  const newDataDiv = document.querySelector('#newDataDiv');

  const cardsOnDom = (array) => {
    let domString = "";
    for (const card of array) {
      domString += `<div class="card w-75">
      <div class="card-body">
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text">${card.description}</p>
      </div>
    </div>`;
    }
    
    renderToDom("#newDataDiv", domString);
    }

    cardsOnDom(pinnedRepos);
