import PropTypes from 'prop-types';

export const Filter = ({ name, onFilterInput }) => {
    return (
        <label htmlFor="">
            Find contacts by name
            <input type="text"
                name='filter'
                value={name}
                onChange={onFilterInput}
            />
        </label>
    )
};

Filter.propTypes = {
    name: PropTypes.string,
    onFilterInput: PropTypes.func,
}