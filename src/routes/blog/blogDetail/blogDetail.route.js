import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { fetchBlogDetailAction, selectBlogDetail } from "../../../ducks";
import { BlogDetail } from "../../../components";

const _BlogDetailRoute = ({ fetchBlogDetail, blogDetail, match, history }) => {
  const [loading, setLoading] = useState(true);
  const handleGetDetailSuccess = () => {
    setLoading(false);
  };
  useEffect(() => {
    const handleGetDetailError = () => {
      history.replace("/");
    };
    const blogId = match.params.id;
    fetchBlogDetail(blogId, handleGetDetailSuccess, handleGetDetailError);
  }, [fetchBlogDetail, match.params.id, history]);

  const renderBlogDetail = () => {
    if (loading) {
      return <React.Fragment></React.Fragment>;
    } else {
      const { contentMarkdown, title, coverImage } = blogDetail;
      return (
        <BlogDetail
          detailMarkdown={contentMarkdown}
          coverImage={coverImage}
          title={title}
        />
      );
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          background: "#fff",
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <Row>
          <Col>{renderBlogDetail()}</Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export const BlogDetailRoute = connect(
  state => ({
    blogDetail: selectBlogDetail(state)
  }),
  { fetchBlogDetail: fetchBlogDetailAction }
)(_BlogDetailRoute);

export default BlogDetailRoute;
