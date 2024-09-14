import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(apiUrl + "contact", formData);
    return response.data;
  } catch (error) {
    console.error("Errore durante l'invio del modulo di contatto:", error);
    throw error;
  }
};
