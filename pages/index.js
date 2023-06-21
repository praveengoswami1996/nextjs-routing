import Link from "next/link";
import { useRouter } from "next/router";

function Homepage() {
    const router = useRouter();

    //Navigating Programatically
    const handleClick = () => {
        console.log("Placing Your Order...");
        router.push('/product');
        //router.replace('/product');
    }

    return (
        <div className="min-h-screen bg-yellow-200 flex flex-col justify-center items-center gap-5">
            <h1 className="text-6xl font-bold text-green-700">Home Page</h1>
            <div className="flex items-center justify-center gap-5">
                <Link href="/blog">
                    <button type="button" className="my-button">Go to Blog Page</button>
                </Link>
                <Link href="/product">
                    <button type="button" className="my-button">Go to Product Page</button>
                </Link>
                {/* Navigating Programatically Starts */}
                    <button type="button" onClick={handleClick} className="my-button">
                        Place Your Order
                    </button>
                {/* Navigating Programatically Ends */}
            </div>
        </div>
    )
}

export default Homepage;

//Route will be : localhost:3000
//The index.js file in the pages diectort maps to the root domain
