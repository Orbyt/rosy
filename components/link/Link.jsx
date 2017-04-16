import React from 'react'
import styles from './styles.css'

export default class Link extends React.Component {

	render() {
		return (
			<a className="micro-link">
                {this.props.children}
			</a>
		)
	}
}