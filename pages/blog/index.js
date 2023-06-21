import Link from "next/link";

function Blog() {
    return (
        <div className="min-h-screen bg-yellow-200 flex flex-col justify-center items-center gap-8">
            <h1 className="text-6xl font-bold text-green-700">Blog Page</h1>
            <Link href="/">
                <button type="button" className="my-button">Go Back To Homepage</button>
            </Link>
        </div>

    )
}

export default Blog;

//Route will be: localhost:3000/blog