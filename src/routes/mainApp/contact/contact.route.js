import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../contexts";
import { LoadingSpinner } from "../../../components";
import styles from "./contact-route.module.scss";

export const ContactRoute = () => {
  const { translate } = useContext(LanguageContext);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  useEffect(() => {
    let iframe = document.getElementById(styles["substack-iframe"]);
    iframe.addEventListener("load", setIsIframeLoading(false));
  }, []);
  return (
    <React.Fragment>
      <section>
        <h2>Contact</h2>
        <p>{translate("If you love what i do, please subscribe below")}</p>
        <div
          className="mb-2 d-flex justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <iframe
            id={styles["substack-iframe"]}
            style={{ display: isIframeLoading ? "none" : "initial" }}
            title="subscire me"
            width="380"
            height="200"
            src="https://siegen.substack.com/embed"
            frameBorder="0"
            scrolling="no"
          ></iframe>
          {isIframeLoading ? <LoadingSpinner /> : null}
        </div>
        <p>
          {translate("Or drop me an Email")}: <em>thangle1192@gmail.com</em>
        </p>
        <p>{translate("Me in some communities")}</p>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://stackoverflow.com/users/7175364/thang-le"
            >
              StackOverflow
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/Siegen79765427"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://hashnode.com/@thangle"
            >
              HashNode
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://dev.to/siegen"
            >
              Dev.To
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://discordapp.com/invite/reactiflux"
            >
              Reactiflux community - Discord
            </a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default ContactRoute;
