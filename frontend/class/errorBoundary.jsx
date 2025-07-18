import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Met à jour l’état pour afficher l’UI de repli
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Tu peux logguer l’erreur ici
    console.error("Erreur interceptée :", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Affichage alternatif si erreur
      return <h2>❌ Une erreur est survenue. Veuillez réessayer plus tard.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
