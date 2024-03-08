import apiClient from "./ApiClient";
import { Endpoints } from "./ApiEndPoints";

export const createUserApi = async (data)=> {
    console.log(data,"data in service")
    const response = await apiClient.post(`${Endpoints.createList}`, data);

    return response;
  };
  