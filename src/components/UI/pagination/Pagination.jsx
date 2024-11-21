import React from "react";
import styles from "./Pagination.module.scss";
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({ totalPages, page, changePage }) => {
  let pages = usePagination(totalPages);
  return (
    <div className={styles.page__wrapper}>
      {pages
        ? pages.map((p) => (
            <span
              key={p}
              className={
                page === p
                  ? [styles.page, styles.page__current].join(" ")
                  : styles.page
              }
              onClick={() => changePage(p)}
            >
              {p}
            </span>
          ))
        : null}
    </div>
  );
};

export default Pagination;
