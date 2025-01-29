# warmup_spike

Basic project to interact with data contained in a remote data source.

* Hosted on render: https://spike-frontend.onrender.com
* Avaliable until Feburary 27, 2025.

---

### By Philip Lee

---


### Timeline

Start Date: Jan 16, 2025

Finish Date: Jan 28, 2025

Hours Spent: 10


### Resources Used
* Django Documentation
* React Documentation
* Render Documentation
* Postgres Documentation
* GitHub Copilot Assistance

### Features
* Starting Page: displays instructions and buttons to start the game.
* Circle Page: click 5 circles to progress to the next page.
* Square Page: click 5 squares to progress to the next page.
* Triangle Page: click 5 triangles to finish the "game".
* Timer on each page to track total time spent.

### Known Bugs
* Switching pages may display a bit of latency before shapes are loaded.
* Future improvements could include a loading screen to mask this latency, or make
use of prefetching the database to load shapes before they are displayed.

### Notes
* This project is deployed as both a static site and a web server.
* The static site is built off of React and is hosted on Render.
* The web server is built off of Django and is hosted on Render as well.
* Postgres is used as the database for the web server, fetching the number of shapes for
each level.

### Impressions
* This project was a great way to get started with React and Django.
* Learning how to deploy a web server was a great experience.
* There can be better finetuning in terms of the admin panel and the database.

