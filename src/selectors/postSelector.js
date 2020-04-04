export const postSelector=(posts,id)=>{
    return posts.find((post)=>(post.id==id))
}

