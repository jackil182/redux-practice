export const inputData = (e, allContacts) => ({
  type: e.target.name,
  name: e.target.name,
  value: e.target.value,
  allContacts,
})

export const saveContact = (contactObj, editMode ) => ({
  type: 'SAVE',
  contactObj,
  editMode,
})