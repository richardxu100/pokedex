import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const MainLayout = (props) => {
  // some caughtPokemon have the values 'all' or 'none' so need to filter
  const { caughtPokemon, toggleDrawer } = props;
  let realCaught = caughtPokemon.filter(poke => poke !== undefined); // filter removes the values, while map just returns undefined
  let numberCaught = realCaught.length;
  return (
    <div>
      <AppBar
        title="Pokedex"
        onLeftIconButtonTouchTap={toggleDrawer}
        iconElementRight={<FlatButton label={`PC (${numberCaught})`}
                                      onClick={toggleDrawer}/>}
      />
      { React.cloneElement(props.children, props) }
    </div>
  )
}

export default MainLayout;
