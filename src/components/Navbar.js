import React, { Component } from "react";
import { Menu, Container, Button, Header, Icon } from "semantic-ui-react";

const marginLeft = {
  marginLeft: "20px"
};

class Navbar extends Component {
  render() {
    return (
      <Menu fixed="top" inverted stackable style={{ padding: "15px 0 15px 0" }}>
        <Container>
          <Menu.Item as="a" header>
            <Header
              as="h3"
              icon="calendar alternate outline"
              content="ReVents"
              inverted
            />
          </Menu.Item>
          <Menu.Item as="a">Events</Menu.Item>
          <Menu.Item>
            <Button inverted color="green">
              <Icon name="plus" />
              Create Event
            </Button>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button basic color="teal" inverted>
                Login
              </Button>
              <Button basic color="orange" inverted style={marginLeft}>
                Sign Out
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
