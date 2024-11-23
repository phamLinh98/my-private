import { envConfig } from "./envConfig";

export const getListPrivates = async(route) => {
   try {
    const url = `${envConfig.host}${route}`;
    const data = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await data.json();
      return response;
   }catch(error){
     console.error('Error fetching data:', error);
   }
}

export const updatePrivate = async(route, time, status) => {
    try {
      const url = `${envConfig.host}${route}`;
      const data = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
            status: status,
            time: time,
        })
      });
      const response = await data.json();
      return response;
    }
    catch(err){
        console.log('err :>> ', err);
    }
}