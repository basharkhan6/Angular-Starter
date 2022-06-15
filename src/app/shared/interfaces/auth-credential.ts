export interface AuthCredential {
  access_token: string;
  expires_in: number;
  expiration_date: Date;
  token_type: string;
  scope: string;
  refresh_token: string;
}
