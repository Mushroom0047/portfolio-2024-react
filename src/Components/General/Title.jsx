import PropTypes from 'prop-types';

const Title = ({title}) => {
    return (
        <div className="text-center">
            <h2 className="oswald text-5xl font-bold border-b-4 border-solid border-b-border-dfac py-4 mb-12 mx-auto inline-block">{title}</h2>
        </div>
    )
}
Title.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Title