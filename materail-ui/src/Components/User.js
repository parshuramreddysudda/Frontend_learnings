import React from 'react';

import {useParams} from "react-router-dom";
function Child() {

  let { id } = useParams();

  return (
    <div>
      <h3>ID is the : {id}</h3>
    </div>
  );
}
export default Child;