import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

import { Text, Icon, FlexInline, PageContainer } from "components";

const Section = styled.div`
  padding-top: 17px;
  padding-bottom: 17px;
`;
const IconButton = styled(Button)`
  &.ui.button {
    background-color: #e5e7ff;
    padding: 5px 20px;
  }
`;
class DeliveryPage extends Component {
  render() {
    return (
      <PageContainer>
        <Section>
          <FlexInline style={{ justifyContent: "space-between" }}>
            <Text fontSize="30px" color="#070F29" fontWeight="600">
              Realtime Message Data
            </Text>
            <IconButton>
              <FlexInline>
                <Text fontSize="13px" color="#5361FF">
                  Options
                </Text>
                <Icon name="down-arrow-blue" style={{ marginLeft: "5px" }} />
              </FlexInline>
            </IconButton>
          </FlexInline>
        </Section>
      </PageContainer>
    );
  }
}

export default DeliveryPage;
