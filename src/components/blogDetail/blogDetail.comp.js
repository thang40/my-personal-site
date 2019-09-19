import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const BlogDetail = ({ title, coverImage, detailMarkdown }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {coverImage ? (
        <div style={{ textAlign: "center" }}>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={coverImage}
            alt={title}
          />
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
          }
        }}
      />
    </div>
  );
};

BlogDetail.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.string,
  detailMarkdown: PropTypes.string
};
