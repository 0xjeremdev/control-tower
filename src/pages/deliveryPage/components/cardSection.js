import React from "react";

import { Card } from "semantic-ui-react";

import { Text, Icon, FlexInline, ColoredCard } from "components";

var componentInfos = [
  {
    icon: "start",
    text1: "Started sending at",
    text2: "March 27th 2019",
    text3: "12:26:05 am UTC – 07:00"
  },
  {
    icon: "completed",
    text1: "Completed",
    text2: "In 31.28",
    text3: "seconds"
  },
  {
    icon: "total-message",
    text1: "Total Messages",
    text2: "3522725",
    text3: " "
  },
  { icon: "status", text1: "Status", text2: "Delivered", text3: " " }
];
const CardSection = () => (
  <Card.Group doubling itemsPerRow={4} stackable>
    {componentInfos.map((item, i) => (
      <ColoredCard type={i + 1} key={i}>
        <Card.Content>
          <FlexInline>
            <Icon name={item.icon} />
            <Text
              fontSize="13px"
              color="#ffffff"
              style={{ paddingLeft: "10px" }}
            >
              {item.text1}
            </Text>
          </FlexInline>
        </Card.Content>
        <Card.Content className="extraCard">
          <Text fontSize="24px" color="#ffffff">
            {item.text2}
          </Text>
          <Text fontSize="16px" color="#ffffff">
            {item.text3}
          </Text>
        </Card.Content>
      </ColoredCard>
    ))}
  </Card.Group>
);

export default CardSection;
