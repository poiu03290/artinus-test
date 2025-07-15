export default function ProductDetailSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      {/* 헤더 스켈레톤 */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-10 bg-gray-200 rounded-lg animate-pulse" />
        <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* 메인 콘텐츠 스켈레톤 */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 이미지 섹션 스켈레톤 */}
        <div className="flex flex-col gap-4">
          <div className="w-full lg:w-[400px] h-[300px] bg-gray-200 rounded-lg animate-pulse" />

          {/* 추가 이미지들 스켈레톤 */}
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 bg-gray-200 rounded border animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* 상품 정보 섹션 스켈레톤 */}
        <div className="flex-1 flex flex-col gap-4">
          {/* 제목과 브랜드 */}
          <div>
            <div className="w-3/4 h-8 bg-gray-200 rounded mb-2 animate-pulse" />
            <div className="w-1/3 h-6 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* 가격 정보 */}
          <div className="flex items-center gap-3">
            <div className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
            <div className="w-16 h-6 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* 평점 */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-8 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* 재고 상태 */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* 카테고리 */}
          <div className="flex items-center gap-2">
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2">
            <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-16 h-6 bg-gray-200 rounded animate-pulse" />
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
            <div className="w-14 h-6 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* 상품 설명 */}
          <div>
            <div className="w-24 h-6 bg-gray-200 rounded mb-2 animate-pulse" />
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
              <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
