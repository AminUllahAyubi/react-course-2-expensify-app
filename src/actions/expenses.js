
import uuid from "uuid"
// ADD_EXPENSE
export const addExpense=(
    {
        id=uuid(),
        description='',
        note='',
        amount=0,
        createAt=0
    
    }={})=>{
    return{
        type:"ADD_EXPENSE",
        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createAt
        }
    }
}

// REMVOE_EXPENSE
export const removeExpense=({id})=>{
    return{
        type:'REMOVE_EXPENSE',
        id
    }
}
// EDITE_EXPENSE
export const editeExpense=(id,update)=>{
    return{
        type:'EDITE_EXPENSE',
        id,
        update
    }
}

