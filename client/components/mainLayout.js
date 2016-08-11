import React from 'react';
import AppBar from 'material-ui/AppBar';

const MainLayout = (props) => {
  return (
    <div>
      <AppBar
        title="Pokedex"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      { React.cloneElement(props.children, props) }
    </div>
  )
}

export default MainLayout;
