import axios from "axios";
const apiCall = async (method, url, encodedToken, item,types) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      headers: { authorization: encodedToken },
      data: {
        product: item,
      },
      action:{
        type:types
      }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { apiCall };
