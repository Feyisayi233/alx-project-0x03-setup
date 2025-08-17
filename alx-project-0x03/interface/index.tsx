// ButtonProps interface
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// LayoutProps interface
export interface LayoutProps {
  children: React.ReactNode;
}

// PageRouteProps interface
export interface PageRouteProps {
  pageRoute: string;
}
