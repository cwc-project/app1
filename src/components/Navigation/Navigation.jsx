import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { choosePage } from '../../actions/navigation';
import { ITEMS_PER_PAGE } from '../../constants';
import './Navigation.css';

const NavigationComponent = ({ count, page, onChoosePage }) => {
  const pagesNumber = Math.ceil(count / ITEMS_PER_PAGE);
  const pageNumber = page + 1;
  useEffect(() => {
    if (pageNumber > pagesNumber) {
      onChoosePage(0);
    }
  });

  const onPrev = () => {
    if (!page) return;
    onChoosePage(page - 1);
  };
  const onNext = () => {
    if (pageNumber >= pagesNumber) return;
    onChoosePage(pageNumber);
  };

  const onClick = (event) => onChoosePage(Number(event.target.value));
  return (
    <div className="navigation">
      <button onClick={onPrev}>Предыдущая</button>
      {Array(pagesNumber)
        .fill()
        .map((item, idx) => (
          <button
            key={idx}
            value={idx}
            onClick={onClick}
            className={
              idx === page
                ? 'navigation-btn navigation-btn__selected'
                : 'navigation-btn'
            }
          >
            {idx + 1}
          </button> // сделать жирными, если нажата
        ))}

      <button onClick={onNext}>Следующая</button>
    </div>
  );
};

const mapStateToProps = ({ table, navigation }) => ({
  count: table.count,
  page: navigation.page,
});

export const Navigation = connect(mapStateToProps, { onChoosePage: choosePage })(
  memo(NavigationComponent),
);
