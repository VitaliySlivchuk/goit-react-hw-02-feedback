import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onIncrementFeedback }) => {
  return (
    <ul className={css.feedback}>
      <li>
        <button className={css.item} onClick={onIncrementFeedback}>
          Good
        </button>
      </li>
      <li>
        <button className={css.item} onClick={onIncrementFeedback}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.item} onClick={onIncrementFeedback}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onIncrementFeedback: PropTypes.func.isRequired,
};
