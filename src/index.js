
import configureStore from './store/configureStore.js'
import {bugAdded, bugRemoved, bugResolved, getUnresolvedBugs, getAssignedBugsToUser} from './store/bugs.js'
import {loadBugs, addBug, assignBugToUser, resolveBug} from './store/bugs'
import {projectAdded} from './store/projects'
import {userAdded} from './store/users'
import {apiCallBegan} from './store/api'

const store = configureStore();

//store.dispatch( apiCallBegan( { url:'/bugs', onSuccess: 'bugs/bugsReceived'} ) )
store.dispatch( loadBugs() )
//store.dispatch( addBug({description:'GoodDay sir'}))


// setTimeout( () => {
//     store.dispatch( loadBugs() )
// }, 3000 );


// store.dispatch( ( dispatch ,getState ) => {
//     dispatch( bugAdded( {description:"bug1"} ) );
// })

// store.dispatch( {
//     type:'error',
//     payload: {
//         message: 'something wrong happened.'
//     }
// })
//store.dispatch( bugAdded( {description:"bug1"} ) );


// store.dispatch( bugAdded( {description:"bug2"} ) );
// store.dispatch( bugAdded( {description:"bug3"} ) );
// store.dispatch( bugResolved( { id:1 }) );

// store.dispatch( assignBugToUser({bugId: 1, userId: 3}))

// store.dispatch( projectAdded({name:'project 1'}))
// store.dispatch( userAdded({name:'kimdo'}))
// console.log("store.getState()",store.getState());

// const unresolved1 = getUnresolvedBugs( store.getState() );
// const unresolved2 = getUnresolvedBugs( store.getState() );
// console.log("unresolved", unresolved1 === unresolved2);

// const assignedBugToUser = getAssignedBugsToUser(3)( store.getState());
// console.log("assignedBugToUser", assignedBugToUser );




