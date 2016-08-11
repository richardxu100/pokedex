import React from 'react';
import AppBar from 'material-ui/AppBar';

const MainLayout = (props) => {
  return (
    <div>
      <AppBar
        title="Pokedex"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      {props.children}
    </div>
  )
}

export default MainLayout;
