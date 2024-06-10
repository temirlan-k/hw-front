// pages/posts/posts.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchPosts } from '../services/api';

interface Post {
    id: number;
    title: string;
}

const PostPages = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchPosts();
            setPosts(data.posts);
        };

        getPosts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {posts.map(post => (
                    <Link key={post.id} href={`/posts/${post.id}`}>
                        <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PostPages;
