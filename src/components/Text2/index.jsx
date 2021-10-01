import React from "react";
import ContentEditable from "react-contenteditable";
import Draggable from "react-draggable";
class MyComponent extends React.Component {
  constructor() {
    super();
    this.contentEditable = React.createRef();
    this.state = { html: "<p>Hey There</p>" };
  }

  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
  };

  render = () => {
    return (
      <Draggable>
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html} // innerHTML of the editable div
          disabled={false} // use true to disable editing
          onChange={this.handleChange} // handle innerHTML change
          tagName="article" // Use a custom HTML tag (uses a div by default)
        />
      </Draggable>
    );
  };
}

export default MyComponent;
