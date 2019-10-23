import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import {
  ProfileCard,
  IntroHero,
  ItemBar,
  LoadingSpinner
} from "../../../components";
import { Link } from "react-router-dom";
import { useBlogList } from "../../../hooks/blogHooks";
import { ROUTES } from "../../../consts";
import { withInt } from "../../../HOCs";
import { languageContext, themeContext } from "../../../contexts";

const IntProfileCard = withInt(ProfileCard);
const IntIntroHero = withInt(IntroHero);

export const HomeRoute = () => {
  const { theme } = useContext(themeContext);
  const [blogList, isLoading, errorMsg] = useBlogList();
  const { translate, datetimeFormat } = useContext(languageContext);

  const renderBlogList = () => {
    if (errorMsg.length) {
      return <div className="text-center">{translate(errorMsg)}</div>;
    }
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
    return blogList.map((blog, index) => (
      <Link
        key={index}
        to={`${ROUTES.BLOG_ROUTE}/${blog.slug + "-" + blog.cuid}`}
      >
        <ItemBar
          className="mb-2"
          title={blog.title}
          imageSrc={blog.coverImage}
          createdDate={datetimeFormat(blog.dateAdded)}
        />
      </Link>
    ));
  };
  return (
    <React.Fragment>
      <section>
        <Row className="align-items-center">
          <Col lg="7">
            <IntIntroHero />
          </Col>
          <Col lg="5" className="justify-content-end">
            <IntProfileCard theme={theme} />
          </Col>
        </Row>
      </section>
      <section className="mt-2">
        <Row>
          <Col>
            <h3>{translate("Latest Articles")}</h3>
            {renderBlogList()}
          </Col>
        </Row>
      </section>
    </React.Fragment>
  );
};

export default HomeRoute;
