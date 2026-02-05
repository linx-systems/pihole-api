/**
 * Authentication types.
 */

export interface Session {
  /** Session valid */
  valid: boolean;
  /** Session ID (null when no password is set) */
  sid: string | null;
  /** CSRF token */
  csrf?: string;
  /** Session validity in seconds (-1 when no password is set) */
  validity: number;
  /** Whether TOTP is enabled */
  totp: boolean;
  /** Server message (e.g. "no password set") */
  message?: string;
}

export interface AuthResponse {
  session: Session;
}

export interface AuthStatus {
  session: {
    valid: boolean;
    totp: boolean;
  };
}

export interface SessionInfo {
  id: number;
  ip: string;
  user_agent: string;
  last_active: number;
  valid: boolean;
  current: boolean;
}

export interface SessionsResponse {
  sessions: SessionInfo[];
}

export interface TotpSetup {
  secret: string;
  uri: string;
}

export interface AppPassword {
  password: string;
}

export interface LoginOptions {
  /** TOTP code for 2FA */
  totp?: string;
}
