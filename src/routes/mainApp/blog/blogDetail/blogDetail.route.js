import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BlogDetail, LoadingSpinner } from "../../../../components";
import { getBlogDetail } from "../../../../services/hashnode.service";

const BlogDetailRoute = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [blogDetail, setBlogDetail] = useState(undefined);
  useEffect(() => {
    const getBlogDetailWrapper = async () => {
      const slugId = match.params.slugId;
      const blogId = slugId.split("-").reverse()[0];
      setLoading(true);
      setBlogDetail(await getBlogDetail(blogId));
      setLoading(false);
    };
    getBlogDetailWrapper();
  }, [match.params.slugId]);

  const renderBlogDetail = () => {
    if (loading) {
      return (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      );
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
    <Row>
      <Col>{renderBlogDetail()}</Col>
    </Row>
  );
};

export default BlogDetailRoute;
