/* Catch All Routes Example */

import { useRouter } from "next/router";

function Docs() {
    const router = useRouter();
    const { params = [] } = router.query;

    if (params.length === 2) {
        return ( 
            <div className="min-h-screen bg-yellow-200 flex justify-center items-center">
                <h1 className="text-6xl font-bold text-green-700">Viewing Docs for {params[0]} and {params[1]}</h1>
            </div>
        )
    } else if (params.length === 1) {
        return (
            <div className="min-h-screen bg-yellow-200 flex justify-center items-center">
                <h1 className="text-6xl font-bold text-green-700">Viewing Docs for {params[0]}</h1>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-yellow-200 flex justify-center items-center">
            <h1 className="text-6xl font-bold text-green-700">Docs Home Page</h1>
        </div>
    )

}

export default Docs;

/*
    Notes:
    1. We have created a file named """[...params].js""" inside the docs folder. This file will catch all the routes which are containing 'docs' keyword in them. So whatever JSX we return from this file will be rendered on all those routes which are containing 'docs' keyword. 
*/