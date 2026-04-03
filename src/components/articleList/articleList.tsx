import { convertStringToValidURL } from "data/Utils";
import React from "react";
import { Link } from "react-router-dom";
import { CaseStudy } from "../../data/DataTypes";
import { componentProps } from "../baseComponent";
import "./articleList.scss";

type Props = componentProps & {
  articles: CaseStudy[];
};

type State = {};

export class ArticleList extends React.Component<Props, State> {
  state = {};

  render() {
    const { articles } = this.props;

    return (
      <div className="ArticleList_root">
        <div className="ArticleList_content">
          {articles.map((article) => (
            <ArticleTile {...article} />
          ))}
        </div>
      </div>
    );
  }
}

type ArticleProps = CaseStudy;

export class ArticleTile extends React.Component<ArticleProps, {}> {
  render() {
    return (
      <Link
        to={"../CaseStudies/" + convertStringToValidURL(this.props.id) ?? ""}
        className="Article_articleContainer"
      >
        <div className="Article_root">
          <div className="Article_image">
            <img src={this.props.cover} alt={this.props.title} />
          </div>
          <div className="Article_text">
            <h4>{this.props.title}</h4>
            <div className="Article_label">
              <p className="Article_location">{this.props.location}</p>
              {/* <p>
                {this.props.date.toLocaleDateString("en-us", {
                  month: "short",
                  day: "numeric",
                })}
              </p> */}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
