import Link from "next/link";
import { useRouter } from "next/router";

function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId;

    return (
        <div className="min-h-screen bg-yellow-200 flex flex-col justify-center items-center gap-8">
            <h1 className="text-6xl font-bold text-green-700">Details About Product {productId}</h1>
            <Link href="/product">
                <button type="button" className="my-button">Go Back to Product Page</button>
            </Link>
        </div>
    )
}

export default ProductDetail;
