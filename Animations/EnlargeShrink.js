import React from 'react'
import { Animated } from 'react-native'

class EnlargeShrink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewSize: new Animated.Value(this._getSize())
        }
    }

    // componentWillMount(){
    //     this.tate = {
    //         viewSize: new Animated.Value(this._getSize())
    //     }
    // }

    _getSize() {
        if (this.props.shouldEnlarge) {
            return 80
        }
        return 40
    }

    componentDidUpdate() {
        Animated.spring(
            this.state.viewSize,
            {
                toValue: this._getSize()
            }
        ).start()
        // this.setState({viewSize:new Animated.Value(this._getSize())})
    }

    render() {

        console.log('should enlarge : ' ,this.props.shouldEnlarge, ' getsize : ' , this._getSize() , ' viewSize : ', this.state.viewSize)

        return (
            <Animated.View style={{ width: this.state.viewSize, height: this.state.viewSize }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default EnlargeShrink