"use client"

import Link from "next/link"

const PostCard = ({ post }) => {
    return (
        <>
            <div className="bg-gray-900 p-10 mb-5 rounded-xl" key={post.id}>
                <Link href={`/posts/${post.id}`}>
                    <h3 className="text-xl font-bold mb-4">{post.id}. {post.title}</h3>
                </Link>
                <p className='text-slate-300 mb-4'>{post.body}</p>
                <button className='shadow-sm rounded-md bg-blue-500 text-white px-4 py-2' onClick={() => {alert('Me gusta')}}>Like</button>
            </div>
        </>
    )

}

export default PostCard