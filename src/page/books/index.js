import React, { useState } from 'react';
import { connect } from 'react-redux';
import authorAction from '../../redux/authors/actions';
import bookAction from '../../redux/books/actions';

const mapStateToProps = ({ books, authors }) => ({
  booksData: books.data,
  authorsData: authors.data
});

const Books = ({ booksData, authorsData, dispatch }) => {

  /**
   * Handler
   */

  const handleSearchBooks = (e) => {
    const search = e.target.value;
    dispatch({
      type: bookAction.LOAD_BOOKS,
      payload: {
        toSearch: search
      }
    });
  };

  const handleSearchAuthors = (e) => {
    const search = e.target.value;
    dispatch({
      type: authorAction.LOAD_AUTHORS,
      payload: {
        toSearch: search
      }
    });
  }

  return (
    <div className="container">
      
      {/* The title */}
      <div className="mt-4 mb-2">
        <h1>
          Book Page
        </h1>
      </div>

      {/* Table Books */}
      <div>

        {/* Search Field */}
        <div class="mb-3 mt-4" style={{maxWidth: '300px'}}>
          <input type="text" onChange={handleSearchBooks} class="form-control" placeholder="Search books..."/>
        </div>

        {/* Table */}
        <div class="table-responsive">
          <table class="table">

            {/* Header */}
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Published On</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>

              {booksData.map((book, index) => {
                return (
                  <tr key={Math.round(Math.random() * 10000000)}>
                    <th scope="row">{index}</th>
                    <td>{book.title}</td>
                    <td>{book.publishedOn}</td>
                  </tr>
                )
              })}
              

            </tbody>
          </table>
        </div>

      </div>

      {/* Table Authors */}
      <div>

        {/* Search Field */}
        <div class="mb-3 mt-4" style={{maxWidth: '300px'}}>
          <input type="text" onChange={handleSearchAuthors} class="form-control" placeholder="Search authors..."/>
        </div>

        {/* Table */}
        <div class="table-responsive">
          <table class="table">

            {/* Header */}
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>

              {authorsData.map((author, index) => {
                return (
                  <tr key={Math.round(Math.random() * 10000000)}>
                    <th scope="row">{index}</th>
                    <td>{author.firstName}</td>
                    <td>{author.lastName}</td>
                  </tr>
                )
              })}
              

            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

export default connect(mapStateToProps)(Books);