import { useDispatch } from 'react-redux';

import { createChangeDirectionAction } from '../../store/action';

const DirectionButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="buttons group">
      {
        // allez marre de tous ces boutons la !!!
        // on FA-CTO-RISE !
        // faisons un tableau d'angles, sur lequel on map !
        [45, 90, 135, 225, 270, 315].map((angle) => (
          <button
            key={angle}
            type="button"
            className="button"
            onClick={() => dispatch(createChangeDirectionAction(angle))}
          >
            {angle}°
          </button>
        ))
      }
    </div>
  );
};

export default DirectionButtons;
