import { fileFormater } from '../helpers/formater.mjs';

import { fetchDataByFileName, fetchDataList } from '../services/api.mjs';

export const getFilesList = async (req, res) => {
  try {
    const data = await fetchDataList();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

export const getFiles = async (req, res) => {
  const { fileName } = req.query;
  if (fileName) {
    try {
      const file = await fetchDataByFileName(fileName);
      const fileFormated = fileFormater(file, fileName);
      return res.status(200).json(fileFormated);
    } catch (error) {
      return res.status(error.status || 500).json({ message: error.message });
    }
  }

  try {
    const { files } = await fetchDataList();
    const dataPromises = files.map(async (file) => {
      try {
        const fileWithoutFormat = await fetchDataByFileName(file);
        const fileWithFormat = fileFormater(fileWithoutFormat, file);
        return fileWithFormat;
      } catch (error) {
        return null;
      }
    });

    const data = await Promise.all(dataPromises);
    return res.status(200).json(data.filter((file) => file !== null));
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};
