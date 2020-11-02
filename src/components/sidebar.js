import React from "react";
import Icon from './icon';

export function Sidebar(props) {
  let Items = props.icons;
  
  const newItem = Items.map((element, index) =>
    <Icon key = {index} iconUrl = {element.icon} title = {element.title}/>
  );          
   
  return (
  <div className="sidebar">    
    {newItem}
  </div>
  );
}
