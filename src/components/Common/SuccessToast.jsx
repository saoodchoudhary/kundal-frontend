import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserCartAction } from '../../store/userCartSlice';

const SuccessToast = () => {
  const isToast = useSelector((state) => state.userCart.toastMsg);
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId;

    if (isToast) {
      timeoutId = setTimeout(() => {
        dispatch(UserCartAction.offToast());
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isToast, dispatch]);

  return (
    <>
      
        <div className={`bg-white border-b-2 rounded-md border-l-2 fixed z-20 top-[60px] right-0 transition-all  ${isToast ? "translate-x-0" : "translate-x-[100%]" }`}role="alert">
          <div className="flex p-4">
            <div className="flex-shrink-0">
              <svg
                className="flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700 dark:text-gray-400">Item Add Successfully</p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default SuccessToast;
