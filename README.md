# Football API

### Background
> This is a sample **ExpressJS** project consuming a Football open **API** from *https://apifootball.com/* . 
> I'm using express.router to define the routes, and https to make service calls to the **API**.
> This project has a docker configuration that enables it to be hosted on a local running **docker** instance.

### Objective
>
> - Using **ExpressJS** to expose APIs
> - Using **https** to make service calls
> - Creating a **Docker** image and a container, host the project locally, then run the hosted project directly from the local **Docker** instance
>

### Exposed services

#### ***GET*** /api/football/teams 
> Returns a list of the teams within the free-tier league

#### ***GET*** /api/football/teams/:teamid
> Returns a team by ID

#### ***GET*** /api/football/players/:playerName
> Returns a player by player name. **NB: ** Only limited players can be queried due to my price-plan

#### ***GET*** /api/football/get_leagues_by_country/:country
> Returns leagues available in the provided country id



Author: [Lucas Nkoana](https://www.linkedin.com/in/lucas-nkoana-0653b674/)

