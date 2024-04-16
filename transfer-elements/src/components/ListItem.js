// ListItem.js
import React from 'react';

const ListItem = ({ title, description }) => {
  return (
    <div>
      {`${title}-${description}`}
    </div>
  );
};

export default ListItem;
