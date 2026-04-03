import classNames from "classnames";
import React from "react";
import { componentProps } from "../baseComponent";
import "./videoBackground.scss";

type Props = componentProps & {
  src: string;
};

type State = {};

class VideoBackground extends React.Component<Props, State> {
  render() {
    const { src } = this.props;

    return (
      <div className={classNames("VideoBackground_root", {})}>
        <div className={classNames("VideoBackground_videoContainer", {})}>
          <video
            className={classNames("VideoBackground_video", {})}
            poster={`${src}.png`}
            playsInline
            autoPlay
            muted
            loop
            preload="auto"
            onLoad={this.onLoad}
            src={`${src}.mp4`}
          />
        </div>
        {this.props.children}
      </div>
    );
  }

  private onLoad = () => {};
}

export default VideoBackground;
