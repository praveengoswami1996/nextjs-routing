import Link from "next/link";

function Product({ productId = 100 }) {
    return (
        <div className="min-h-screen bg-yellow-200 flex flex-col justify-center items-center gap-10">
            
            <Link href="/product/1">
                <p className="text-5xl bold text-green-700 font-bold">Product 1</p>
            </Link>

            <Link href="/product/2">
                <p className="text-5xl bold text-green-700 font-bold">Product 2</p>
            </Link>

            <Link href="/product/3" replace>
                <p className="text-5xl bold text-green-700 font-bold">Product 3</p>
            </Link>

            <Link href={`/product/${productId}`}>
                <p className="text-5xl bold text-green-700 font-bold">Product {productId}</p>
            </Link>

            <Link href="/">
                <button type="button" className="my-button">Go Back To Homepage</button>
            </Link>
        </div>
    )
}

export default Product;