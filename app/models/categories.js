import Realm from "realm";

export const categorySchema = {
  name: 'category',
  properties: {
    _id: 'objectId?',
    categorySex: 'string?',
    description: 'string?',
    imageUrl: 'string?',
    name: 'string?',
  },
  primaryKey: '_id',
};
