import { useMemo } from "react";
export const usePagination = (totalPages = 0) => {
  return useMemo(() => {
    if (totalPages > 0) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
    return []; // Возвращаем пустой массив, если страниц нет
  }, [totalPages]);
};
