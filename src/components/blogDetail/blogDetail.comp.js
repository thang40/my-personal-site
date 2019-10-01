import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";

export const BlogDetail = React.memo(
  ({ title, coverImage, detailMarkdown }) => {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        {coverImage ? (
          <div style={{ textAlign: "center" }}>
            <ProgressiveImage src={coverImage} alt={title} fluid={true} />
          </div>
        ) : null}
        <ReactMarkdown
          source={detailMarkdown}
          renderers={{
            code: ({ value }) => {
              return (
                <SyntaxHighlighter language="javascript" style={darcula}>
                  {value}
                </SyntaxHighlighter>
              );
            },
            image: ({ alt, src }) => {
              return <ProgressiveImage src={src} alt={alt} fluid={true} />;
            }
          }}
        />
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.title === nextProps.title
);

BlogDetail.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.string,
  detailMarkdown: PropTypes.string
};
