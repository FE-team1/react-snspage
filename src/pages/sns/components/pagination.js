
// 1차 페이지네이션 구조 완성 - 데이터 적용 X
import React, { useState } from "react";
import Pagination from "react-js-pagination";
import './Paging.module.css';

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  };

  return (

    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />

  );
};

export default Paging;
