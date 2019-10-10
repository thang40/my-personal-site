import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { BlogCard, LoadingSpinner } from "../../../components";
import { useBlogList } from "../../../hooks/blogHooks";
import { LanguageContext, ThemeContext } from "../../../contexts";

const BlogRoute = ({ history }) => {
  const { theme } = useContext(ThemeContext);
  const [blogList, , isLoading] = useBlogList();
  const { translate, datetimeFormat } = useContext(LanguageContext);

  const renderBlogList = () => {
    if (isLoading) {
      return (
        <Col className="text-center">
          <LoadingSpinner />
        </Col>
      );
    }
    if (blogList.length === 0) {
      return <Col>No data</Col>;
    }
    return blogList.map((blog, index) => (
      <Col lg={6} md={6} sm={6} key={index} className="mb-4">
        <BlogCard
          {...blog}
          loading={false}
          theme={theme}
          dateAdded={datetimeFormat(blog.dateAdded)}
        />
      </Col>
    ));
  };

  return (
    <React.Fragment>
      <h2 className="mb-4">{translate("Blogs")}</h2>
      <Row>{renderBlogList()}</Row>
    </React.Fragment>
  );
};

export default BlogRoute;
