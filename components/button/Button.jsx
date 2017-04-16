import React, { PropTypes } from 'react'
import classnames from 'classnames'

export default class Button extends React.Component {

	// static propTypes = {
	// 	type: PropTypes.string,
	// };

	// static defaultProps = {
	// 	type: 'common',
	// };



	render() {

		let classes = classnames({
	      'micro-button': true,
	      'micro-button-': this.props.type == '',
	      'micro-button': this.props.elevation == 2,
	      'micro-button': this.props.elevation >= 3,
	    });

		return (
			<a className={classes}>
                {this.props.children}
			</a>
		)
	}
}