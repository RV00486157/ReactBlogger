export const userSelector=(users,id)=>{
    return users.find((user)=>(user.id==id))
}

export const postsByUser=(posts,userId)=>{
    return posts.filter(post => post.userId == userId)
}