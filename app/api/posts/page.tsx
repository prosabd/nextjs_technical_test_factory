//Code posts page get elements from API
import Header from "@/components/Header";
import { Card } from "flowbite-react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    
    return data;
}
export async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    return data;
}

export default async function Posts() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    const data = await getPosts();
    const users = await getUsers();

    return (
        <div className="w-full justify-content-center">
            <Header isConnected={true}/>
            <h3 className="text-4xl font-bold text-center mt-4">(Get Method) Posts From API JsonPlaceHolder</h3>
            <hr className="my-4 border-gray-300" />
            <div className="flex flex-wrap -mx-2 px-2">
                {data && data.map((post: any) => (
                    <div key={post.id} className="p-2 w-full md:w-1/3">
                        <Card className="px-2 ml-2 mt-3 rounded-md no-underline">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {post.title}
                            </h5>
                            <span className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                <u>Autor</u>:  <b>{users.find((user: any) => user.id === post.userId)?.name}</b>
                            </span>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {post.body}
                            </p>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}