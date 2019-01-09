import React, { Component } from "react";
import EventListAttendee from "./EventListAttendee";
import { Segment, Item, Icon, Button, List } from "semantic-ui-react";

class EventListItem extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                src="https://randomuser.me/api/portraits/women/2.jpg"
                circular
                size="small"
                bordered
              />
              <Item.Content>
                <Item.Header>Event Title</Item.Header>
                <Item.Description>
                  <p>
                    Hosted by <strong>Name</strong>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio architecto provident.
                  </p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock outline" />
            date |
            <Icon name="map marker alternate" />
            time
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            <EventListAttendee />
          </List>
        </Segment>
        <Segment clearing>
          <span>Description Goes here</span>
          <Button color="teal" floated="right">
            View
          </Button>
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
