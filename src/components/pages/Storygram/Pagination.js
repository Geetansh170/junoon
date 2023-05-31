import "../home/home.css";
import "./Pagination.css";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import StorygramCard from "./StorygramCard";
import { StorygramData } from "./StorygramData";

function Pagination() {
  const users = StorygramData;
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  var length = StorygramData.length;
  var count = 0;
  const displayUsers = users
    // .reverse()
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item, index) => {
      count++;
      return (
        <StorygramCard
          key={index}
          title={length - pageNumber * usersPerPage - count + 1}
          // imgURL={length - pageNumber * usersPerPage - count + 1}
          // imgURL={item.imgURL}
          href={item.href}
          postContent={item.postContent}
          date={item.date}
          comments={item.comments}
        />
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='container-fluid px-5'>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn "}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      <div className='flex flex-wrap sg-outer mb-20'>{displayUsers} </div>
    </div>
  );
}

export default Pagination;
