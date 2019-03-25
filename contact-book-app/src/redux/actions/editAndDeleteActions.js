export const toggleEdit = (e, allContacts) => ({
  type: 'EDIT',
  id: e.target.id,
  allContacts,
})

export const deleteContact = (e, allContacts) => ({
  type: 'DELETE',
  id: e.target.id,
  allContacts,
})
