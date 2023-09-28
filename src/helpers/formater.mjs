export const fileFormater = (csvText, fileName) => {
  const lines = csvText.split('\n');
  const fileObject = { file: fileName, lines: [] };

  for (const line of lines) {
    const fields = line.split(',');

    if (fields.length < 4) continue;

    const [file, text, numberString, hex] = fields;

    if (
      file !== fileName ||
      typeof text !== 'string' ||
      isNaN(Number(numberString)) ||
      !/^[a-fA-F0-9]{32}$/.test(hex)
    )
      continue;

    const number = Number(numberString);

    fileObject.lines.push({ text, number, hex });
  }

  return fileObject;
};
