import PropTypes from 'prop-types'

function SvgZeplin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 60 48" height="48">
      <g fillRule="evenodd" fill="none">
        <path
          fill="#ffffff"
          d="m9.248 33.084-3.139 1.147-.168 9.337 10.865-3.968c-3.727-1.252-6.448-3.454-7.558-6.515"
        ></path>
        <path
          fill="#ffffff"
          d="m10.89 23.208-10.89 3.978 6.11 7.045 3.138-1.147c-1.107-3.052-.424-6.501 1.643-9.876"
        ></path>
        <path
          fill="#ffffff"
          d="m29.218 9.734c-13.869 5.066-22.81 15.52-19.97 23.35l50.221-18.346c-2.84-7.83-16.383-10.07-30.251-5.004"
        ></path>
        <path
          fill="#ffffff"
          d="m39.5 38.088c13.868-5.067 22.825-15.474 19.97-23.35l-50.223 18.346c2.856 7.876 16.383 10.07 30.252 5.004"
        ></path>
        <path
          fill="#ffffff"
          d="m59.47 14.738-50.223 18.346c.983 2.712 4.734 4.048 9.995 4.048 5.13 0 11.697-1.269 18.543-3.77 13.868-5.066 23.625-13.269 21.683-18.624"
        ></path>
        <path
          fill="#ffffff"
          d="m49.474 10.69c-5.13 0-11.697 1.269-18.543 3.77-13.868 5.066-23.625 13.268-21.683 18.624l50.221-18.346c-.983-2.712-4.733-4.048-9.995-4.048"
        ></path>
        <g fill="#ffffff">
          <path d="m46.7 44.063c-1.478 0-3.657-1.335-6.48-3.967-3.337-3.114-7.161-7.675-10.767-12.844-3.605-5.167-6.568-10.334-8.342-14.548-1.932-4.592-2.208-7.415-.819-8.392.305-.214.672-.322 1.092-.322 1.13 0 3.332.841 7.403 4.85l.09.087-.013.125c-.028.288-.053.579-.076.864l-.045.566-.4-.402c-4.387-4.42-6.318-4.897-6.945-4.897-.179 0-.321.036-.423.108-.603.423-.642 2.497 1.232 6.948 1.743 4.139 4.662 9.227 8.22 14.328 3.56 5.102 7.325 9.596 10.604 12.654 3.535 3.298 5.128 3.654 5.65 3.654.18 0 .325-.038.434-.115.635-.446.636-2.668-1.454-7.46l-.096-.219.21-.115c.21-.115.414-.228.604-.336l.252-.143.116.265c1.481 3.395 2.866 7.71 1.05 8.987-.306.215-.675.324-1.097.324z"></path>
          <path d="m39.836 37.945-.02.26c-.351 4.339-1.275 9.554-3.682 9.766-.048.004-.098.006-.148.006-1.636 0-3.183-2.343-4.598-6.963-1.34-4.372-2.38-10.24-2.927-16.527-.548-6.284-.54-12.246.023-16.785.613-4.947 1.781-7.53 3.471-7.679.05-.004.102-.007.153-.007 1.186 0 2.974 1.344 4.804 7.6l-1.195.23c-.611-2.09-1.277-3.79-1.938-4.96-.612-1.08-1.206-1.675-1.674-1.675-.016 0-.031 0-.047.002-.732.064-1.799 1.841-2.393 6.636-.553 4.458-.56 10.33-.02 16.534.542 6.205 1.564 11.987 2.88 16.28.589 1.922 1.235 3.507 1.869 4.582.584.992 1.149 1.538 1.591 1.538.015 0 .03 0 .046-.002.7-.061 2.021-1.91 2.577-8.415z"></path>
        </g>
      </g>
    </svg>
  )
}

SvgZeplin.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  style: PropTypes.string,
}

export default SvgZeplin