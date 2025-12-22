const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  const strId = id.toString();
  const record = records[strId];

  if (!value) {
    console.log('inside if')
    delete record[prop];
  } else if (prop !== 'tracks') {
    record[prop] = value
  } else {
    if (!record[prop]) {
      record[prop] = [value];
    } else {
      record[prop].push(value)
    }
  }
  return records;
}

