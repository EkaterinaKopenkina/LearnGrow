import axios from "axios";

const rootUrl = 'http://127.0.0.1:8000/api/';

export const getData = async(url, setData, setLoading, setError) => {
   await axios.get(`${rootUrl}${url}`)
      .then(result => {
         // console.log(result);
         setData(result.data);
         return result.data;
      })
      .catch(error => {
         // Здесь должа была быть обработка ошибок
         // console.log(error);
         setError(error);
      })
      .finally(() => {
         setLoading(false);
      })
}

export const getAuthData = async(url, setData, setLoading, setError, token) => {
   const instance = axios.create({
      withCredentials: true,
      baseURL: rootUrl,
   });
  
   return instance.get(url, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   })
   .then(result => {
      // console.log(result);
      setData(result.data);
      return result.data;
   })
   .catch(error => {
      // Здесь должа была быть обработка ошибок
      // console.log(error);
      setError(error);
   })
   .finally(() => {
      setLoading(false);
   })
}

export const postData = async(url, data, setStatusMessage, oldStatuses) => {
   try {
      const response = await axios.post(`${rootUrl}${url}`, data);
      // console.log(response);
      setStatusMessage({
         ...oldStatuses,
         success: response.data[0] || "Операция успешно выполнена!",
         error: null
      });
      return response.data;
   } catch (error) {
      setStatusMessage({
         ...oldStatuses,
         success: null,
         error: error.response?.data[0] || "Произошла ошибка!"
      });
   }
}

export const patchData = async (url, data, setStatusMessage, oldStatuses, token) => {
   const instance = axios.create({
      withCredentials: true,
      baseURL: rootUrl,
   });
  
   try {
      const response = await instance.patch(url, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      // console.log(response);
      setStatusMessage({
         ...oldStatuses,
         success: 'Данные успешно обновлены!',
         error: null
      });
      return response.data;
   } catch (error) {
      setStatusMessage({
         ...oldStatuses,
         success: null,
         error: error.response?.data[0] || "Произошла ошибка!"
      });
      // console.log(error);
      return error;
   }
}

// export const deleteData = (url) => {
//    return instance.delete(url)
//    .then(result => {
//       return result.data;
//    })
// }