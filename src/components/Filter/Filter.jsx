import React, { memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../../actions/filter';
import { DEFAULT } from '../../constants';
import './Filter.css';

const FilterComponent = ({ data, actions }) => {
  const onChange = (event) => actions.setFilter(event.target.value);
  return (
    <form>
      <div>
        <select
          name="select"
          defaultValue={DEFAULT}
          onChange={onChange}
          className="fiter-select"
        >
          <option disabled value={DEFAULT}>
            Брэнд
          </option>
          {[...new Set(data.map(({ brand }) => brand))].map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          type="reset"
          onClick={actions.resetFilter}
          className="filter-btn"
        >
          Сбросить фильтр
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = ({ table }) => ({
  data: table.data,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(filterActions, dispatch),
});

export const Filter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(FilterComponent));
