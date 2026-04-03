import React from "react";
import { componentProps } from "../baseComponent";
import "./pillarInfo.scss";
import { InView } from "react-intersection-observer";

import classNames from "classnames";

type Props = componentProps & {
  pillars: React.ReactNode[];
};

type State = {};

export class PillarInfo extends React.Component<Props, State> {
  state = {};

  render() {
    const { pillars } = this.props;
    return (
      <div className="PillarInfo_root">
        <h2 className="center pb-20 text-blackColor font-medium">
          Field-proven experts you can trust
        </h2>
        <div className="PillarInfo_content  flex flex-row">
          {pillars.map((pillar) => {
            return (
              <InView triggerOnce threshold={0.4}>
                {({ inView, ref, entry }) => (
                  <div
                    ref={ref}
                    className={classNames("PillarInfo_pillar", {
                      slideInBottom: inView,
                    })}
                  >
                    {pillar}
                  </div>
                )}
              </InView>
            );
          })}
        </div>
      </div>
    );
  }
}
