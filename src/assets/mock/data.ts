/**
 * Schedule datasource
 */
export let monitorData:  Record<string, any>[] = [
  { Id: '', Name: 'All'},
  { Id: '1', Name : 'Jean Dupont' },
  { Id: '2', Name: 'Marie Martin' },
  { Id: '3', Name: 'Paul Durand' },
  { Id: '4', Name: 'Jeanne Leblanc' },
  { Id: '5', Name: 'Jacques Bernard' },
  { Id: '6', Name: 'Sophie Dubois' }
];

export let scheduleData: Record<string, any>[] = [
  {
    Id: 1,
    Subject: 'Conduite Joé',
    Location: 'Auto Ecole 1',
    StartTime: new Date(2024, 4, 7, 8, 0), // Date et heure de début de la leçon
    EndTime: new Date(2024, 4, 7, 10, 0), // Date et heure de fin de la leçon
    Moniteur: 'Jean Dupont',
    Vehicule: 'Voiture A',
    Description: 'Meeting to discuss business goal of 2020.'
  },
  {
    Id: 2,
    Subject: 'Conduite Romain',
    Location: 'Auto Ecole 1',
    StartTime: new Date(2024, 4, 7, 10, 30),
    EndTime: new Date(2024, 4, 7, 12, 30),
    Moniteur: 'Marie Martin',
    Vehicule: 'Voiture B'
  },
  {
    Id: 3,
    Subject: 'Conduite Isamettin',
    Location: 'Auto Ecole 1',
    StartTime: new Date(2024, 4, 8, 9, 0),
    EndTime: new Date(2024, 4, 8, 11, 0),
    Moniteur: 'Paul Durand',
    Vehicule: 'Voiture C'
  },
  {
    Id: 4,
    Subject: 'Conduite Hamza',
    Location: 'Auto Ecole 1',
    StartTime: new Date(2024, 4, 8, 11, 30),
    EndTime: new Date(2024, 4, 8, 13, 30),
    Moniteur: 'Jeanne Leblanc',
    Vehicule: 'Voiture D'
  },
  {
    Id: 5,
    Subject: 'Conduite Isamettin',
    Location: 'Auto Ecole 1',
    StartTime: new Date(2024, 4, 9, 10, 0),
    EndTime: new Date(2024, 4, 9, 12, 0),
    Moniteur: 'Jacques Bernard',
    Vehicule: 'Voiture E'
  },
  {
    Id: 6,
    Subject: 'Conduite Joé',
    Location: 'Auto Ecole 1',
    StartTime: new Date(2024, 4, 9, 12, 30),
    EndTime: new Date(2024, 4, 9, 14, 30),
    Moniteur: 'Sophie Dubois',
    Vehicule: 'Voiture F'
  },



];


export let quickInfoTemplateData: Record<string, any>[] = [
  {
    RoomId: 10,
    Id: 1,
    Subject: 'Board Meeting',
    Description: 'Meeting to discuss business goal of 2020.',
    StartTime: '2021-01-03T04:00:00.000Z',
    EndTime: '2021-01-03T05:30:00.000Z'
  }, {
    RoomId: 8,
    Id: 2,
    Subject: 'Training session on JSP',
    Description: 'Knowledge sharing on JSP topics.',
    StartTime: '2021-01-05T04:00:00.000Z',
    EndTime: '2021-01-05T05:30:00.000Z'
  }, {
    RoomId: 3,
    Id: 3,
    Subject: 'Sprint Planning with Team members',
    Description: 'Planning tasks for sprint.',
    StartTime: '2021-01-07T04:00:00.000Z',
    EndTime: '2021-01-07T05:30:00.000Z'
  }, {
    RoomId: 2,
    Id: 4,
    Subject: 'Meeting with Client',
    Description: 'Customer meeting to discuss features.',
    StartTime: '2021-01-09T03:30:00.000Z',
    EndTime: '2021-01-09T05:00:00.000Z'
  }, {
    RoomId: 5,
    Id: 5,
    Subject: 'Support Meeting with Managers',
    Description: 'Meeting to discuss support plan.',
    StartTime: '2021-01-04T06:30:00.000Z',
    EndTime: '2021-01-04T08:00:00.000Z'
  }, {
    RoomId: 1,
    Id: 6,
    Subject: 'Client Meeting',
    Description: 'Meeting to discuss client requirements.',
    StartTime: '2021-01-06T06:00:00.000Z',
    EndTime: '2021-01-06T07:30:00.000Z'
  }, {
    RoomId: 7,
    Id: 7,
    Subject: 'Appraisal Meeting',
    Description: 'Meeting to discuss employee appraisals.',
    StartTime: '2021-01-08T05:30:00.000Z',
    EndTime: '2021-01-08T07:00:00.000Z'
  }, {
    RoomId: 6,
    Id: 8,
    Subject: 'HR Meeting',
    Description: 'Meeting to discuss HR plans.',
    StartTime: '2021-01-03T07:30:00.000Z',
    EndTime: '2021-01-03T09:00:00.000Z'
  }, {
    RoomId: 4,
    Id: 9,
    Subject: 'Customer Meeting',
    Description: 'Meeting to discuss customer reported issues.',
    StartTime: '2021-01-07T07:00:00.000Z',
    EndTime: '2021-01-07T08:30:00.000Z'
  }, {
    RoomId: 9,
    Id: 10,
    Subject: 'Board Meeting',
    Description: 'Meeting to discuss business plans.',
    StartTime: '2021-01-09T07:30:00.000Z',
    EndTime: '2021-01-09T09:00:00.000Z'
  }
];
