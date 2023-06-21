//Custom 404 Page

import { RiErrorWarningFill } from 'react-icons/ri';

function PageNotFound() {
    return (
        <div className='min-h-screen bg-white w-full flex justify-center items-center gap-6'>
            <div><RiErrorWarningFill className="text-9xl text-red-600"/></div>
            <h1 className='text-6xl font-bold'>Sorry!! This page could not be found..</h1>
        </div>
    )
}

export default PageNotFound;