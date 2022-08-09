

const expensesReducerDefaultState=[]
export default (state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case'ADD_EXPENSE':
            return [...state,action.expense]
        case'REMOVE_EXPENSE':
            return (
                state.filter((expense)=>{
                    return expense?expense.id!=action.id:expense
                })
            )
        case'EDITE_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                   return {...expense,...action.update}
                }
                else{
                    return expense
                }
            })
        default:
            return state; 
    }
}