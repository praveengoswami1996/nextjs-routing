import { useRouter } from "next/router";

function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId;

    return (
        <div className="min-h-screen bg-yellow-200 flex justify-center items-center">
            <h1 className="text-6xl font-bold text-green-700">Details About Product {productId}</h1>
        </div>
    )
}

export default ProductDetail;
