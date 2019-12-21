import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">About Me</h2>
                      <p>
                        I am a full stack software developer with a background
                        in finance, investment and accounting. I took a career
                        break when my first child was born. During my downtime,
                        I became interested in developing apps. So about two
                        years ago, I started learning Python and C on my own. I
                        caught the coding bug. I decided to immerse myself by
                        enrolling in a bootcamp with General Assembly. I
                        recently completed the Software Engineering Immersive
                        Program.
                      </p>
                      <p>
                        I love solving problems and building applications. My
                        background in analyzing complex financial situations
                        taught me to be resourcefuld and innovative, while my
                        positive can-do attitude helps me persevere under
                        pressure. I am excited to begin this journey as a full
                        fledged programmer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
