import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const MainLayout = (props) => {
  // some caughtPokemon have the values 'all' or 'none' so need to filter
  let realCaught = props.caughtPokemon.filter(poke => poke !== undefined); // filter removes the values, while map just returns undefined
  let numberCaught = realCaught.length;
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
