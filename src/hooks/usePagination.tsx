import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(1);

  const previousPage = () => {
    setPage((old) => Math.max(old - 1, 1));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const nextPage = (totalPages: number | undefined) => {
    if (totalPages) {
      setPage((old) => (page <= totalPages ? old + 1 : old));
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return {
    page,
    setPage,
    nextPage,
    previousPage,
  };
};
