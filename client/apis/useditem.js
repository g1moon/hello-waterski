import fetcher from "../utils/fetcher";
const useditemServices = {
  async getUseditemAll() {
    const response = await fetcher('get','/useditem');
    return response;
  },
};

export default useditemServices;

