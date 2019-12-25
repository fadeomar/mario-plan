const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    fireStore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'fadi',
        authorLastName: 'omar',
        authorId: '132',
        createAt: new Date(),
      })
      .then(() => dispatch({ type: 'CREATE_PROJECT', project }))
      .catch(e => {
        console.log('error aaa', e);
        dispatch({ type: 'CREATE_PROJECT_ERROR', e });
      });
  };
};

export default createProject;
