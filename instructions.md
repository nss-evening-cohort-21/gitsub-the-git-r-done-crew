# Foundations Group Project - GitSub Website

## READ THIS ENTIRE DOCUMENT BEFORE STARTING

As a team, build a clone of the GitHub website as outlined below. Be creative and have fun.

**:warning:** DO NOT start coding until an instructor has looked at your Milestones.

## Definition of Done
- All items are completed in getting started
- MVP, defined by the Acceptance Criteria, has been completed
- The title of your application is visible in the browser tab
- The project has been deployed
- Loom video has been created
- `README.md` has been updated

## Acceptance Criteria (Requirements)

### Theme

Use the Github website as a foundation for layout and styles that you will need to try to implement. 

MAKE SURE TO VIEW ALL THE PAGES OF THE WIREFRAME: [Here is the wireframe](https://www.figma.com/file/8vIX1yEXd2UxdWARbWqAje/GitSub?node-id=5%3A20)

* Vanilla HTML, CSS, and JS only
* Your team should be using bootstrap

### Pages
Each team member is going to be responsible for the content of a different page, so decide on the name and content for each of those pages. We know that Githib uses tabs, but we want you to create separate pages with the same styles applied to them for consistency.

Some possible options are:

- Overview page
  - Includes a form that allows a user to add a pinned repository
  - STRETCH GOALS: 
    - Allow users to Delete Pins
    - Create the About area shown in the Wireframe
- Repositories page
  - Includes a form that allows a user to create a new repository
  - STRETCH GOAL: 
    - Allow users to search through the repos using the search bar
    - Allow users to Star Repos
- Projects Page with at least 5 projects listed on the page
  - Includes a form that allows a user to add a new project
  - STRETCH GOALS:
    - Allow users to search through the projects using the search bar
    - Allow users to sort using the sort tool in the wireframe
- Packages Page
  - Includes a form that allows a user to add a package to the list of packages
  - STRETCH GOAL: 
    - Allow users to Delete Packages
    - Allow users to search packages

### Data

Create data objects that you can use for your website. Do not duplicate objects or arrays. If multiple team members need the same data, create one data source for everyone to use.

### Teamwork

Create a Project board for your site and make the columns for 'Backlog', 'Todo', 'Doing', 'Code Review', 'Done'. Create notes for different units of work, make the notes into issues, and assign it to the team members doing the work. When you are assigned to an issue, make sure that you are moving it over to the right column on the board.

### Planning
Your team **MUST** use github projects to track tickets and progress on tickets.

- Create issue tickets for EVERYthing that needs to be completed in your project. There are going to be some elements that you will need to work on as a team and some that you will do as an individual. This is a TEAM project. NO ONE GETS LEFT BEHIND!
- [Create Milestones and team deadlines for issues.](https://docs.github.com/en/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)
- We expect to see detailed wireframes for all different views in your project especially if they are different from the sample wireframes. These wireframes should be included in the appropriate ticket.

### Git
Your team is going to learn how to use git to enable good teamwork when building a software product.

1. Follow the instructions in class to clone down the repo
1. `cd` into the directory that got created.
2. Reference [this discussion ticket](https://community.learnwithdrt.com/c/get-help/git-for-teams-61003eb4-408b-49bb-9080-1b3413c2a8d7) for how to work on teams with github
3. Before anyone on the team writes a single line of code, the team will decide on a branch naming strategy. Branches should be descriptive of the work that is going to be done on that branch. Some teams also decide to add the developer's information to the branch name, such as initials. For example, a developer named Jasmine Sheboygen is going to work on the navbar for the web site. A good name for the branch would be `js-navbar`.
4. Your team already has a README.md file so there is no reason anyone should push to the main branch - LIKE EVER.  Also at some point there should probably exist a good, proper readme with screenshots

Now everyone will work on their page on those individual branches. Once a teammate feels that their work is complete, the teammate will push up their branch to Github and create a pull request. Decide as a group your standard for reviewing and approving pull requests, for example, you may decide that each PR needs one thumbs up from another teammate, you may decide that everyone in the group needs to give it a thumbs up, etc. At the very least, one of the other teammates must review the pull request and give a thumbs up (Just type :+1 in the comment box).

Once the PR gets a thumbs up, the teammate who made the PR should merge the current version of main (the one with all their teammate's fancy additions) to their current working branch. Reference [this discussion ticket](https://community.learnwithdrt.com/c/get-help/git-for-teams-61003eb4-408b-49bb-9080-1b3413c2a8d7).

Now you have all of your work, plus all of your teammate's approved work on one branch. :cool:

### Javascript
* EVERY SINGLE PAGE must include a JS loop of some kind
* All your JS should be written in functions.  Wherever possible reusable functions.

**:warning:** DO NOT start coding until an instructor has looked at your MILESTONES.

### Twists
Your project must include each of the following:
* **Complex Data** - At least 1 of your pages should use a more complex data structure.  This means that one of your arrays should have an array inside each object.  For example:  your repos could have an array of objects called users and each of your users could have an array called socials in it.  You then would have to figure out how to display all the users and their social media in the domString

```js
const usersExample = [
  {
    name: 'Person Name1',
    socials: [
      {
        smName: 'Twitter',
        url: 'https://twitter.com'
      },
      {
        smName: 'LinkedIn',
        url: 'https://linkedin.com'
      }
    ],
  },
  {
    name: 'Person Name2',
    socials: [
      {
        smName: 'Twitter',
        url: 'https://twitter.com'
      },
      {
        smName: 'Instagram',
        url: 'https://instagram.com'
      }
    ],
  }
]
```

* **Dynamic Buttons** - somewhere in your project there should be some dynamically created buttons (NOT IN THE HTML...RENDERED USING JAVASCRIPT) - clicking each button should perform some sort of action
* **Form** - Each page in your project should have at least 1 form.  Submitting that form via a button click should do something.


