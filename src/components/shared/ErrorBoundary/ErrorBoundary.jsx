import { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            didCatch: false,
            error: null,
        }
    }

    static getDerivedStateFromError(error) {
        return { didCatch: true, error }
    }

    componentDidCatch(error, info) {
        debugger
    }

    render() {
        if (this.state.didCatch) {
            return (
                <>
                    {this.props.fallback}
                </>
            )
        }

        return (
            <>
                {this.props.children}
            </>
        )
    }
}
