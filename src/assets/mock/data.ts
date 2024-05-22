
/**
 * Schedule datasource
 */


// export let userId = '47C0B9DB-44AB-4EEA-9F73-0B76092AAA45'; // Romain
export let userId = '882BD9F0-D39E-414D-BC03-A412C2DECF83'; // Hamza



export let monitorData:  Record<string, any>[] = [
  { Id: '', Name: 'All'},
  { Id: '1', Name : 'Jean Dupont' },
  { Id: '2', Name: 'Marie Martin' },
  { Id: '3', Name: 'Paul Durand' },
  { Id: '4', Name: 'Jeanne Leblanc' },
  { Id: '5', Name: 'Jacques Bernard' },
  { Id: '6', Name: 'Sophie Dubois' }
];

// export let scheduleData: Record<string, any>[] = [
// //   {
// //     id: 6621321,
// //     title: 'Conduite Joé',
// //     Location: 'Auto Ecole 1',
// //     startTime: '2024-05-23T10:00:00', // Date et heure de début de la leçon
// //     endTime: '2024-05-23T10:00:00', // Date et heure de fin de la leçon
// //     Moniteur: 'Jean Dupont',
// //     Vehicule: 'Voiture A',
// //   },
// //   {
// //     id: 11522,
// //     title: "Conduite Joe",
// //     date: "05/23/2024",
// //     status: "PAS ENCORE FAIT",
// //     startTime: "2024-05-23T10:00:00",
// //     endTime: "2024-05-23T12:00:00",
// //     time: "10:00 à 12:00",
// //     duration: "120 min",
// //     teacher: "joe",
// //     vehicle: "Peugeot 208"
// // },
//   {
//     Id: 262,
//     title: 'Conduite Romain',
//     Location: 'Auto Ecole 1',
//     startTime: new Date(2024, 4, 7, 10, 30),
//     endTime: new Date(2024, 4, 7, 12, 30),
//     Moniteur: 'Marie Martin',
//     Vehicule: 'Voiture B'
//   },
//   {
//     Id: 515213,
//     title: 'Conduite Isamettin',
//     Location: 'Auto Ecole 1',
//     startTime: new Date(2024, 4, 8, 9, 0),
//     endTime: new Date(2024, 4, 8, 11, 0),
//     Moniteur: 'Paul Durand',
//     Vehicule: 'Voiture C'
//   },
//   {
//     Id: 1515154,
//     title: 'Conduite Hamza',
//     Location: 'Auto Ecole 1',
//     startTime: new Date(2024, 4, 8, 11, 30),
//     endTime: new Date(2024, 4, 8, 13, 30),
//     Moniteur: 'Jeanne Leblanc',
//     Vehicule: 'Voiture D'
//   },
//   {
//     Id: 5,
//     title: 'Conduite Isamettin',
//     Location: 'Auto Ecole 1',
//     startTime: new Date(2024, 4, 9, 10, 0),
//     endTime: new Date(2024, 4, 9, 12, 0),
//     Moniteur: 'Jacques Bernard',
//     Vehicule: 'Voiture E'
//   },
//   {
//     Id: 6,
//     title: 'Conduite Joé',
//     Location: 'Auto Ecole 1',
//     startTime: new Date(2024, 4, 9, 12, 30),
//     endTime: new Date(2024, 4, 9, 14, 30),
//     Moniteur: 'Sophie Dubois',
//     Vehicule: 'Voiture F'
//   },



// ];

// export let scheduleData2: Record<string, any>[] = [
//   {
//     id: 1,
//     title: 'Conduite Joé5325',
//     Location: 'Auto Ecole 1',
//     startTime: '2024-05-29T10:00:00', // Date et heure de début de la leçon
//     endTime: '2024-05-29T10:00:00', // Date et heure de fin de la leçon
//     Moniteur: 'Jean Dupont',
//     Vehicule: 'Voiture A',
//     Description: 'Meeting to discuss business goal of 2020.'
//   },
//   {
//     id: 2,
//     title: "Conduite Joe",
//     date: "05/23/2024",
//     status: "PAS ENCORE FAIT",
//     startTime: "2024-05-23T10:00:00",
//     endTime: "2024-05-23T12:00:00",
//     time: "10:00 à 12:00",
//     duration: "120 min",
//     teacher: "joe",
//     vehicle: "Peugeot 208"
// },
//   {
//     Id: 2,
//     title: 'Conduite Romain',
//     Location: 'Auto Ecole 1',
//     startTime: new Date(2024, 4, 7, 10, 30),
//     endTime: new Date(2024, 4, 7, 12, 30),
//     Moniteur: 'Marie Martin',
//     Vehicule: 'Voiture B'
//   },
//   {
//     Id: 3,
//     title: 'Conduite Isamettin',
//     Location: 'Auto Ecole 1',
//     startTime: new Date(2024, 4, 8, 9, 0),
//     endTime: new Date(2024, 4, 8, 11, 0),
//     Moniteur: 'Paul Durand',
//     Vehicule: 'Voiture C'
//   },
//   {
//     Id: 4,
//     title: 'Conduite Hamza',
//     Location: 'Auto Ecole 1',
//     startTime: new Date(2024, 4, 8, 11, 30),
//     endTime: new Date(2024, 4, 8, 13, 30),
//     Moniteur: 'Jeanne Leblanc',
//     Vehicule: 'Voiture D'
//   },
//   {
//     Id: 5,
//     title: 'Conduite Isamettin',
//     Location: 'Auto Ecole 1',
//     startTime: new Date(2024, 4, 9, 10, 0),
//     endTime: new Date(2024, 4, 9, 12, 0),
//     Moniteur: 'Jacques Bernard',
//     Vehicule: 'Voiture E'
//   },
//   {
//     Id: 6,
//     title: 'Conduite Joé',
//     Location: 'Auto Ecole 1',
//     startTime: new Date(2024, 4, 9, 12, 30),
//     endTime: new Date(2024, 4, 9, 14, 30),
//     Moniteur: 'Sophie Dubois',
//     Vehicule: 'Voiture F'
//   },



// ];

// export let quickInfoTemplateData: Record<string, any>[] = [
//   {
//     RoomId: 10,
//     Id: 1,
//     title: 'Board Meeting',
//     Description: 'Meeting to discuss business goal of 2020.',
//     startTime: '2021-01-03T04:00:00.000Z',
//     endTime: '2021-01-03T05:30:00.000Z'
//   }, {
//     RoomId: 8,
//     Id: 2,
//     title: 'Training session on JSP',
//     Description: 'Knowledge sharing on JSP topics.',
//     startTime: '2021-01-05T04:00:00.000Z',
//     endTime: '2021-01-05T05:30:00.000Z'
//   }, {
//     RoomId: 3,
//     Id: 3,
//     title: 'Sprint Planning with Team members',
//     Description: 'Planning tasks for sprint.',
//     startTime: '2021-01-07T04:00:00.000Z',
//     endTime: '2021-01-07T05:30:00.000Z'
//   }, {
//     RoomId: 2,
//     Id: 4,
//     title: 'Meeting with Client',
//     Description: 'Customer meeting to discuss features.',
//     startTime: '2021-01-09T03:30:00.000Z',
//     endTime: '2021-01-09T05:00:00.000Z'
//   }, {
//     RoomId: 5,
//     Id: 5,
//     title: 'Support Meeting with Managers',
//     Description: 'Meeting to discuss support plan.',
//     startTime: '2021-01-04T06:30:00.000Z',
//     endTime: '2021-01-04T08:00:00.000Z'
//   }, {
//     RoomId: 1,
//     Id: 6,
//     title: 'Client Meeting',
//     Description: 'Meeting to discuss client requirements.',
//     startTime: '2021-01-06T06:00:00.000Z',
//     endTime: '2021-01-06T07:30:00.000Z'
//   }, {
//     RoomId: 7,
//     Id: 7,
//     title: 'Appraisal Meeting',
//     Description: 'Meeting to discuss employee appraisals.',
//     startTime: '2021-01-08T05:30:00.000Z',
//     endTime: '2021-01-08T07:00:00.000Z'
//   }, {
//     RoomId: 6,
//     Id: 8,
//     title: 'HR Meeting',
//     Description: 'Meeting to discuss HR plans.',
//     startTime: '2021-01-03T07:30:00.000Z',
//     endTime: '2021-01-03T09:00:00.000Z'
//   }, {
//     RoomId: 4,
//     Id: 9,
//     title: 'Customer Meeting',
//     Description: 'Meeting to discuss customer reported issues.',
//     startTime: '2021-01-07T07:00:00.000Z',
//     endTime: '2021-01-07T08:30:00.000Z'
//   }, {
//     RoomId: 9,
//     Id: 10,
//     title: 'Board Meeting',
//     Description: 'Meeting to discuss business plans.',
//     startTime: '2021-01-09T07:30:00.000Z',
//     endTime: '2021-01-09T09:00:00.000Z'
//   }
// ];
