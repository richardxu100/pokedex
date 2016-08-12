import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const MainLayout = (props) => {
  let numberCaught = props.caughtPokemon.length;
  // console.log('number caught:', numberCaught);
  return (
    <div>
      <AppBar
        title="Pokedex"
        iconElementRight={<FlatButton label={`PC (${numberCaught})`}
                                      onClick={props.toggleDrawer}/>}
      />
      { React.cloneElement(props.children, props) }
    </div>
  )
}

export default MainLayout;
