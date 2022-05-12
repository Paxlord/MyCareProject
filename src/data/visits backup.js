export default [
  {
    id: 1,
    patient: {
      lastName: "Lorem",
      firstName: "Ipsum",
      address: "17 avenue des champs élysées, 75015 Paris",
      phoneNumber: "0785954210",
      age: 77
    },
    aide: {
      lastName: "Lorem",
      firstName: "Ipsum",
      phoneNumber: "0785954210",
    },
    heure: "14:30",
    date: "2022-04-01",
    statut: 0,
    tasks: [
      { 
        label: 'laver le patient',
        check: false,
      },
      {
        label: 'aider le patient à se lever',
        check: false,
      },
    ]
  },
  {
    id: 2,
    patient: {
      lastName: "Lorem",
      firstName: "Ipsum",
      address: "17 avenue des champs élysées, 75015 Paris",
      phoneNumber: "0785954210",
      age: 77
    },
    aide: {
      lastName: "Lorem",
      firstName: "Ipsum",
      phoneNumber: "0785954210",
    },
    heure: "14:30",
    statut: 0,
    tasks: [
      { 
        label: 'laver le patient',
        check: false,
      },
      {
        label: 'aider le patient à se lever',
        check: false,
      }
    ]
  },
  {
    id: 3,
    patient: {
      lastName: "Lorem",
      firstName: "Ipsum",
      address: "17 avenue des champs élysées, 75015 Paris",
      phoneNumber: "0785954210",
      age: 77,
      photoUrl : '',
    },
    aide: {
      lastName: "Lorem",
      firstName: "Ipsum",
      phoneNumber: "0785954210",
    },
    heure: "14:30",
    statut: 1,
    tasks: [
      { 
        label: 'laver le patient',
        check: false,
      },
      {
        label: 'aider le patient à se lever',
        check: true,
      }
    ]
  },
  {
    id: 4,
    patient: {
      lastName: "Lorem",
      firstName: "Ipsum",
      address: "17 avenue des champs élysées, 75015 Paris",
      phoneNumber: "0785954210",
      age: 77
    },
    aide: {
      lastName: "Lorem",
      firstName: "Ipsum",
      phoneNumber: "0785954210",
    },
    heure: "14:30",
    statut: 0,
    tasks: [
      { 
        label: 'laver le patient',
        check: false,
      },
      {
        label: 'aider le patient à se lever',
        check: false,
      }
    ]
  },
  {
    id: 5,
    patient: {
      lastName: "Lorem",
      firstName: "Ipsum",
      address: "17 avenue des champs élysées, 75015 Paris",
      phoneNumber: "0785954210",
      age: 77
    },
    aide: {
      lastName: "Lorem",
      firstName: "Ipsum",
      phoneNumber: "0785954210",
    },
    heure: "14:30",
    statut: 2,
    tasks: [
      { 
        label: 'laver le patient',
        check: true,
      },
      {
        label: 'aider le patient à se lever',
        check: false,
      }
    ]
  },
];