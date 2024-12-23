import { useTranslation } from 'react-i18next';
import SignupForm from './SignupForm';
import SignupImg from '../../../shared/assets/images/registration.jpg';
import React from 'react';

const Signup = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <div>
                <img
                  src={SignupImg}
                  className="rounded-circle"
                  alt={t('signUp')}
                  style={{ maxWidth: '250px' }}
                />
              </div>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;