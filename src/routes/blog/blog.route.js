import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { BlogCard, LoadingSpinner } from "../../components";
import { ThemeContext } from "../../contexts/theme.context";
import { useBlogList } from "../../hooks/blogHooks";
import { withInt } from "../../HOCs/withInt";
import { LanguageContext } from "../../contexts";

const IntBlogCard = withInt(BlogCard);

const BlogRoute = ({ history, ...rest }) => {
  const { theme } = useContext(ThemeContext);
  const [blogList, , isLoading] = useBlogList();
  const { translate } = useContext(LanguageContext);

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
        <IntBlogCard {...blog} loading={false} theme={theme} />
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
