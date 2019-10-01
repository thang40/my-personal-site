import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import {
  fetchBlogListAction,
  cancelFetchBlogListAction,
  selectBlogList
} from "../../ducks";
import { Row, Col } from "react-bootstrap";
import { BlogCard } from "../../components";
import { ThemeContext } from "../../context/theme.context";

const _BlogRoute = ({
  fetchBlogList,
  cancelFetchBlogList,
  blogs,
  history,
  ...rest
}) => {
  const [hasData, setHasData] = useState(true);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const handleIfNoData = () => {
      setHasData(false);
    };
    const handleGetListError = () => {
      history.push("/");
    };
    fetchBlogList(handleIfNoData, handleGetListError);
    return () => {
      cancelFetchBlogList();
    };
  }, [history, fetchBlogList, cancelFetchBlogList]);

  const renderBlogList = () => {
    if (hasData) {
      return blogs.map((blog, index) => (
        <Col lg={4} md={4} sm={4} key={index}>
          <BlogCard {...blog} loading={false} theme={theme} />
        </Col>
      ));
    } else {
      return <div>No data</div>;
    }
  };

  return <Row>{renderBlogList()}</Row>;
};

export const BlogRoute = connect(
  state => ({
    blogs: selectBlogList(state)
  }),
  {
    fetchBlogList: fetchBlogListAction,
    cancelFetchBlogList: cancelFetchBlogListAction
  }
)(_BlogRoute);

export default BlogRoute;
