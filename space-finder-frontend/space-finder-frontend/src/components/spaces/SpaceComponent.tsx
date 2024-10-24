import React from "react";
import "./spaceComponent.css";
interface SpaceComponentProps {
  spaceId: string;
  name: string;
  location: string;
  photoUrl?: string;
  reserveSpace: (spaceId: string) => void;
}
export class SpaceComponent extends React.Component<SpaceComponentProps> {
  private renderImage() {
    if (this.props.photoUrl) {
      return <img src={this.props.photoUrl} alt="" />;
    } else {
      return (
        <div>
          <img
            src={
              "https://th.bing.com/th/id/R.c01549258ae3f84e27b99adbcec4fd08?rik=iTE%2bIww97EY7qQ&riu=http%3a%2f%2fmedia.architecturaldigest.com%2fphotos%2f576da9fe5ea3e586576ec4b2%2fmaster%2fpass%2fbest-tall-buildings-2016-03.jpg&ehk=4KMtiLvw6JmHQZTsBmKWJWJMkJ5m749FHJeE%2bY9I6fM%3d&risl=1&pid=ImgRaw&r=0"
            }
            alt="genricImg"
          />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="spaceComponent">
        {this.renderImage()}
        <label className="name">{this.props.name}</label>
        <br />
        <label className="spaceId">{this.props.spaceId}</label>
        <br />
        <label className="location">{this.props.location}</label>
        <br />
        <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>
          Reserve
        </button>
      </div>
    );
  }
}
