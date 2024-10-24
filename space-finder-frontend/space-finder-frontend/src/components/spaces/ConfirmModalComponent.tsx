import React from "react";
import "./ConfirmModalComponent.css";
interface ConfirmModalProps {
  show: boolean;
  content: string;
  close: () => void;
}
export class ConfirmModalComponent extends React.Component<ConfirmModalProps> {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className="modal">
          <div className="modal-content">
            <h2>you Tried to reserve and ...</h2>
            <h3 className="modalText">{this.props.content}</h3>
            <button onClick={this.props.close}>Ok, Close</button>
          </div>
        </div>
      );
    }
  }
}
