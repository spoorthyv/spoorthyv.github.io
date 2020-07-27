import React from 'react';

class FilterBar extends React.Component {
   render(props) {
      return (
         <div id="filterBar">
            <div className={(this.props.currFilter == "Work") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("Work")}>Work</div>
            <div className={(this.props.currFilter == "Project") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("Project")}>Projects</div>
            <div className={(this.props.currFilter == "Other") ? 'filter selected' : 'filter'} onClick={() => this.props.clickHandler("Other")}>Other</div>
         </div>
      );
   }
}

export default FilterBar;
