import fetcher from "../../utils/fetcher";
const useditemServices = {
  async getUseditemAll() {
    const res = await fetcher('get','/useditems');
    return res;
  },
};

export default useditemServices;

