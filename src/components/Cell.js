"use strict"
import React from 'react';

function Cell({number}) {
  return (
    <div className="cell">
      {number===0?"":number}
    </div>
  );
}

export default Cell;