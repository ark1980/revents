import React, { Component } from "react";
import { Image, List } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image
          src="https://randomuser.me/api/portraits/women/49.jpg"
          circular
          size="mini"
          as="a"
        />
        <Image
          src="https://randomuser.me/api/portraits/men/89.jpg"
          circular
          size="mini"
          as="a"
        />
        <Image
          src="https://randomuser.me/api/portraits/women/67.jpg"
          circular
          size="mini"
          as="a"
        />
      </List.Item>
    );
  }
}

export default EventListAttendee;
