import Items from "../views/Items";


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
    }
  }
export function collectionImage(id) {
    switch(id){
      case 1:
        return 'https://providenceathenaeum.org/wp-content/uploads/2020/09/ProvAth_Alcoves-with-busts.jpg';
        break;
      case 2:
        return 'https://images.antiquesatlas.com/dealer-stock-images/studiort/JA_McColvin_18641920_Oil_Lands_as237a752z-1.jpg';
        break;
      case 3:
        return 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6TdtK2ECfk2Z1zJQwXNUEAHaFO%26pid%3DApi&f=1';
        break;
      case 4:
        return 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1qlHSIOI2UoMyLUTjMeaygHaHa%26pid%3DApi&f=1';
        break;
      case 5:
        return 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.WVRVpP_ABrO-TAloaDmMsgHaFj%26pid%3DApi&f=1';
    }
  }

  
