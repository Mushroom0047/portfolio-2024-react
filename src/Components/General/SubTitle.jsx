import PropTypes from 'prop-types';

const SubTitle = ({ title, subtitle }) => {
    return (
        <div className='w-full'>
            <h3 className="oswald font-medium text-xl">{title}</h3>
            <p className="roboto text-sm py-4">{subtitle}</p>
        </div>
    )
}
SubTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}
export default SubTitle