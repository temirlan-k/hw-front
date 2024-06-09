// page.tsx
import Image from "next/image";
import axios from 'axios';
import PostPages from "./pages/posts/posts";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="h-56 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Posts</h1>
      </div>
      <PostPages />
    </div>
  );
}
