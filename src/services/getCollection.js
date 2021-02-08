export default function getCollection(id) {
    switch(id){
      case 1:
        return 'Sculpture';
      case 2:
        return 'Paintings';
      case 3:
        return 'Drawings';
      case 4:
        return 'Decorative arts';
      case 5:
        return 'Prints';
        // no default
    }
  }
