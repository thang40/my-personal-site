import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { BlogCard, LoadingSpinner } from "../../components";
import { ThemeContext } from "../../context/theme.context";
import { useBlogList } from "../../hooks/blogHooks";

const BlogRoute = ({ history, ...rest }) => {
  const { theme } = useContext(ThemeContext);
  const [blogList, , isLoading] = useBlogList();

  const renderBlogList = () => {
    if (isLoading) {
      return (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      );
    }
    if (blogList.length === 0) {
      return <div>No data</div>;
    }
    return blogList.map((blog, index) => (
      <React.Fragment>
        <Row>
          <Col lg={6} md={6} sm={6} key={index} className="mb-4">
            <BlogCard {...blog} loading={false} theme={theme} />
          </Col>
        </Row>
      </React.Fragment>
    ));
  };

  return (
    <React.Fragment>
      <h2 className="mb-4">Blogs</h2>
      {renderBlogList()}
    </React.Fragment>
  );
};

export default BlogRoute;
