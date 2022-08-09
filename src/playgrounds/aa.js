import { createStore,combineReducers } from "redux";
import uuid from "uuid";
const defaultPersonState=[]
// ADD_PERSON
const addPerson=(
    {
        name='ANONYMOUS',
        email="no email",
        phoneNumber='no phone number',
        location='no location',
        degree='no degree'
    }={})=>{
    return{
        type:'ADD_PERSON',
        person:{
            id:uuid(),
            name,email,phoneNumber,location,degree
        }
        
    }
}

// EDIT_PERSON
const editPerson=(id,name)=>{
    return{
        type:'EDIT_PERSON',
        id,
        name
    }
}
const personReducer=(state=defaultPersonState,action)=>{
    switch(action.type){
        case'ADD_PERSON':
            return [...state,action.person]
        case'EDIT_PERSON':
            return state.map((person)=>{
                if(person.id==action.id){
                    return {
                        ...person,...action.name
                    }
                }
                else{
                    return person
                }
            });  
        default:
            return state
    }
}
// store
const store=createStore(combineReducers({
    person:personReducer
}));
// subscribe function which is call every time that store call
store.subscribe(()=>{
    console.log(store.getState());
})
const personOne=store.dispatch(addPerson({name:'ali',email:'ali@gmail.com',phoneNumber:'09',location:{city:'kabul',country:'afghanistan'},degree:'bachelor'}));
// store.dispatch(addPerson())

store.dispatch(editPerson(personOne.person.id,'alaaa'));



console.log(store.getState())


// const demo={
//     id,
//     name,
//     email,
//     phoneNumber,
//     location:{
//         city,
//         country
//     }
//     ,degree
// }


