import axios from 'axios'

export const setUsers = (users) =>{
    return{
        type:'SET_USERS' ,payload:users
    }
}

export const startGetUsers = () =>{
    return(dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response=>{
                const users=response.data
                dispatch(setUsers(users))
            })
    }
}

export const resetUserPosts=()=>{
    return{
        type:'RESET_USER_POSTS'
    }
}

export const setUserPosts = (posts)=>{
    return{
        type:'SET_USER_POSTS',payload:posts
    }
}


export const startGetUserPosts = (uid)=>{
    return(dispatch)=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${uid}`)
            .then(response=>{
                const posts=response.data
                dispatch(setUserPosts(posts))
            })
    }
}