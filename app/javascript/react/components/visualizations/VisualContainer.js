import React from "react";
import TableauReport from 'tableau-react';



const VisualContainer = (props) => {

  return (
    <TableauReport
    url="https://public.tableau.com/views/Wineproduction_0/Dashboard1?:display_count=y&:origin=viz_share_link"
    token="4gRGfypiTO2Uj6JVbOlwzQ==:UEZ3Uf4WoJNenx0BvRV6kgfDiWn2JMxm"
    />

  )

}

export default VisualContainer
