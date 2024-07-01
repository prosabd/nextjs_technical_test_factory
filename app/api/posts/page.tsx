//Code posts page get elements from API

export async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    
    return data;
}

export default async function Posts() {
    const data = await getPosts();

    return (
        <div className="w-full justify-flex-center">
            <h1>Posts From API JsonPlaceHolder</h1>
            {data && data.map((post: any) => (
                <div key={post.id} className="card">
                    <a>
                        <h3>{post.name}</h3>
                    </a>
                    <a>
                        <h3>{post.phone}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}