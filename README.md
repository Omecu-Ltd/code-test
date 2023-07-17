# Omecu Code Test

## The Brief

You are a frontend developer who has been contracted to finish a time-sensitive application for a local marketing agency. The agency has a catalogue of hundreds of models (the Gisele Bündchen kind, not the database kind). For an upcoming video shoot they need to be able to easily find models with specific facial attributes (namely, eye and hair colour). 

The provided code is a well-structured skeleton, complete with tests. In order to fulfil the development work, you need to complete 3 things. These are listed below in the [requirements](#the-requirements).


## The Repository

This code test provided by Omecu has been created in order to see how you tackle the day-to-day problems one might confront at the frontend. We are looking for individuals who ideally have experience with React, Typescript and have a keen eye for design.

This repository is layed out as follows:

```
./src
├── @types
│   ├── models.ts
│   └── mui.ts
├── App.css
├── App.test.tsx
├── App.tsx
├── _mock
│   └── models.ts
├── components
│   ├── Header.tsx
│   ├── ModelCard.tsx
│   ├── ModelsFilter.test.tsx
│   ├── ModelsFilter.tsx
│   ├── ModelsList.test.tsx
│   └── ModelsList.tsx
├── containers
│   ├── ModelContainer.test.tsx
│   └── ModelContainer.tsx
├── index.css
├── index.tsx
├── logo.svg
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
└── theme.ts
```
The elements in the above directory tree that are relevant to you are as follows:

* The `components` directory contains each of the custom React components that make up the application, the rest of the components being from [Material UI](https://mui.com/material-ui/getting-started/).
* The `containers` directory contains the [ModelContainer](./src/containers/ModelContainer.tsx) container. This is where the logic that applies the filter and render of the models resides (or, should reside once you have coded it!)


## The Requirements

There are 3 stages to this code test:

1. The [ModelCard](./src/components/ModelCard.tsx) component should present the attributes that make up a [Model](./src/@types/models.ts) in a visually appealing and functional way. You are at liberty to decide how that should look.
2. Write the filter logic in [ModelContainer](./src/containers/ModelContainer.tsx)
3. Render the filter logic in [ModelContainer](./src/containers/ModelContainer.tsx)

Steps 2 and 3 go somewhat hand-in-hand. It is not necessary to finish this code test. Unfinished code does not mean you are immediately disqualified. Any and all attempts will be reviewed and fairly judged. Your code style, flow and visual style are all equally important attributes to your algorithmic ability so do not be dissuaded should you find the test a challenge. 

Working Example:

https://cdn.omecu.com/code-test.mp4

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Contact

Any questions or issues regarding the test, please direct them [here](mailto:euan.cowie@omecu.com)
