# One Desk
<!-- ![logo](https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/zez9iqg8lghajcaq65ai) -->
## [Visit Your One Stop Dashboard ](https://ctmintask.web.app/#/)

# Objective
The objective of the One Desk is to increase User's productivity. Users currently use multiple productivity, task/project management tools which helps to document the process and makes sure the Business Objectives/Personal Objectives are achieved in a productive manner. Due to multiple siloed tools it's difficult for Users to maintain coherence to each tool in day to day operations. One Desk will help Users collate task/action items and work breakdowns from various tools and deliver them to their empployers/Clients in a timely and consolidated fashion. At an Organisation, It will also help the leadership team to monitor capacity and productivity of each employee Individually.




### Tech

One Desk Currently runs on the following tech stack for proper functioning :

* [ReactJS](https://reactjs.org/) - Used for Fronnt-End UI componenets.
* [NodeJS](https://nodejs.org/) - Used for Backend Event Handling
* [Google Cloud Platorm](https://cloud.google.com/) - Used for Gsuite related sevices integration.
* [JIRA Rest API](https://developer.atlassian.com/server/jira/platform/rest-apis/) - Used for Jira Services integration.
* [Confulence API](https://docs.atlassian.com/atlassian-confluence/REST/6.6.0/) - Used for Confluence Services integration.
* [Hubspot API](https://legacydocs.hubspot.com/docs/overview) - Used for Hubspot Services integration.
* [Firestore](https://firebase.google.com/docs/firestore) - Used for Cloud Database Storage.
* [DialogFlow](https://cloud.google.com/dialogflow/docs) - Used for integration of ChatBot.

### Installation (For Developers)

```sh
$ cd OneDesk
$ npm install
$ yarn start
```
### NOTE: Make sure that you are in master branch.

### Deployment
One Desk is live and running [here](https://ctmintask.web.app/#/)

### How to setup for first time!
    - Login with your Google account for Gsuite authorization.
    - Use "Identify yourself" on top right to connect your attlassian account with One Desk.
    - For connecting with Confluence, navigate to confluence icon and "connect to confluence" to establish a 
      secure connection.
    - Same goes for Jira as well.
    - Use "Connect to Hubspot"in Hubspot section for connecting Hubspot account to One Desk.
    - You are done with all setup and now all your assigned tasks will be always there for you on One Desk.

### What can One Desk Do!
    1. Gathers all the tasks from Google Docs, Sheets and Slides in which the user is tagged i.e an 
       assgined task and shows them in the Gsuite section with function to mark the task as complete, go to 
       task and mark the task as starred task.
    2. Assign a priority to the star user's mail available in gmail which you might be intrested in replying.
    3. Shows all your events in the calendar section.
    4. Tasks assigned in Confluence also available with task description, priority and space name along with 
       common One Desk's features to go to task, star task and mark the task as completed.
    5. Tasks assigned in Jira also available with task description, priority and space name along with 
       common One Desk's features to go to task, star task and mark the task as completed.
    6. Tasks assigned in Hubspot also available with task description, priority and space name along with 
       common One Desk's features to go to task, star task and mark the task as completed.
    7. Performs a detailed analysis on user's performance by analysing the completed and pending tasks on the 
       basis of time.
    8. An Admin of the Organisation can see all the User's Analytics data in a Separated Admin Dashboard which is only accessible to the Admin.
    9. User can also set their Priorities By Starring their tasks from different sections.
    10. Anytime access to One Desk's tasks with ChatBot for quick responses.
    

### Todos
    1. Implement a dumper to delete irrelevant data from  data from database.
    2. A fewer optimizations for faster response.
    3. Chrome Extension to get some of vital One Desk's features in Gmail itself.
    4. Improvements in admin dashboard for a detailed analysis of team members.
    5. Some further UI changes for a better user experience.
    6. Integration of assigning Ad-hoc tasks on One Desk itself.
    7. Implementaion of Manager's analytics dashboard So that One can keep a check on his/her team's productivity.


License
----

One Desk

