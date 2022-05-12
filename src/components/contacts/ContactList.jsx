import PropTypes from 'prop-types';
 

export const ContactList = ({ formData, onDeleteBtn }) => {

    return (
       
            <ul>
                {formData.map(({ id, name, number }) => (
                    <li key={id}
                        id={id}
                        name={name}
                        number={number}
                    >
                        {name}: {number}
                        <button type='button' onClick={() => onDeleteBtn}>
                            Delete
                        </button>
                    </li>))}
            </ul>
       
    )             
}

ContactList.protoTypes = {
    FormData: PropTypes.arrayOf(
        PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
      onDeleteBtn: PropTypes.func.isRequired,
};
