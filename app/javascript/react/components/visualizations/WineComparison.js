import React, { Component } from 'react';
import tableau from 'tableau-api';

class WineComparison extends Component {
  componentDidMount() {
    this.initViz()
  }


  initViz() {
    const vizUrl = 'https://public.tableau.com/views/wine_6/Dashboard1?:display_count=y&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }


  render() {
    return (
      <div ref={(div) => { this.vizContainer = div }}
      style={{
        display: "block",
        position: "absolute",
        padding: "48px"
      }}
      >
      </div>
    )
  }
}

export default WineComparison;
