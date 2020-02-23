import React, { Component } from 'react';
import tableau from 'tableau-api';

class ScorePrice extends Component {
  componentDidMount() {
    this.initViz()
  }


  initViz() {
    const vizUrl = 'https://prod-useast-a.online.tableau.com/t/ericahuang/views/Vinder/Sheet1?:embed=y&:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }


  render() {
    return (
      <div ref={(div) => { this.vizContainer = div }}
      style={{
        display: "flex",
        padding: "100px"
      }}
      >
      </div>
    )
  }
}

export default ScorePrice;
