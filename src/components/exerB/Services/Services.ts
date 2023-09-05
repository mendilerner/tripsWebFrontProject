import axios from 'axios'
import { tUser } from '../../interfaces';
export async function fetchData(_url: string): Promise<tUser[]|void> {
    try {
      const response = await axios.get(_url);
      return(response.data)
    } catch (error) {
      console.error(error);
    }
}