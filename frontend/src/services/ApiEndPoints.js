import { Config } from "../config/config";


console.log(`${Config.BASE_API_URL}/createList`,"Config.BASE_API_URL")
export const Endpoints = {

  createList: `${Config.BASE_API_URL}/createList`,
  getAllLists: `${Config.BASE_API_URL}/getList`,
  updateList: (id) => `${Config.BASE_API_URL}/getList/${id}`,
  deleteList: (id) => `${Config.BASE_API_URL}/getList/${id}`,
};
