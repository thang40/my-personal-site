import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";
import styles from "./blogDetail-comp.module.scss";

export const BlogDetail = React.memo(
  ({ title, coverImage, detailMarkdown }) => {
    return (
      <div>
        <h1 className="text-center">{title}</h1>
        <div className="text-center">
          <ProgressiveImage
            src={coverImage}
            alt={title}
            className={styles["border-img"]}
          />
        </div>
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
              return (
                <ProgressiveImage
                  src={src}
                  alt={alt}
                  fluid={true}
                  className={styles["border-img"]}
                />
              );
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

BlogDetail.defaultProps = {
  title: "A title",
  coverImage: "",
  detailMarkdown: "your markdown"
};
