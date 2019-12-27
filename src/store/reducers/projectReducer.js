const initialState = {
  projects: [
    { id: '1', title: 'first', content: 'contet for firest project' },
    { id: '2', title: 'second', content: 'contet for second project' },
    { id: '3', title: 'third', content: 'contet for third project' },
  ],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('asdadadasd', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('CREATE_PROJECT_ERROR', action.e);
  }
  return state;
};

export default projectReducer;
