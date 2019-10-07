import React, { useContext } from "react";
import styles from "./contact-route.module.scss";
import { LanguageContext } from "../../contexts";

export const ContactRoute = () => {
  const { translate } = useContext(LanguageContext);
  // const []
  return (
    <React.Fragment>
      <section>
        <h2>Contact</h2>
        <p>{translate("If you love what i do, please subscribe below")}</p>
        <div className="text-center">
          <iframe
            id={styles["substack-iframe"]}
            title="subscire me"
            width="380"
            height="200"
            src="https://siegen.substack.com/embed"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <p>{translate("Or drop me an Email")}</p>
        <p>{translate("Me in some communities")}</p>
        <ul>
          <li>thangle1192@gmail.com</li>
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
