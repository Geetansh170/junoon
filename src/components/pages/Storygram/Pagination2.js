import "../home.css";
import "./Pagination.css";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import StorygramCard from "./StorygramCard";
import { StorygramData } from "./StorygramData";

function Pagination() {
  //   const [users, setUsers] = useState(StorygramData);
  //   const [pageNumber, setPageNumber] = useState(0);

  //   const usersPerPage = 9;
  //   const pagesVisited = pageNumber * usersPerPage;

  //   const displayUsers = users
  //     .reverse()
  //     .slice(pagesVisited, pagesVisited + usersPerPage)
  //     .map((item, index) => {
  //       return (
  //         <StorygramCard
  //           key={index}
  //           figcaption={item.figcaption}
  //           title={item.title}
  //           imgURL={item.imgURL}
  //           href={item.href}
  //           postContent={item.postContent}
  //           date={item.date}
  //           comments={item.comments}
  //         />
  //       );
  //     });

  //   const pageCount = Math.ceil(users.length / usersPerPage);

  //   const changePage = ({ selected }) => {
  //     setPageNumber(selected);
  //   };

  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(StorygramData);

  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    fetch({ StorygramData })
      .then((res) => res.json())
      .then((data) => {
        const {
          course: { uploads },
        } = data;
        setData(uploads);
      });
  }

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map(({ thumburl }) => <img src={thumburl} />);
  const pageCount = Math.ceil(data.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <div className='container-fluid px-5'>
      <div className='flex flex-wrap sg-outer mb-20'>{currentPageData} </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn "}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Pagination;
