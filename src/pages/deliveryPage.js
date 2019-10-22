import React, { Component } from "react";
import styled from "styled-components";
import { Segment } from "semantic-ui-react";

export const PageContainer = styled(Segment)`
  &.ui.segment {
    padding-left: 180px;
    padding-right: 180px;
    border: none;
    margin: 0px;
  }

  @media only screen and (max-width: 1600px) {
    &.ui.segment {
      padding-left: 90px;
      padding-right: 90px;
    }
  }

  @media only screen and (max-width: 1200px) {
    &.ui.segment {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
`;

const Section = styled.div`
  padding-top: 17px;
  padding-bottom: 17px;
`;

class DeliveryPage extends Component {
  render() {
    return (
      <PageContainer>
        <Section></Section>
      </PageContainer>
    );
  }
}

export default DeliveryPage;
