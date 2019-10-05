import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import {
  ProfileCard,
  IntroHero,
  ItemBar,
  LoadingSpinner
} from "../../components";
import { ThemeContext } from "../../context/theme.context";
import { useBlogList } from "../../hooks/blogHooks";

export const HomeRoute = () => {
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
      return null;
    }
    return blogList.map(blog => (
      <ItemBar
        title={blog.title}
        imageSrc={blog.coverImage}
        createdDate={blog.dateAdded}
      />
    ));
  };
  return (
    <React.Fragment>
      <section>
        <Row className="align-items-center">
          <Col lg="7">
            <IntroHero />
          </Col>
          <Col lg="5" className="justify-content-end">
            <ProfileCard theme={theme} />
          </Col>
        </Row>
      </section>
      <section className="mt-2">
        <Row>
          <Col>
            <h3>Latest Articles</h3>
            {renderBlogList()}
          </Col>
        </Row>
      </section>
    </React.Fragment>
  );
};

export default HomeRoute;
