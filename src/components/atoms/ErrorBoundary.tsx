import React from 'react'

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = {
      hasError: false,
      error: undefined,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  // TODO
  // * retrieve useful stacktrace (maybe read up here? https://www.loggly.com/blog/best-practices-for-client-side-logging-and-error-handling-in-react/)
  // * add button to send error report to us
  render() {
    if (this.state.hasError) {
      console.log({ error: this.state.error })
      return <p>Error: {this.state.error?.message}</p>
    }

    return this.props.children
  }
}

export default ErrorBoundary
