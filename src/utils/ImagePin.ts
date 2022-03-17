import bombs from '../image/pin/bombs.png'
import assalt from '../image/pin/assalt.png'
import route from '../image/pin/router.png'


export default (name: string)=>{
  var Image = assalt
  switch (name) {
    case 'bomb' && "bombs":
        Image = bombs
      break;

    case 'route':
        Image = route
      break;

  
    default: assalt
      break;
  }

  return Image

}