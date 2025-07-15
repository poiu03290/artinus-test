import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../api/product";
import type { ProductDetail } from "../types/Products";
import ProductDetailSkeleton from "./ProductDetailSkeleton";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);

      try {
        const data = await getProductById(Number(id));
        setProduct(data);
      } catch (err) {
        setError("상품 정보를 불러오는데 실패했습니다.");
        console.error("상품 상세 정보 로딩 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (error || !product) {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            뒤로 가기
          </button>
        </div>
        <div className="text-center py-8 text-red-600">
          {error || "상품을 찾을 수 없습니다."}
        </div>
      </div>
    );
  }

  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
        >
          뒤로 가기
        </button>
        <h1 className="text-2xl font-bold">상품 상세</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-4">
          <div className="w-full lg:w-[400px]">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>

          {product.images && product.images.length > 0 && (
            <div className="flex gap-2 overflow-x-auto">
              {product.images.slice(0, 5).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="w-20 h-20 object-cover rounded border"
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 text-lg">{product.brand}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-blue-600">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discountPercentage > 0 && (
              <>
                <span className="text-xl text-gray-500 line-through">
                  ${product.price}
                </span>
                <span className="px-2 py-1 bg-red-100 text-red-600 rounded text-sm font-semibold">
                  {product.discountPercentage}% 할인
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold">{product.rating}</span>
            <span className="text-gray-500">({product.stock}개 리뷰)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">재고:</span>
            <span
              className={product.stock > 0 ? "text-green-600" : "text-red-600"}
            >
              {product.stock > 0 ? `${product.stock}개 남음` : "품절"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">카테고리:</span>
            <span className="px-2 py-1 bg-gray-100 rounded text-sm">
              {product.category}
            </span>
          </div>

          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold">태그:</span>
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div>
            <h3 className="font-semibold text-lg mb-2">상품 설명</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
