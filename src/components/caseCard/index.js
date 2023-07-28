import React from "react";
import { useHistory } from "@docusaurus/router";
import "./styles.scss";

export default function CaseCard(props) {
  const {
    title = "",
    subTitle = "",
    date = "",
    desc = "",
    imgUrl = "",
    link = "",
    tags = [],
  } = props;
  const history = useHistory();

  return (
    <div className="case-card" onClick={() => history.push(link)}>
      <div className="background" />

      <div className="title">
          {title}
          <div className="desc">{desc}</div>
      </div>
      <div className="block-sperator"></div>
      <div>
          <h3 className="sub">{subTitle}</h3>
      </div>
      <div className="tags">
        {tags.map((item, index) => (
          <div className="tag" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="date">{date}</div>
    </div>
  );
}
