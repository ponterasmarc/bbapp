import ErrorComponent from "@/components/error";
import AdminLayout from "@/components/layout/AdminLayout";
import Loading from "@/components/loading";
import {
  AvatarSmall,
  DeleteBtn,
  FlexBtnSB,
  PageCountNav,
} from "@/components/utils/styled";
import { getBooks } from "@/store/actions/bookActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Books = () => {
  const dispatch = useDispatch();

  const { loading, books, error, count } = useSelector(
    (state) => state.getBooks
  );

  const [pageNo, setPageNo] = useState(1);
  const [size, setSize] = useState(5);

  useEffect(() => {
    dispatch(getBooks(pageNo, size));
  }, []);

  //Pagination
  const Pagination = () => {
    let pageCount = Math.ceil(count / size);

    const pagePrev = () => {
      setPageNo(pageNo - 1);
      dispatch(getBooks(pageNo - 1, size));
    };
    const pageNext = () => {
      setPageNo(pageNo + 1);
      dispatch(getBooks(pageNo + 1, size));
    };
    return (
      <PageCountNav>
        <button onClick={pagePrev} disabled={pageNo == 1 ? true : false}>
          ◄
        </button>
        <span>
          {pageNo}/{pageCount}
        </span>
        <button
          disabled={pageNo === pageCount ? true : false}
          onClick={pageNext}
        >
          ►
        </button>
      </PageCountNav>
    );
  };

  return (
    <AdminLayout>
      <h2>Book</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent message={error} />
      ) : books && books.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Imprint</th>
                <th>Book</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, key) => (
                <tr key={key}>
                  <td>
                    <AvatarSmall src={book.imprint.logo} />
                  </td>
                  <td>{book.title}</td>
                  <td>{book.author.fullName}</td>
                  <td>
                    <button
                      onClick={() => {
                        router.push(`book/${book._id}`);
                        dispatch({
                          type: GET_book_RESET,
                        });
                      }}
                    >
                      View
                    </button>
                    <DeleteBtn>Delete</DeleteBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        "There was no data available to retrieve."
      )}

      <FlexBtnSB>
        <button>Create Book</button>
        <Pagination />
      </FlexBtnSB>
    </AdminLayout>
  );
};

export default Books;
