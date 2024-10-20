import axios from "axios";
const apiURL = import.meta.env.VITE_API as string;

interface Req {
  url: string;
  length?: number;
  random?: boolean;
}

export interface menuItem {
  key?: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

export const getMenuItems = async ({ url, length, random }: Req) => {
  try {
    const { data } = await axios.post(apiURL, {
      url,
      length,
      random,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
