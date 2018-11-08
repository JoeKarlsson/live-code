## GraphQL + Mongoose + React Workshop

This repository contains the workshop on creating a GraphQL in JavaScript, first given at Mexico Now in 2018.

### Step 1 - Environment Setup

In this step we'll setup our environment so we can follow the rest of the workshop.

First of all, you'll need to install [Node.js](https://nodejs.org/en/) as well as [Docker](https://www.docker.com/) on your development system.

Next, you'll need to clone this repository onto your local machine:

```bash
git clone https://github.com/JoeKarlsson/graphql-workshop.git -b step-1
```

In the `graphql-workshop` directory, run the following:

```bash
npm install
```

This will install a first set of Node.js libraries we need for both our server and client.

Next we need to setup our database by running this inside the `graphql-workshop` directory:

```bash
npm run start:docker
```

(if this gives you an error you need to setup Docker on your machine correctly)

You can verify with `docker ps` that the instance is running, the output should look like this:

```
» docker ps
CONTAINER ID        IMAGE                              COMMAND                  CREATED             STATUS              PORTS                              NAMES
0ad17dd6f1ea        graphqlworkshop_graphql-workshop   "npm start"              46 seconds ago      Up 48 seconds       0.0.0.0:3000->3000/tcp, 3001/tcp   graphqlworkshop_graphql-workshop_1
469b489d1507        mongo                              "docker-entrypoint.s…"   5 minutes ago       Up 49 seconds       27017/tcp                          graphqlworkshop_database_1
```

To confirm everything is working, go into your web browser and open [http://localhost:3000/](http://localhost:3000/) - you should see a Hello World message like this there:

<img width="730" alt="screen shot 2018-02-20 at 7 47 35 pm" src="https://user-images.githubusercontent.com/4650739/36458928-f395f8ca-1676-11e8-80f9-a9a5295c3d3b.png">

This data is loaded from your database using GraphQL - you're ready to do the workshop now :)

### Step 2 - Efficient Queries

1. Run `git fetch` then `git checkout step-2`
1. Look through the code together
1. Add support for showing the Todos with GraphQL

### Step 3 - Effective Mutations

1. Run `git fetch` then `git checkout step-3`
1. Look through the code together
1. Add support for adding and deleting Todos with GraphQL.

### Step 4 - Hack Time

1. Run `git fetch` then `git checkout step-4`

This gives you all the previous steps completed. Now its up to you :-)

### Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150"
        src="https://avatars.githubusercontent.com/JoeKarlsson?v=3">
        <br />
        <a href="https://github.com/JoeKarlsson">Joe Karlsson</a>
      </td>
    <tr>
  <tbody>
</table>

### License

#### [MIT](./LICENSE)
