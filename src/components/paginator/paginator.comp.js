import React from "react";
import PropTypes from "prop-types";

const NumPager = ({ pageNum, isDisabled = false, pageClickCallback }) => {
  return isDisabled ? (
    <React.Fragment>{pageNum}</React.Fragment>
  ) : (
    <button onClick={() => pageClickCallback(pageNum)}>{pageNum}</button>
  );
};

const PrevPager = ({ pageNum, pageClickCallback }) => {
  return <button onClick={() => pageClickCallback(pageNum)}>{"<"}</button>;
};

const NextPager = ({ pageNum, pageClickCallback }) => {
  return <button onClick={() => pageClickCallback(pageNum)}>{">"}</button>;
};

const Paginator = ({ numOfPage, curPage, pageClickCallback }) => {
  if (numOfPage === 1) {
    return null;
  }
  if (numOfPage > 7) {
    let pageArr =
      curPage > 5
        ? [curPage - 2, curPage - 1, curPage, curPage + 1, curPage + 2]
        : [1, 2, 3, 4, 5];
    return (
      <div>
        {curPage === 1 ? null : (
          <PrevPager
            pageNum={curPage - 1}
            pageClickCallback={pageClickCallback}
          />
        )}
        {pageArr.map((p, i) => (
          <React.Fragment key={i}>
            <NumPager
              pageNum={p}
              isDisabled={curPage === p}
              pageClickCallback={pageClickCallback}
            />
            ,
          </React.Fragment>
        ))}
        ...,
        <NumPager pageNum={numOfPage} pageClickCallback={pageClickCallback} />
        {curPage === numOfPage ? null : (
          <NextPager
            pageNum={curPage + 1}
            pageClickCallback={pageClickCallback}
          />
        )}
      </div>
    );
  }
  let pageArr = [];
  for (let i = 1; i <= numOfPage; i++) {
    pageArr = [...pageArr, i];
  }

  return (
    <div>
      {curPage === 1 ? null : <PrevPager pageNum={curPage - 1} />}
      {pageArr.map((p, i) => (
        <React.Fragment key={i}>
          <NumPager pageNum={p} isDisabled={curPage === p} />,
        </React.Fragment>
      ))}
      {curPage === numOfPage ? null : <NextPager pageNum={curPage + 1} />}
    </div>
  );
};

Paginator.propTypes = {
  pageNum: PropTypes.number,
  isDisabled: PropTypes.bool,
  pageClickCallback: PropTypes.func
};

Paginator.defaultProps = {
  isDisabled: false
};

export default Paginator;
