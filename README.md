# react , redux and firebase : 
## trinds usage : 
  - react : to create the app 
  - redux 
  - thunk : to work inside redux to help us in asynchronous code 
  - firebase : for the backend services.
  - firestore : for data storage .
  - authintications , cloud functions and hosting.
 
 ### planning the App : 
 App(root) => Nav => [signed in links , signed out links]
 
 in the App(root) => 
 [
 {dashboard: / or /dashboard, 
 component : 'Project List', 'Notifications'},
 {project Details : /project/id},
 {create project : /create},
 {sign in : /signin},
 {sign out : /signout}
 ]
 
 ### app Sides : 
   1- client Side => React App => redux.
   2- server side => Firebase => (
                                   firestore,
                                   Firebase Auth,
                                   cloud Functions
                                   )
###  Setting up : 
  1- npx create-react-app marioplan
  2- set up all the deffirent component
  3- using matrializecss thats provide classes to make our pages look a bit nicer
  (from the matiralizescss site take the link and add it to the index.html)
  4- install react-router-dom
  5- import BrowserRouter from react-router-dom
  6- surround the app component with BrowserRouter componeee
  
### Navbar Component : 
1- create navbar component and import Link from react-router-dom (to redierct the user in a particular route) and import the signedInLinks and signOutLinks .

2- import the navbar comp in the app comp.

3- create signedInLinks comp and signOutLinks comp and use NavLink form react-router-dom(that way we get access to the active calss when a certin link is active on the page)

### Dashboard Component: 

1- create Dashboard comp and add style calsses using matiralezcss and create notifications comp and nest it in the dashboard.

2- create and style ProjectList comp with static data  and import it in the dashboard comp 

3- in the app using Switch Comp underneath Nav comp to make sure that only one route is loaded up at the time and that route is first that react matches 

4- add routes to the app using Route comp with path and component attribute in side the switch comp.


### Project Summary Component: 
 1- in the projectList comp its not efficient to repeate ourselves and not very moduler so instead all static data create a ProjectSummary comp and import it inside the projectList comp .
  
### Project Details Component : 
1- what we want to happen when the user click on ths summeries in the projectList and the dashboard is we direct him to the project details comp.

2- the route for these summeries is 
    /project/id

3- create ProjectDetails comp and style it using matirailezcss classes.(in the comp we want to show the project details includes the user how create the project and the time stamp )

4- import the project details comp in the app comp to make a route for it with (path = '/project/:id' component={projectdetails})

5- we need to use exact in side the route '/' to prevent the dashboard comp to diplay because the pathes is mathes also 

6- we need to detect the id form the path in the projectDetails comp , when we use Route the give the projectDetails comp all router props,
so we need to catch the params from match inside the props 
const id = props.match.params.id 

### Login & Signup Components : 
1- create sginin comp as a class base comp. because we need to use the local state in the comp 

2- create a form inside the comp in add the required inputs and add onSubmit and onChange functions to the form and inputs

3- import the signin comp in the app comp with path '/sginin'.

4- add the js link for materialezcss inside the html.index to make layout of the input looks better

5- create the signup comp as the signin comp.

6-  import the sginup comp in the app comp with path '/sginup'.

### Create Project Form : 

1- create the createProject and style it as a form with class base comp.

2- import it in the app and add it as a route in switch with path '/create'.

### Nav Links & CSS : 

1- edit the pathes in the nav comp to the right pathes istead of '/'.

2- add backround image to the app in the css file 

### Adding Redux & Reducers : 
1- install redux and react-redux(npm i redux react-redux)

2- create our store 
  * in the index.js import createStore from redux
  * invok that function const store = createStore().
  * pass to the store function the rootReducer (after creating it and importing it ).
  * create store folder and inside it create reducer folder 
  * in the reducer folder create authReducer 
3- in the authReducer file create a authReducer function that it take two parameter (state and action)
and we need to pass the initial state becase the first time the reducer runs the state will not be active yet :
const initState = {}
const authReducer = (state = initState, action) => {
return state;
}
and export it 
4- create the projectReducer as the same of authReducer
5- create the rootReducer file and import the reducers files and import {combineReducers} from redux
6- pass the reducers to the combineReducers and call them as so :
const rootReducer = combineReducers({auth: authReducer, project: projectRducer})
and export the rootReducer.
7- import rootReducer in the index.js and pass it into the store
8- surround the app comp by provider after importing it from react-redux to let the app has the access to the store and add the store to provider comp : <Provider store={store}><App /></Provider>


### Adding Dummy Data : 
1- in the projectReducer , add in the initState an array of objects have data about the project 
[{id: 1, title: first project , content: bla bla bla }, ...]

2- access the data from dashboard component : 
  * import { connect } from react-redux as a higher order component and this function take two parameters 
    mapStateToProps and mapDispatchToProps
    export defult connect(mapStateToProps, mapDispatchToProps or null)(Dashboard)
  * definded the mapStateToProps as a function take the state as a parameter and return a object with keys for the data that we want from the state 
  const mapStateToProps = (state) => {
  return {
      projects : state.project"the name of reducer".projects"the name of key inside the state of reducer"
      }
  }
  * the project is exist in the props of the component and we can pass this data to projectList comp then pass the project data to the summaryProject comp .

###  Using Thunk : 
With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store.

1- install redux-thunk ind import it in the indexjs

2- we need to apply this middleware to our store 
  * import {..., applyMiddleware} from redux
  * use this function inside the createStore function and pass to it the thunk middleware
    const store createStore(rootReducer, applyMiddleware(thunk))
    
3- inside the store folder create the actions folder and create projectActions file
    and inside it create createProject function that present the action that take a project as parameter and return an object that contain type : 'ADD_PROJECT' and project: project.
    
4- But now when we use thunk we can return a function instead of object and we can take parameters for this function like (dispatch , getState ) and inside this function we can do some async code and dispatch the action like so : dispatch({type : 'ADD_PROJECT', project "payload"})

5- inside createProject comp. 
    * first import the action 
    * second import connect from the react-redux
    * applay the connect to the component in export defulte connect()(CreateProkject)
    * declear mapDispatchToProps function that take dispatch method as a parameter and return an object include methode to use dispatch with the action that we already import 
    like so 
    const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (project) => dispatch(createProject(project))
        }
    }
    * we need to pass mapDispatchToProps to connect functio
        export defulte connect(null , mapDispatchToProps)(CreateProject)
6- now inside the handleSubmit method we can use access to this function from the props 
    this.props.createprojcet(this.state or project).

7- inside the projectReducer we need to take the action 
    * first we need to check the action type using switch statement 
    switch(action.type){
    case 'ADD_PROJECT' : 
    console.log(action.project)
    }
    
### Creating a Firebase Project: 
1- going to firebase.google.com and sign in and go to your console and add a new project 
2- add firebase to our project by clicking on 'add firebase to your app icon' and copy initialize firebase config code 
3- in the app 
    * install firebase npm i firebase
    * create config foleder and create fbConfig.js and paste 
    * we need to import firebase from 'firebase/app' because we dont need everything in firebase 
    * import 'firebase/firestore'.
    import 'firebase/auth'.
    in end of file we need to initialize the firestore 
        firebase.firestore().sittings({timestampInSnapshots : true}) 
    this update in the firebase which changes how firebase works with time stamps
    * new we can export the firebase : export defule firebase .

### Firestore Data & Collections: 
firebase is NoSQL database and it deals with collection and documents and each collection contain documnets 
in our app we will have a projects collection and contain docs each doc present a project 
we will use three collections "projects , users and notifications"
now to create this in firebase go to database and start it in test mode 
1- in the databse add collection call projects and add some fealds to it 

### Connecting Redux to Firebase: 
we wnat enteract with firestore , we could use the normal firebase library but instead we want to install a packages specifically designed for redux and firebase to work together in synergy, called react redux firebase and redux firestore;
1- install these packages : npm install --save react-redux-firebase@2.1.8
npm install --save redux-firestore@0.5.7

2- open the index.js in the createStore line and import somthing from packages 
  * import {getFirestore} from 'redux-firestore'.
  * import {getFirebase} from 'react-redux-firebase'.
  * and we can apply it to thunk middlwhare by using thunk.withExtraArgument({getFirestore, getFirebase}) method and pass these functions to the method 
  * now we can access this argument in the action becuse thunk let us to return a function 
   as so return (dispatch, getState, {getFirestore, getFirebase}) => ...
  * now we want to tell these packages about our project and connect it to it 
3- we can connect the app with the packages using store inhancers 
  * when we applay thunk middleware , this return a store inhancer so we can add multiple store inhancers to the store using compose so import {compose} from redux;
  * so we have three store inhancers to compose to our store : 
  first import fbConfig object;
  and import reactReduxFirebase from 'react-redux-firebase'
  and import reduxFirestore from 'redux-firestore'
  
   const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), // first store inhancer 
    reduxFirestore(fbConfig), // second store inhancer 
    reactReduxFirebase(fbConfig, { // third store inhancer 
      useFirestoreForProfile: true,
      userProfile: 'users',
      attachAuthIsReady: true,
    })
  )
);

now the packages know what project to connect with 

### Adding Data to Firestore: 
in the createProject action 
1- we need to initialize the firestore and firebase 
    const firestore = getFirestore();
    const firebase = getFirebase();
2- connect firestore to the projects collection
    firestore.collection('projects') // this as a ref to the collection 
3- add a new doc to the collection based on project details 
     firestore.collection('projects').add({
     ...project,
     auhorFirstName: 'fadi',
     authorLastName: 'omar',
     auhorId: '123',
     createAt:new Date()
     })

4- now we dont want to dispatch the action antile this function done , this return a promise so we can put the dispatch function in then . and in the catch dispatch err action 

5- in the projectReducer we need to handle the actions using switch one for 'ADD_ROJECT' and other for 'CREATE_PROJECT_ERR'.

###  Syncing Data with Firestore : 
we want to output the data from firebase into our app , so we need to sync up our redux state to database , we can do this manually using the firebase library , but we can use the packages in easer way .
1- in the rootReducer 
  * import {firestoreReducer} from redux-firestore
  * add to combineReducer method new key for firestore 
      combineReducer({... , firestore: firestoreReducer})
2- in the dashboard comp we need to connect the firestore reducer with a single collection , projects collection 
  * import {firestoreConnect} from 'react-redux-firebase' and we will use it as a higher order component 
  * but we already use connect for redux as a higher order component so we need to use two higher order component so the way to use two H.O.C is to use compose from redux as so 
   export default compose(
  connect(mapStateToProps),
  firestoreConnect([
  {
      collection: 'projects',
      orderBy: ['createAt', 'desc'],
    }]
    )
)(Dashboard);
  * so now we can see and access the porjects form database in the porps inside firestore proprty and we can map this data to the props so in the mapStateToProps {porject : state.firestore.ordered.projects}.

### Project Details Data : 
so in the projectList component we need when click on single project it will show it's details so 
1- import Link from react-router-dom and srrund the projectSummary comp by the link comp and redirect to={project/:id} and id we can access it from project.id
2- now we have the project id and we want to grap the data for this project from database so in the projectDetails comp. we need to connect it to firebase and we need to connect it to redux state too , so we will use compose here 
  * first const mapStateToProps = (state, prevProps) => {
      const { id } = prevProps.match.params;
      const { projects } = state.firestore.data;
      const project = projects ? projects[id] : null;
      return {
          project,
      }
  }
  
  * export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
    

### Firebase Auth Intro : 
firebase Auth service (Email , UID, photo URL, display Name)
and if we need to store a custom info about the user , we should store it in the users collection in the database 
1- going to auth. in firebase and set up amethod for sign in
2- add a test user in the users tab 

### Firebase Auth with Redux: 
we need to be able keep track of user's auth. status are they loged in or not because we want to show different content dependent on that status so we want to senk the auth state to our state,we will sync the auth like firestore in the rootReducer 
so as in the firestore 
  * import {firebaseReducer } from react-redux-firebase
  * and add it to the combineReducer ({..., firebase:firebase Reducer});

we will use it in the Nav comp. 
1- we need to connect to the state so import connect 
2- mapStateToProps => (state) => {auth: state.firebase.auth} 

### Logging Users In : 

in the Login Component we want to take the user and it's password to sgin in and to that we need to make asynchronanus requset to firebase, we can do the asynchronuns in the action creater so let's make an action creater for signIn so 
1- in store folder in the action folder create authActions.js 
2- expoert a new const for signIn func and take userInfo as parametr and return a function take dispatch and getState and the third object for arguments to getFiremase 
3- inside this function we need to initialize our database
4- and using auth method and signInwithEmailAndPassword method and this method take the email as first parameter and password as a second parameter and this method return a promise so in then we can dispath an action with type 'LOGINSUCCESS' and in catch we can dispatch an action with type 'LOGIN_FAIL' and the err it self as a second parameter 
as so export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR' }, err);
      });
  };
};

5- now lets handle this action in the reducer so inside the authReducer using switch state take the action type as a condition 
  * in case of LOGIN_FAIL we will return an object with seperd the state with auth_err key contain 'login err'
  * another case for LOGIN_SUCCESS will return object wtih seperd the state wiht auth_err key contain null
6- we need to call this action inside SignIn comp
  * first mapDispatchToProps to have ascess to the state we need conect and import the action
  * then in mapDispatchToProps dispatch the the action passing the email and password 
  * and use mapStateToProps to access the state and return the auth err in case we have an error 
  * and in the auth after in receved in props we can see who is logged in 
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDespatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDespatchToProps)(SignIn);

### Logging Users Out : 
we can sign out the user from our app so first of all 
1- create signOut function return a function take dispatch and getState and the third object of arguments to access the firebase 
2- after initialize our firebase we can use auth method and then use signOut() method and that return a promise so in then we can dispatch and action with type SIGNOUT_SUCCESS
an the authReducer we can handle this action by adding a new case an the switch case for signout type so return an objet contain the initial state becuse its not contain any info about the user 
3- in the Nav Comp we can applay connect and mapDispatchToProps after importing the signOut action and pass it to the connect to access it in the props 

### Tracking Auth Status : 
we can make track to the auth state in the state in the firebase ins the auth proparty , besed on it we can see if the user loged in or loged out (state.firebase.auth) so based on that we can display a specific type of links, like if the user loged in we show the <SignInLinks /> and if not <SignoutLinks />

### Waiting for Auth Ready : 
the components lodaing and being renedered before firebase auth. then rerender agin after the auth come from firebase so we need to wait the firebase auth then render the comp. so 
1- in the index.js we used reactReduxFirebase, so we can pass second parameter for this as object 
{attachAuthIsReady: true} that allow us to access a proprty on store or method called tbase is ready 
2- so now we can say store.firebaseAuthIsReady.then(() => ) and then put in the ReactDOM.Render... inside of it .

### Route Guarding : 
if we want to protact particular route if the user login or log out 
so in the Dachboard Comp. we can add auth in mapStateToProps and add key auth with state.firebase.auth as value and we have access to see if the user loged in or not  
1- git the auth form the props 
2- check if auth.uid "that's mean the user is log in " and put the return block inside the if block 
3- import the Redirect from react router dom 
or we can check if the user loged out and used redirect to home in this case 
if(!auth.uid){ return <Redirect to="/sigin" /> }
4- and if the user loged in so we can complete the component 
now the same thing for createProject comp. and in every component needs to be protected

### User Sign Up (Firebase Auth) : 
1- create action for sign up so in into authActions.js and create signUp with newuser as parameter and return a function which take dispatch, getState, and {getFirebase, getFirestore } as a parameters 
2- so now when we create a new user in firebase, the auth service will create uid and we will use it to store the user information in the firestore users collection
3- inside the function ( action )
  * initalize the firebase const firebase = getFirebase();
  * initalize the firestore const forestore = getFirestore();
  * to create a user we use method createUserWithEmailAndPassword in auth object firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password) and return a promise 
  * the respone in the promise will contain user proprty for the user that we just sign it up and now we want to create a document in the user collection contain the user Info so return firestore.collection('users').doc() pass to it the refer of user doc(resp.user.uid) then using set proprty to set the info doc(..).set({...userInf})
  * we can use add() method but this will generate a new id to the document and we need to use the id from auth srvice 
  * then its return promise so in then using dispatch with type "SIGNUP_SUCCESS" and catch with dispatch "SIGNUP_ERR" with the err.
4- now handle this actions in the authReducer in switch statement 
5- import the action in SignUp Comp and use connect and mapDispatchToProps 
6- redierct the user after sign up to the home page.

###  User Profile Data : 
in the navbar Comp if we console the state in the pamStateToProps we will see the firebase proprty and inside of it we have the auth proprty but the info inside of it, its about the auth service we can see the id and the email but not the additional info like first  name so we need to access the user info when the user loged in , snd we already get the info in the firestore and we need to sync this user using the uid that we have 
, In the firebase proparty we can see also profile property and contain two proprtys (isEmpty:true, isLoaded: false) SO in the firebaseReducer can grap the data form the doc that have the same id , 
so 
1- in index.js this where we apply the reactReduxFirebase inhancer so what we need to do is just add more proprtys into this configration object 
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: 'users',
      attachAuthIsReady: true,
    })
  )
); so we set the useFirestoreForProfile to true and tell to the firebase whiche collection to get the data from 
now when the user loged in the the user document will loaded in the profile proprty and we can add the Nav comp 

### Adding Projects : 
now in the projectAction.js at createProject now we need to get the user info to add it in the create project 
1- inside the action invoke the getState to get access to the state 
2- get the profile from the state const profile = getState().firebase.profile
3- get the user id from the state const userId = getState().firebase.auth.uid
4- update the components with the real users names 

### Formatting Dates with Moment : 
when we added a project to database we attached the date at createAt field but if we try to disply it directly like project.createAt.toDate(), "we need to make sure that all project in database have creteAt proprty "    that will give us error object is not valid as a react component, so project.creteAt.toDate().toString(), but we got the long date string so we could use moment package to display a good formate date so ,
1- npm i moment
2- import moment 
3- moment(project.creteAt.toDate().toString()).calender()

### Firestore Security Rules : 
we can add som firebase rules to make sure about how can access to our database to create add or remove form our database 
1- in the test mode we allow to write and access the data but in prodection we need to set some role 
2- we can check the rules in the simulation aside ex: put any project uid add press get so we allow to do that
3- first after / delete (document) and add the protected router projects/{project} that means we match a single project 
4- we want to allow anyone auth to read and write so allow read, write: if request.auth.uid != null
5- match users/{userId}{
    allow create
    allow read: if request.auth.uid != null
    allow write: if request.auth.uid == userId
}

### Cloud Functions Intro & Setup : 
we've been doing all js in side the clinte, we have set our database to communecate with our database and we didn't use a server to run any code but sometimes we need to handle some admin code in side the server for example to add data that not accessable from the clinte and sometime add some collection that wuold not allow to any one to add to it and we can do that from cloud functions which runs on the server and that are a functions we can create run in the server by firebase, now we can create function localy then we van deploy it to database server but before that we need to set up the cloud functions in the firebase 
1- clicking on functions in our app panel and fullow the steps tp set up the functions 
2- we need to install firebase tools npm i -g firebase-tools to install it in our computer 
3- next in termenal : firebase login ,, if you are not 
4- firebase init then we need to answer the questions
  * do you want to preceed ? y
  * what different services do you want to use ? functions and hosting (press space to select diff things)
  *  which project do you want to deploy ? mario-Plan
  *  what language do you want to use ? javascript 
  *  do you want install dependances ? y
  *  what do you want to use as your public directly ? "thats the directory for the app so when we've completed the app, we bult it which folder we gonna publish to firebase , we will call this folder (dist) becuse when we build the react app its gonna output all the code in folder called dist and that is what we gonna deploy"
  *  single page ? y
5- now we have a folder called functions and thire will write our functions and also create dist folder

###  A Simple Cloud Function : 
in functions folder in the index.js, there is a many types of functions and in the index there is one exists using https.onRecuset , in this dommy func we created a helloWarld function and will access it on requset to its url after deployment, now to deploy it in the terminal 
  * firebase deploy --anly functions
just to deploy the function not all the firebase thing, and after it finish will give us a link for this function and if we have a look to the function in the firebase poard we will see this finction exest there and if we click loged then we will see every time that function runs 

### Notification Component : 
now we want to create a notification system for our app so first thing add some style the notification component 
### Cloud Function Firestore Triggers : 
now we want to create a cloud function for notifiaction one when any project created and sconed when someone loged in 
1- 
2- we need to get the admin form firebase so npm i firebase-admin then const admin = require('firebase-admin')
3- inintial the admin with some config admin.initializeApp(functions.config().firebase);
4-created Project function will be type of firestore so
exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {
  const project = doc.data();
  const notification = {
    content: 'Added a new project',
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp(),
  };
  return createNotifiaction(notification);
});

5- const createNotifiaction = notification => {
  return admin
    .firestore()
    .collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
    .catch(console.log);
};

### Cloud Function Auth Trigger: 
created user joined function will be type of auth so
exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: 'Joined the party',
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };
      return createNotifiaction(notification);
    })
    .catch(console.log);
});

if any thing go wrong here we just need to see the logs in the firebase functions 

### Showing Notifications : 
now we have the notifivations collections and we need to access the collection and add it in the notification comp
so in the dashboard we can firestoreConnect we add notification collecton and add limit for the numb of notif
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects',
      orderBy: ['createAt', 'desc'],
    },
    {
      collection: 'notifications',
      limit: 3,
      orderBy: ['time', 'desc'],
    },
  ])
)(Dashboard);

now we can access it in the mapStateToProps 
const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

after that we can pass the notifications to the notifications Comp and display it with some style
Error: Missing or insuffition premission, that mean we didnt set any roul for the notification collection
so in Rule add another match
    match /notifications/{notification} {
    allow read: if request.auth.uid != null
    }
### Ordering Firestore Data : 
we have already done that orderBy: ['time', 'desc'],

### Deploying to Firebase Hosting:
clicking on hosting and set it up and in our app we have to build the react app then put it in dist folder 
now in terminal : firebase deploy 
then in hosting in firebase we shuold see our app and there will be a link 
https://mario-plan-233ac.web.app/
