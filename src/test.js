import React from 'react';
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch
} from 'react-router-dom';

function Text() {
  console.log(1, useParams());
  console.log(2, useLocation());
  console.log(3, useHistory());
  console.log(4, useRouteMatch());
  return (
    <p>
      {useLocation().pathname}
    </p>
  );
}

export default Text;
