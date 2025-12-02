export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void | Promise<void>;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

export interface AnimatedButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button';
  onClick?: () => void;
  loading?: boolean;
}

export interface NebulaloginProps {
  onLogin: (data: LoginFormData) => void | Promise<void>;
  onGoogleLogin?: () => void;
  onGitHubLogin?: () => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  loading?: boolean;
}
