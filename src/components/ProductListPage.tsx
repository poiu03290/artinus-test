import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../api/product";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const LIMIT = 20;

export default function ProductListPage() {
  const navigate = useNavigate();
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { products, total } = await getProducts(skip, LIMIT);
        setProductsList((prev) => [...prev, ...products]);
        setHasMore(productsList.length + products.length < total);
      } catch (error) {
        console.error("상품 목록을 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    // eslint-disable-next-line
  }, [skip]);

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSkip((prev) => prev + LIMIT);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading]);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">상품 목록</h1>
      <div className="flex flex-wrap gap-4">
        {productsList.map((product) => (
          <div
            key={`products-${product.id}`}
            className="border border-[#eee] rounded-lg p-4 w-[200px] cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-[120px] object-cover"
            />
            <h2 className="text-lg">{product.title}</h2>
            <p className="font-bold">{product.price}원</p>
          </div>
        ))}
      </div>
      {loading && (
        <div className="m-4 text-center">상품을 불러오고 있습니다...</div>
      )}
      <div ref={loaderRef} className="h-5" />
    </div>
  );
}
