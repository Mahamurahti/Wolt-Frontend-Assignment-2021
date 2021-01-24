# Wolt-Frontend-Assignment-2021
Assignment brief for junior developers 2021. Frontend version.
 
# My implementation
 
My goal was to make a simple version of the view with React. React was also mandatory.
 
# Setup
 
Easiest to install with Node and React. Run the command "npm start" when you have the correct folder selected
( /wolt-frontend ). The live server will open to ( http://localhost:3000/ ), where you can review the result.

# Overview

In 2017 we added a new view to the Wolt App, known as Discovery. The view mixes curated and automatically generated 
content, like banners, articles, videos and lists (e.g. “Popular restaurants”, “New restaurants”). Discovery 
is customized for each user based on their location, personal preferences and order history.

In this assignment you get to follow in the footsteps of Wolt developers and create a Discovery page, although 
a much simplified version (we don’t want you to spend hundreds of hours on this task 😀).

In the backend version you will generate new / popular / nearby restaurant lists from the given data by taking the 
location of a customer into account. The frontend task is about rendering such content as horizontal carousels. You 
will also get to use one of our popular open source libraries, Blurhash in the frontend version.

It should take about 4-8 hours to complete this assignment. However, the best way to make your assignment really stand 
out is to finish it with care - the last 10% is often the most important part of any software project.

# Frontend Assignment

discovery_page.json in the repository has the following structure.

```
{
   "sections": [
      {
           "title": "Popular Restaurants",
           "restaurants": [...10 restaurant objects...]
      },
      {
           "title": "New Restaurants",
           "restaurants": [...10 restaurant objects...]
      },
 	{
           "title": "Nearby Restaurants",
           "restaurants": [...10 restaurant objects...]
      }

   ]
}
```
Your task is to render this page on the screen.

There are four rules for rendering the page:

- Each section (title + restaurants-list fields) must be shown as a horizontal carousel (with the title visible). 
The user needs to be able to scroll the carousel to both directions.
- Each carousel can have max. 5 elements visible on screen (at the same time).
- Each restaurant object is rendered with a title, blurhash and online fields.
- Carousels scroll infinitely, so when the user reaches the last element, it starts from the beginning (or vice versa).
Otherwise you can freely decide everything, from the layout to image sizes.

Instead of real images we are using a technology known as BlurHash. This algorithm for representing images with a 
few dozen chars was created by Wolt's iOS engineer Dag Ågren in 2017. You can use react-blurhash or Blurhash 
TypeScript library when rendering these values (..if you want to save some development time 😉). Blurhash values in 
the discovery_page.json were generated from 480x270 (16:9) images.
