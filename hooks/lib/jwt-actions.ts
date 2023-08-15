import jwt_decode, { JwtDecodeOptions } from 'jwt-decode';

const jwtActions = {
  decode: <T extends unknown>(
    token: string,
    options?: JwtDecodeOptions | undefined
  ) => {
    if (!token) return null;
    return jwt_decode<T>(token, options);
  },
};

export default jwtActions;
