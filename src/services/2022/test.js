
const rootFileSystem = {
  name: '/',
  size: 0,
  files: [
    {
      name: 'a',
      size: 0,
      files: [
        {
          name: 'fileA.txt',
          size: 1,
        },
        {
          name: 'a-d',
          size: 0,
          files: [
            {
              name: 'fileA-D.txt',
              size: 2,
            },
            {
              name: 'a-d-e',
              size: 0,
              files: [
                {
                  name: 'fileA-D-E.txt',
                  size: 3,
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'b',
      size: 0,
      files: [
        {
          name: 'fileB.txt',
          size: 4,
        },
        {
          name: 'c',
          size: 0,
          files: [
            {
              name: 'fileC.txt',
              size: 5,
            }
          ]
        }
      ]
    }
  ]
};

const searchFor = (name, files) => {
  for (let i = 0; i < files?.length; i++) {
    const elem = files[i];
    if ((elem.name) === name) return elem;
    else if (files?.length > 0) {
      const foundElem = searchFor(name, elem.files);
      if (foundElem) return foundElem;
    }
  }
}

const found = [];
const findAll = (size, files) => {
  files.forEach(x => {
    if (x.size === size) found.push(x);
    if (x.files?.length > 0) findAll(size, x.files);
  });
}

// console.log('rootFileSystem', JSON.stringify(rootFileSystem));
// console.log('len', rootFileSystem.files.length)
console.log('searchFor - c', searchFor('a-d-e', rootFileSystem.files));

findAll(111, rootFileSystem.files);
console.log('searchFor size 111', found);

console.log('flatMapSize', rootFileSystem.files.flatMap(x => x.size));
