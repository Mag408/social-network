import React from "react";

class ProfailStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activeEditMode() {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
  }

  onKyePressInput(event) {
    if (event.key === "Enter") {
      this.setState({
        editMode: false,
      });
      this.props.updateStatusTC(this.state.status);
    }
  }

  onStatusChange(event) {
    this.setState({
      status: event.target.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div className="">
            <input
              autoFocus={true}
              onChange={this.onStatusChange.bind(this)}
              onKeyDown={this.onKyePressInput.bind(this)}
              onBlur={this.deactivateEditMode.bind(this)}
              value={this.state.status}
            />
          </div>
        ) : (
          <div className="">
            <span onDoubleClick={this.activeEditMode.bind(this)}>
              {this.props.status}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfailStatus;
