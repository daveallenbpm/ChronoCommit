#ChronoComit

ChronoCommit uses GitHub users' location data and commit history to answer the following questions:
   
* When does a country commit the most during a week?
* What is the most popular language at certain times of the day?

We find the most commits per hour, independent of country, and use it as the maximum in the colour map.

The slider should determine the day and time that is shown on the map. The number of commits will be shown by colour.

## How to use
Simply do 'npm install' followed by 'npm start'. You should then have a service on http://localhost:8000/app/index.html