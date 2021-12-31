import { useState } from "react";

import PlayArrow from '@material-ui/icons/PlayArrow';
import Add from '@material-ui/icons/Add';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlined from '@material-ui/icons/ThumbDownOutlined';

// toggled icons
import Check from '@material-ui/icons/Check';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';

import { useStorePersonalList } from "../../zustand/store";

import "./cardMenu.scss";

export default function CardMenu(props) {
  const { id, show } = props

  const {
    liked,
    disliked,
    saved,
    addToList,
    removeFromList
  } = useStorePersonalList(state => state)

  const [
    { isLiked, isDisliked, isSaved }, setIsClicked
  ] = useState({
    isLiked: liked.findIndex(item => item.id === id) < 0 ? false : true,
    isDisliked: disliked.findIndex(item => item.id === id) < 0 ? false : true,
    isSaved: saved.findIndex(item => item.id === id) < 0 ? false : true
  });

  const handleClick = (listKey, clickKey, value) => {
    setIsClicked(currentState => ({
      ...currentState,
      [clickKey]: !value
    }))

    !value ? addToList(listKey, id, show) : removeFromList(listKey, id)
  };

  return (
    <div className="card-menu">
      <div className="icon">
        <PlayArrow />
      </div>

      <div className="icon" onClick={() => handleClick("saved", "isSaved", isSaved)}>
        {isSaved ? <Check /> : <Add />}
      </div>

      <div className="icon" onClick={() => handleClick("liked", "isLiked", isLiked)}>
        {isLiked ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
      </div>

      <div className="icon" onClick={() => handleClick("disliked", "isDisliked", isDisliked)}>
        {isDisliked ? <ThumbDownAlt /> : <ThumbDownOutlined />}
      </div>
    </div>
  );
}