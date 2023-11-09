import PostCard from "@/components/PostCard"


const loadPost = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return(data)
}

const PostsPage = async() => {

    const posts = await loadPost()


    return (
        <>
            <h2>Publicaciones</h2>
            <div className='container px-10'>
                {
                    posts.map((post) => (
                        <PostCard post={post} key={post.id} />
                    ))
                }
            </div>

        </>
    )
}

export default PostsPage