export const oktaConfig = {
  issuer: `https://dev-95881651.okta.com/oauth2/default`,
  clientId: "0oa7p5y1gbWh5i1QK5d7",
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ["openid", "profile", "email"],
  pkce: true,
};
//PKCE(Proof Key for Code Exchange)RFC7636
/*
PKCE is an extension to the Authorization code flow to prevent
CSFRF(Cross Site Request Forgery) and authorization code injection
atacks
*/