import React from "react";
import { Row, Col } from "antd";
import Layout from "@theme/Layout";
import { usePluginData } from "@docusaurus/useGlobalData";
import CaseCard from "@site/src/components/caseCard";
import Translate from "@docusaurus/Translate";
import "./index.scss";

export default function CaseStudies() {
  const { casestudiesGlobalData } = usePluginData("casestudies-global-dataPlugin");

  return (
    <Layout>
      <div className="case-studies-container">
        <div className="case-studies-header">
          <div className="case-studies">
            <Translate>Case Studies</Translate>
          </div>
          <div className="case-studies-subtitle">
            <div>
              <Translate>Case Studies description</Translate>
            </div>
            <button className="button" type="button">
              <a href="https://github.com/kubeedge/website" target="_blank">
                <Translate>post your case</Translate>
              </a>
            </button>
          </div>
        </div>

        <div className="case-list">
          <Row gutter={[48, 48]}>
            {casestudiesGlobalData.concat(casestudiesGlobalData).concat(casestudiesGlobalData).map((item) => (
              <Col sm={24} md={12} lg={8}>
                <CaseCard
                  title={item.metadata?.title}
                  subTitle={item.metadata?.frontMatter?.subTitle}
                  date={item.metadata?.formattedDate}
                  desc={item.metadata?.description}
                  link={item.metadata?.permalink}
                  tags={item.metadata?.frontMatter?.tags}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Layout>
  );
}
