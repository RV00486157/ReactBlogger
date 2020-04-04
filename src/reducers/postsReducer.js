const postsInitialState=[]

const postsReducer=(state=postsInitialState,action)=>{
    switch(action.type){
        case "SET_POSTS":{
            return state.concat(action.payload)
        }
        default:{
            return [...state]
        }
    }
}

export default postsReducer