import { toast } from "react-toastify";

export const showSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 4000,
    theme: "colored", // ✅ colored background
  });
};

export const showError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    theme: "colored", // ✅ colored background
  });
};