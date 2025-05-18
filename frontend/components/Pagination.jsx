"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ totalPages, currentPage }) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  //   const currentPage = searchParams.get("page") || 1;
  const generatePageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  return (
    <div className="flex gap-2 mt-4">
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        return (
          <Link
            key={page}
            href={generatePageURL(page)}
            className={`px-3 py-1 border ${
              page == currentPage ? "bg-black text-white" : "bg-white"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
