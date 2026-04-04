import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "views/homepage/homepage";
import Footer from "views/Footer/Footer";
import Header from "views/Header/header";
import { PrivacyPolicy } from "views/privacyPolicy/privacyPolicy";
import { Services } from "views/services/services";
import { Contact } from "views/Contact/contact";

type State = {
  fileKeys: string[];
};

export class App extends React.Component<{}, State> {
  componentDidMount() {
    const markdownFiles = require.context(
      "content/caseStudies",
      false,
      /\.\/.*md/i
    );

    this.setState({
      fileKeys: markdownFiles.keys(),
    });
  }

  render() {
    if (!this.state) return;

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Home" element={<Homepage />} />
            {/* <Route path="/About" element={<Company />} /> */}
            <Route path="/Services" element={<Services />} />
            {/* <Route path="/CaseStudies" element={<CaseStudies />} /> */}
            <Route path="/Contact" element={<Contact />} />
            {/* {this.state.fileKeys.map((key) => {
              const urlifiedString = convertStringToValidURL(key);

              return (
                <Route
                  path={"/CaseStudies/" + urlifiedString}
                  element={<CaseStudyPage caseStudyId={key} />}
                />
              );
            })} */}
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
