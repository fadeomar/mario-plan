const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    const {profile} = getState().firebase;
    const userId = getState().firebase.auth.uid;
    fireStore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: userId,
        createAt: new Date(),
      })
      .then(() => dispatch({ type: 'CREATE_PROJECT', project }))
      .catch(e => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', e });
      });
  };
};

export default createProject;
