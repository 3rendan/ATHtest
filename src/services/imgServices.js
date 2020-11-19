import React from 'react';

const imgUrl = 'http://digital.provath.org/api/files/';

export function getCollection(id) {
    switch(id){
      case 1:
        return 'Sculpture';
        break;
      case 2:
        return 'Paintings';
        break;
      case 3:
        return 'Drawings';
        break;
      case 3:
        return 'Drawings';
        break;
      case 4:
        return 'Decorative arts';
        break;
      case 5:
        return 'Prints';
        break;
    }

  }
