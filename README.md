## Using `create-react-app` with React Router + Express.js

Based on : https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d

## Development

Clone this repository:

Install dependencies:

```sh
npm install
```

Start the project at [`http://localhost:3000`](http://localhost:3000).

```sh
npm start
```

## Running with Docker

Be sure to install Docker and start a Docker-machine if necessary.

Let's create an image named `routed-react`:

```sh
docker build -t routed-react .
```

Finally, start a container named `routed-react-instance` at port `80`.

```sh
docker run -p 80:3000 --name routed-react-instance routed-react
```

## Testing

```sh
npm test
```
