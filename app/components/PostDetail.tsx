'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchPostById } from '../services/api';

// Define the Post interface
interface Post {
    id: number;
    title: string;
    body: string;
}

const PostDetail = () => {
    const router = useRouter();
    const { postId } = router.query;
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (postId) {
            const getPost = async () => {
                const data = await fetchPostById(postId);
                setPost(data);
            };

            getPost();
        }
    }, [postId]);

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
