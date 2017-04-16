import React, { PropTypes } from 'react'
import styles from './styles.css'

export default class Input extends React.Component {

	static propTypes = {
		placeholder: PropTypes.string,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		placeholder: 'Placeholder'
	};


	render() {

		return (
			<div>
                <input onChange={this.props.onChange.bind(this)} className="micro-input" placeholder={this.props.placeholder}/>
			</div>
		)
	}
}