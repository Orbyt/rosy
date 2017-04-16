import React, { PropTypes } from 'react'
import classnames from 'classnames'

export default class Card extends React.Component {

	static propTypes = {
		elevation: PropTypes.number,
	};

	static defaultProps = {
		elevation: 1,
	};


	render() {
		let classes = classNames({
	      'micro-card': true,
	      'micro-card-high': this.props.elevation == 1,
	      'micro-card-higher': this.props.elevation == 2,
	      'micro-card-highest': this.props.elevation >= 3,
	    });

		return (
			<div className={classes}>
                {this.props.children}
			</div>
		)
	}
}