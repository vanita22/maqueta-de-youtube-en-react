import React from "react";
import Logo from './logo';
import SearchBar from './search-bar';
import Icon from './icon';
import Login from './login';
/* Importar los componentes */

/* Importar los iconos */

export default function Navbar(props) {
  let Items = props.icons;
  
  const newItem = Items.map((element, index) =>
    <Icon key = {index} iconUrl = {element.icon} />
  );
  return (
    <div className="navbar">
      <Logo logo = {props.logo} />
      <SearchBar />
      {newItem}
      <Login />
    </div>
  )
}
