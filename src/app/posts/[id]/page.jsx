import PostCard from "@/components/PostCard"
import PostsPage from "../page"
import { Suspense } from "react"

const loadPostById = async(id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
    return(data)
}


const PostPage = async({params}) => {
    const post = await loadPostById(params.id)

    return (
        <>
            <div>
                <PostCard post={post} />
            </div>

            <hr />
            <h3>Publicaciones Relacionadas</h3>

            <Suspense fallback={<h6>Cargando Publicaciones...</h6>}>
                <PostsPage />
            </Suspense>
            
        </>
    )
}

export default PostPage