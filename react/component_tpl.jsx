import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Foo extends Component {

	static defaultProps = {
		name: 'Tom'
	}

	// static propTypes = {
	// 	name: PropTypes.string
	// }

	state = {
		age: 18
	}

	constructor(props) {
		super(props)
		this.state = {
			age: 19
		}
	}

	static getDerivedStateFromProps(props, state) {

	}

	getSnapshotBeforeUpdate() {

	}

	static getDerivedStateFromError(error) {
	    // Update state so the next render will show the fallback UI.
	    return { hasError: true };
	}

	componentDidCatch(error, info) {
	    
	}

	componentWillMount() {

	}

	componentDidMount() {

	}

	shouldComponentUpdate(nextProps, nextState) {

	}


	render() {
		return <React.Fragment>
					{ this.props.name }
					{ this.state.age }
				</React.Fragment>
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {

	}
}

Foo.propTypes = {
	name: PropTypes.string
}

export default Foo