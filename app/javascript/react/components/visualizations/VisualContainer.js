import React, { useEffect, useState } from "react";
import tableau from 'tableau-api';

const VisualContainer = () => {
  const [vizContainer, setVizContainer] = useState(null)

  const url = "https://public.tableau.com/views/WineNot_0/Dashboard1?:display_count=y&:origin=viz_share_link";

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(response => {
        debugger
        console.log(response)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, []);



    const options = {
      hideTabs : false,
      width: '1280px',
      height: '720px'
    }
    // let viz = new tableau.Viz(vizContainer, url, options);

    return (
      <div>
        {vizContainer}
      </div>
    )
}

export default VisualContainer;
