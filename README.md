# Times
### A NY Times top stories display app

## Table of Contents
- [Introduction](#introduction)
- [Deployed Page](#deployed-page)
- [Screenshots](#screenshots)
- [Accessibility](#accessibility)
- [Learning Goals](#learning-goals)
- [Technologies and Tools](#technologies-and-tools)
- [Project Reflections](#project-reflections)
- [Roadmap](#roadmap)
- [Contributors](#contributors)
- [Sources](#sources)
- [Project Specs](#project-specs)

## Introduction
#### Welcome to Times, an assignment meant to mimic a take-home exercise one might be assigned as part of a technical interview.
- In a maximum of 8 hours over 3 days, I was tasked with building a React app that consumed the NY Times Top Stories API to display sections, articles, and the details of a specific article, to a user.

## Deployed Page
- Visit the published site [here](https://times-dstavis.vercel.app/)

## Screenshots

#### Section Page (all stories from one section)
<img width="600" alt="Section page" src="https://user-images.githubusercontent.com/3654471/201723759-a27d431e-b7c5-4043-b459-b62c8bbafaf9.png">


#### Article Detail Page (one article)
<img width="600" alt="Article detail page" src="https://user-images.githubusercontent.com/3654471/201169010-f251fc7c-38b4-46ab-800d-fb220f5212f1.png">

#### Error Handling
<img width="600" alt="404 route" src="https://user-images.githubusercontent.com/3654471/201723599-1c2004c1-41ec-47da-a707-b382600c5a88.png">


----

## Accessibility
#### Lighthouse results
![Lighthouse results](https://user-images.githubusercontent.com/3654471/201723420-b29f0ddb-4b14-4244-b303-dd0c5ffeddc4.png)

## Learning Goals
Use the technology we have been working with over the course of the module to demonstrate mastery of the following:
- React.js
- Third-party Web APIs
- React-router

## Technologies and Tools
<div align="center">
<table>
<tr>
<td>

- ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![NPM](https://img.shields.io/badge/NPM-%F0%9F%91%BE-orange)

  
</td>

<td>

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
- ![RESTful API](https://img.shields.io/badge/RESTful%20API-%E2%8E%94-brightgreen)

</td>

<td>

- ![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
- ![Vercel](https://user-images.githubusercontent.com/101746747/188785090-4abee495-4f46-4dba-b554-e16ded576297.png)


</td>

</tr>
</table>
</div>

## Project Reflections
#### Wins
- Made all pages url-shareable and navigable using React Router v6

#### Challenges
- Making the Article Detail page shareable and navigable required using the Article Search API in addition to the NYTimes Top Stories API. The Top Stories API ONLY allows lookup by section title, and doesn't allow the lookup of individual articles.

## Roadmap
Future features could include:
- Madlibs-ify an article

## Set Up
1. Fork this repo
2. Clone the repo to your local machine
3. `cd` into the root of the project directory
4. Run `npm install`
5. Run `npm start`

## Contributors

David Stavis    
 [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/dstavis/)  [![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dstavis)

## Sources
 - [NYTimes Top Stories API documentation](https://developer.nytimes.com/docs/top-stories-product/1/overview)
 - [NYTimes Article Search API documentation](https://developer.nytimes.com/docs/articlesearch-product/1/overview)
 - [Project Board on Trello](https://trello.com/b/bj2bHnSe/times)
 
 - [MDN](http://developer.mozilla.org/en-US/)
 - [React JS](https://reactjs.org/)
 - [Router docs](https://reactrouter.com/)
 - [Cypress docs](https://docs.cypress.io/guides/overview/why-cypress)

## Project Specs
 - The project spec & rubric can be found [here](https://mod4.turing.edu/projects/capstone/)
