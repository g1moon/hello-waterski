import fetcher from "../utils/fetcher";
const useditemServices = {
  async getUseditemAll() {
    const res = await fetcher('get','/useditems');
    console.log('retrun---', res);
    return res;
  },
};

export default useditemServices;

