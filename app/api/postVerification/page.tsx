import Header from "@/components/Header";
import { Card } from "flowbite-react";
import { SubmitButton } from '@/app/login/submit-button';
import { redirect } from "next/navigation";

export default function textVerification({
    searchParams,
}: {
  searchParams: { label: string, score: number};
}) {
    const messagePOST = async (formData: FormData, req?: any, res?: any) => {
        'use server';

        const message = formData.get("Message") as string;
        const response = await fetch('https://moderation.logora.fr/predict_llm', {
            method: 'POST',
            body: JSON.stringify({ text: message }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json());
        return redirect("/postVerification?label={response['label']}&score={response['score']}");
    }

  return (
    <div className="w-full justify-content-center">
        <Header />
        <h3 className="text-4xl font-bold text-center mt-4">(Post Method) Message To API LOGORA Moderation</h3>
        <hr className="my-4 border-gray-300 mb-4" />
        <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
            <Card className="w-1/2 py-4 px-4 mt-6 rounded-md no-underline mx-auto" id="cardPost">
                    <label htmlFor="title" className=" mx-2 block text-sm font-medium text-gray-900 dark:text-white"><b>Title</b></label>
                    <input
                    id="title"
                    type="text"
                    placeholder="MonTitre"
                    className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label htmlFor="Message" className="block mx-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"><b>Message</b></label>
                    <textarea
                    id="Message"
                    placeholder="Le contenu du Message"
                    className="block p-2.5 mt-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    rows={4}
                    ></textarea>
                    <SubmitButton
                        formAction={messagePOST}
                        className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
                        pendingText="Sending ..." 
                    >
                        Send Message
                    </SubmitButton>
                    {(searchParams.score  !== null || searchParams.label !== '') && (
                        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                            Votre message est : {searchParams.label} \n 
                            Et son score est de : {searchParams.score}
                        </p>
                    )}
            </Card>
        </form >
    </div>
  );
}
