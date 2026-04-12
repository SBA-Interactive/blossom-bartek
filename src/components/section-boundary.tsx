import { Component, ReactNode, ErrorInfo } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface SectionBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface SectionBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class SectionBoundary extends Component<SectionBoundaryProps, SectionBoundaryState> {
  retryCount = 0;
  maxRetries = 1;

  constructor(props: SectionBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): SectionBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Section boundary caught error:", error, errorInfo);
  }

  handleRetry = () => {
    this.retryCount++;
    this.setState({ hasError: false, error: null });
  };

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.retryCount < this.maxRetries) {
        return this.props.fallback || (
          <div className="flex flex-col items-center justify-center py-8 gap-3 border border-destructive/20 rounded-lg bg-destructive/5 my-4">
            <div className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-medium">Something went wrong</span>
            </div>
            <Button variant="outline" size="sm" onClick={this.handleRetry}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        );
      }

      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center py-8 gap-3 border border-destructive/20 rounded-lg bg-destructive/5 my-4">
          <div className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-medium">Unexpected error. Refresh page</span>
          </div>
          <Button variant="outline" size="sm" onClick={this.handleRefresh}>
            Refresh Page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}