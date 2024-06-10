// pages/posts/[id].tsx
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchPostById } from '../../services/api';

interface Post {
    id: number;
    title: string;
    body: string;
}

const PostDetail = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (id) {
            const postId = parseInt(id, 10);

            if (!isNaN(postId)) {
                const getPost = async () => {
                    const data = await fetchPostById(postId);
                    setPost(data);
                };

                getPost();
            }
        }
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-lg">{post.body}</p>
            </div>
        </div>
    );
};

export default PostDetail;
