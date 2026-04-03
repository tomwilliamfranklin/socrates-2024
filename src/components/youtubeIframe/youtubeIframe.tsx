import React from "react";
import { componentProps } from "../baseComponent";
import "./youtubeIframe.scss";
import YouTube from "react-youtube";
import classNames from "classnames";

type Props = componentProps & {
  src: string;
};

type State = {
  playVideo: boolean;
};

class YoutubeIFrame extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      playVideo: false,
    };
  }

  render() {
    const { src, children } = this.props;
    const { playVideo } = this.state;

    const videoTag = src.split("embed/")[1];

    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        mute: 1,
        playsinline: 1,
        loop: 1,
        playlist: videoTag,
        rel: 0,
      },
    };
    return (
      <div className="YoutubeIFrame_root">
        <YouTube
          className={classNames("YoutubeIFrame_video", { playVideo })}
          videoId={videoTag}
          opts={opts}
          onReady={this._onReady}
        />
        <div id="player"></div>
        {children}
      </div>
    );
  }

  private _onReady = (event: { target: { playVideo: () => void } }) => {
    this.setState({ playVideo: true });
    event.target.playVideo();
  };
}

export default YoutubeIFrame;
