# Hotels

A simple app to search the ideal hotel for you

[![Maintainability](https://api.codeclimate.com/v1/badges/700526c3b2917955da39/maintainability)](https://codeclimate.com/github/thomaserian/hotels/maintainability)
[![thomaserian](https://circleci.com/gh/thomaserian/hotels.svg?style=svg&circle-token=b23b98cfb1591a3f79f8c347799af73c3f58f39d)](https://app.circleci.com/pipelines/github/thomaserian/hotels)
[![thomaserian](https://circleci.com/gh/thomaserian/hotels.svg?style=svg&circle-token=3dae88500bdd4706eeacd3c2d0e0a55e17161538)](https://app.circleci.com/pipelines/github/thomaserian/hotels/15/workflows/645ed424-599e-4ecf-bb93-f025ae90066a/jobs/17/artifacts)

## Notes
please note that the actual Json project is down since i received the task so i created a fake data file with the
same structure as the orignal response and i used the timeout function to mimic the behaviour of async calls
but you can uncomment the code that makes the actual call then it should work fine if the server is back

i assumed that there is no need to make authentication,ssl or validation on requests but in a real project
this will all be required for sure 

i also assumed that i am only allowed to used javascript built in functionalities for sorting , testing equality ,etc ....

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

first deployment option

1-docker must be installed on your machine (linux os is prefered)

second deployment option

1-node and npm must be installed on your machine

### Installing

first deployment option

1-Open a terminal window and type:
  sudo apt-get update

2-Uninstall Old Versions of Docker
  sudo apt-get remove docker docker-engine docker.io

3-Install Docker
  sudo apt install docker.io

4-Start and Automate Docker
  sudo systemctl start docker
  sudo systemctl enable docker

5-docker --version

second deployment option

1-Open a terminal window and type:
  cd /path-of-the-project

2-install dependencies
  npm install

3-install pm2
  npm install pm2 -g

## Running the tests

first deployment option

1-no need to run tests as they will run automatically by docker

second deployment option

1-npm test


## Deployment

first deployment option
1-npm run (deploydev or deploystg or deployprod)

second deployment option
1- pm2 start ./app.config.js --env (dev or stg or prod)

## Testing app

examples

1-http://127.0.0.1:2000/api/v1/inventory?name=Media%20One%20Hotel&destination=dubai&availableFromDate=10-10-2020&availableToDate=13-10-2020&sortByPrice=1&priceSortOrder=asc&sortByName=1&nameSortOrder=desc&priceFrom=100&priceTo=300

Note: you can try all possible combinations for these optional query params

## Authors

* **Thomas Erian** - *Initial work* - [thomaserian](https://github.com/thomaserian)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
