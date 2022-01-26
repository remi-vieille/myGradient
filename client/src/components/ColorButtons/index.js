import { useDispatch } from "react-redux";

import { CHANGE_COLOR } from "../../store/action";
import { randomHexColor } from "../../utils";

const ColorButtons = () => {
    // on appelle le hook useDispatch
    // il va nous renvoyer la fonction dispatch
    const dispatch = useDispatch();
  
    const handleChangeFirstColor = () => {
      dispatch({
        type: CHANGE_COLOR,
        // quelle couleur je veux changer ?
        // la premiere ou la 2eme ?
        // on va renseigner ca dans "colorKey"
        colorKey: 'firstColor',
        // la nouvelle valeur de la couleur
        newColor: randomHexColor(),
      });
    };
  
    const handleChangeLastColor = () => {
      dispatch({
        type: CHANGE_COLOR,
        // quelle couleur je veux changer ?
        // la premiere ou la 2eme ?
        // on va renseigner ca dans "colorKey"
        colorKey: 'lastColor',
        // la nouvelle valeur de la couleur
        newColor: randomHexColor(),
      });
    };
  
    const handleChangeBothColors = () => {
      handleChangeFirstColor();
      handleChangeLastColor();
    };
  
    return (
      <div className="buttons group">
        <button
          type="button"
          className="button"
          onClick={handleChangeFirstColor}
        >
          Random First
        </button>
        <button
          type="button"
          className="button"
          onClick={handleChangeBothColors}
        >
          Random All
        </button>
        <button
          type="button"
          className="button"
          onClick={handleChangeLastColor}
        >
          Random Last
        </button>
      </div>
    );
  };
  
  export default ColorButtons;
  