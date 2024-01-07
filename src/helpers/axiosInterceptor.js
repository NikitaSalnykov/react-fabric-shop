import { setToken } from '../Redux/operations/handleToken';
import { instance } from '../Redux/auth/auth-operations';
import { authSlice } from '../Redux/auth/auth-slice';

const isLoginOrRegisterRequest = (config) => {
  const { url, method } = config;
  return (
    (url.includes('/api/auth/login') || url.includes('/api/auth/register')) &&
    method.toLowerCase() === 'post'
  );
};

const setUpInterceptor = (dispatch) => {
  let isRefreshing = false;
  let refreshPromise = null;

  const handleError = async (error) => {
    if (
      error.response.status === 401 &&
      !isLoginOrRegisterRequest(error.config)
    ) {
      try {
        if (!isRefreshing) {
          isRefreshing = true;

          const refresh = localStorage.getItem('refresh');
          const body = { refreshToken: refresh };

          const { data } = await instance.post('api/auth/refresh', body);

          error.config.headers.Authorization = `Bearer ${data.accessToken}`;
          dispatch(authSlice.actions.refreshToken(data.accessToken));
          setToken(data.accessToken);

          localStorage.setItem('refresh', data.refreshToken);

          return instance(error.config);
        } else {
          return refreshPromise;
        }
      } catch (error) {
        const { refreshToken } = JSON.parse(error.response.config.data);
        if (error.response.data.code === 403 && refreshToken) {
          dispatch(authSlice.actions.refreshToken(null));
        }
        throw error;
      } finally {
        isRefreshing = false;
        refreshPromise = null;
      }
    }
    return Promise.reject(error);
  };

  instance.interceptors.response.use((response) => response, handleError);
};

export default setUpInterceptor;
