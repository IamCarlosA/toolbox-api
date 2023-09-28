import axios from 'axios';

const TOKEN = 'aSuperSecretKey';

export const fetchDataList = async () => {
  const url = 'https://echo-serv.tbxnet.com/v1/secret/files';

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(`¡Error! status_code:${error.response.status}`);
  }
};

export const fetchDataByFileName = async (fileName) => {
  const url = `https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    const errorN = new Error(`status_code:${error.response.status}`);
    errorN.status = error.response.status;
    throw errorN;
  }
};
