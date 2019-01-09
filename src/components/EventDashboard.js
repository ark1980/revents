import React, { Component } from "react";
import { Grid, Header, Container } from "semantic-ui-react";
import EventList from "./EventList";

class EventDashboard extends Component {
  render() {
    return (
      <Container style={{ marginTop: "8em" }}>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h2">Event List</Header>
            <EventList />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h2">Right</Header>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default EventDashboard;
