export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const getId = () => `${Math.random().toString(36).substring(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};
