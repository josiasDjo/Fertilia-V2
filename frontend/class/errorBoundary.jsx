import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Met à jour l'état pour afficher l'UI de secours
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Tu peux aussi logguer l’erreur dans un service distant ici
    console.error("Erreur attrapée par ErrorBoundary :", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500 text-center items-center justify-center flex p-4 bg-red-100 rounded relative">
          <h2>Oops 🥶, Une erreur est survenue.</h2>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary