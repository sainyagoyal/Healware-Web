# Healware

An Artificial Intelligence platform for medical prognosis of severe yet curable disease

## Demo

[Demo deployment](https://healware.herokuapp.com)

## Local Development

Because this app is made of two three projects, there are three places to run `npm` commands:

1. **Node API server** at the root `./`
2. **React UI** in `react-ui/` directory.
3. **Chat server** in `server-run/` directory

### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```

### Run the React UI

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React UI

```bash
# Always change directory, first
cd react-ui/

npm install package-name --save
```

### Run the React UI

In a separate terminal from the two servers, start the chat-server:

```bash
# Always change directory, first
cd server-run/

# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React UI

```bash
# Always change directory, first
cd server-run/

npm install package-name --save
```

# Demo Frontend screenshots:
![landing page](https://github.com/sainyagoyal/Healware-Web/blob/master/react-ui/src/assets/img/healware-demo%20screenshots/1.png)


![auth page](https://github.com/sainyagoyal/Healware-Web/blob/master/react-ui/src/assets/img/healware-demo%20screenshots/2.png)


![models page](https://github.com/sainyagoyal/Healware-Web/blob/master/react-ui/src/assets/img/healware-demo%20screenshots/3.png)


![health calculator model](https://github.com/sainyagoyal/Healware-Web/blob/master/react-ui/src/assets/img/healware-demo%20screenshots/4.png)


![chat window](https://github.com/sainyagoyal/Healware-Web/blob/master/react-ui/src/assets/img/healware-demo%20screenshots/5.png)
