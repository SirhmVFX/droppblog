import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });

    // Optional: Log to external error service (e.g. Sentry)
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    console.error("Caught by ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      return this.props.fallback ? (
        this.props.fallback({ error, errorInfo, resetError: this.handleReset })
      ) : (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-red-600">Oops, something went wrong.</h2>
          <p className="mb-4 text-sm text-gray-700">
            {error?.message || "Please try refreshing the page or contact support."}
          </p>
          <button
            onClick={this.handleReset}
            className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;



//---customized error return---//

{/* <ErrorBoundary fallback={({ error, resetError }) => (
  <div>
    <h2>Something broke: {error.message}</h2>
    <button onClick={resetError}>Retry</button>
  </div>
)}>
  <MainComponent />
</ErrorBoundary> */}

// ---error reporting---//
{/* <ErrorBoundary onError={(err, info) => logErrorToService(err, info)}>
  <MainComponent />
</ErrorBoundary> */}

// ---basic----//
{/* <ErrorBoundary>
  <MainComponent />
</ErrorBoundary> */}


