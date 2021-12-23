import fetcher from "../../utils/fetcher";

export const spotServices = {
  async getSpots() {
    return await fetcher('get', '/spots');
  },
}


