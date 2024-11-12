import { setUser } from '../../../../redux/slices/userSlice';
import { USER } from '../../../../shared/constants';
import ROUTES from '../../../../app/routes/routes.data';

const handleSubmit = async (
  { username, password },
  { setSubmitting },
  signup,
  setError,
  dispatch,
  navigate,
  t,
) => {
  setError('');
  try {
    const response = await signup({ username, password });
    handleResponse(response, dispatch, navigate, setError, t);
  } catch (error) {
    handleError(error, setError, t);
  } finally {
    setSubmitting(false);
  }
};

const handleResponse = (response, dispatch, navigate, setError, t) => {
  if (response.error) {
    throw new Error('Conflict');
  }
  const { data } = response;
  if (data) {
    const user = JSON.stringify(data);
    localStorage.setItem(USER, user);
    dispatch(setUser(data));
    navigate(ROUTES.HOME);
  }
};

const handleError = (error, setError, t) => {
  if (error.message === 'Conflict') {
    setError(t('userExist'));
  } else {
    setError(t('signUpError'));
  }
};

export default handleSubmit;