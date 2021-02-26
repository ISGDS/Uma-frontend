Angular front-end microservice run on localhost:8080, which is the view part of the whole application
Single page application, but every separate 'view' is a different component which is a controller for that specific area.
Services are the 'backend' part of the application, similar like in the java part for every different model there would be different service. So there is again separation of concerns.
Here the entity that is used in the java, is created as model with the same attributes. So the frontend and backend can pass it through between the REST calls.

Versions:
- Angular CLI: 11.1.2
- Node: 14.15.4

- nothing specific for setup, download it from git and run it(ng serve)