import React from "react";
import VideoThumbnail from './video-thumbnail';

export function ThumbContainer(props) {
  let Item = props.videos;

  const newItem = Item.map((element) =>
    <VideoThumbnail image = {element.video} />
  );

  return (
    <div className="thumb-container">
      {newItem}
    </div>
  );
}
