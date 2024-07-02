import Header from "@/components/Header";
import {Card, TextInput, Textarea} from "flowbite-react";

export async function postTextVerification(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    
    return data;
}

export default function textVerification() {

  return (
    <div className="w-full justify-content-center col-12">
        <Header />
        <h3 className="text-4xl font-bold text-center mt-4">(Post Method) Message To API LOGORA Moderation</h3>
        <hr className="my-4 border-gray-300 mb-4" />
        <div className="col-3"/>
        <Card className="col-6 py-4 px-4 mt-4 rounded-md no-underline">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><b>Title</b></label>
                <TextInput id="title" type="text" />
                <label htmlFor="message" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white"><b>Message</b></label>
                <Textarea id="message" placeholder="Enter your message to test moderation" className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                    />
        </Card>
        <div className="col-3"/>
    </div>
  );
}
