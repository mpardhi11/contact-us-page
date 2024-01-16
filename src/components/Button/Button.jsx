/* eslint-disable react/prop-types */
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Button.module.css";

const Button = ({ icon, text, isOutLined, message }) => {
  const showToast = (e) => {
    e.preventDefault();

    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <>
      <button
        onClick={showToast}
        className={isOutLined ? styles.outline_btn : styles.primary_btn}
      >
        {icon}
        {text}
      </button>
      <ToastContainer />
    </>
  );
};

export default Button;
