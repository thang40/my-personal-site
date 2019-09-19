import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBlogListAction, selectBlogList } from "../../ducks";
import { Row, Col } from "react-bootstrap";
import { BlogCard } from "../../components";

const _BlogRoute = ({ fetchBlogList, blogs, history, ...rest }) => {
  const [hasData, setHasData] = useState(true);

  useEffect(() => {
    const handleIfNoData = () => {
      setHasData(false);
    };
    const handleGetListError = () => {
      history.push("/");
    };
    fetchBlogList(handleIfNoData, handleGetListError);
  }, []);

  const renderBlogList = () => {
    if (hasData) {
      return blogs.map((blog, index) => (
        <Col lg={4} md={4} sm={4} key={index}>
          <BlogCard {...blog} loading={false} />
        </Col>
      ));
    } else {
      return <div>No data</div>;
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          background: "#fff",
          padding: "1rem 0",
          margin: 0,
          minHeight: 280
        }}
      >
        <Row>{renderBlogList()}</Row>
      </div>
    </React.Fragment>
  );
};

export const BlogRoute = connect(
  state => ({
    blogs: selectBlogList(state)
  }),
  { fetchBlogList: fetchBlogListAction }
)(_BlogRoute);
