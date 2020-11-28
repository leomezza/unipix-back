class PixMapper {
  updateOne(data) {
    const mappedObject = {
      note: data.note && data.note.trim(),
      bank: data.bank && data.bank.trim(),
      agency: data.agency && data.agency.trim(),
      account: data.account && data.account.trim(),
      name3P: data.name3P && data.name3P.trim(),
    };

    for (const prop in mappedObject) {
      if (!mappedObject[prop]) {
        delete mappedObject[prop];
      }
    }

    return mappedObject;
  }
}

export default new PixMapper();
