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
      <Row>
        <Col lg={6} md={6} sm={6} key={index}>
          <BlogCard {...blog} loading={false} theme={theme} />
        </Col>
      </Row>
    ));
  };

  return renderBlogList();
};

export default BlogRoute;
