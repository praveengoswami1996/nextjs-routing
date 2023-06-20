import { useRouter } from "next/router";

function Review() {
    const router = useRouter();
    const { productId, reviewId } = router.query;

    return (
        <div className="min-h-screen bg-yellow-200 flex justify-center items-center">
            <h1 className="text-6xl font-bold text-green-700">Review {reviewId} for product {productId}</h1>
        </div>
    )
}

export default Review;