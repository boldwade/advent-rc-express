const sumNumbers = (p: number | undefined, c: number | undefined) => (p ?? 0) + (c ?? 0);
const separator: string = '|-|';

export class FsItem {

  files: FsItem[] = [];

  private readonly _parentPath?: string;
  get parentPath() {
    return this._parentPath;
  }

  get parentFolderKey() {
    if (!this.parentPath) return undefined;
    const lastSeparatorIdx = this.parentPath.lastIndexOf(separator);
    if (lastSeparatorIdx === -1) {
      return this.parentPath;
    }
    const lastKey = this.parentPath.substring(lastSeparatorIdx + 3);
    return lastKey;
  }

  private readonly _name: string | undefined;
  get name() {
    return this._name;
  }

  private readonly _isDirectory: boolean = false;
  get isDirectory() {
    return this._isDirectory;
  }

  private readonly _fileSize: number | undefined = 0;
  get fileSize() {
    return this._fileSize ?? 0;
  }

  get filesSize(): number {
    return this.files?.map(x => x.fileSize)?.filter(x => !!x).reduce(sumNumbers, 0) || 0;
  }

  get size(): number {
    const directoriesSize = this.files.filter(x => x.isDirectory).map(x => x.size);
    return (this.filesSize || 0) + directoriesSize.reduce(sumNumbers, 0);
  }

  get sizeRecursive(): number {
    const directoriesSize = this.files.filter(x => x.isDirectory).map(x => (x.filesSize + x.sizeRecursive));
    return this.filesSize + directoriesSize.reduce(sumNumbers, 0);
  }

  findByName = (name: string, files: FsItem[] = this.files): FsItem | undefined => {
    for (let i = 0; i < files?.length; i++) {
      const elem = files[i];
      if ((elem.name) === name) return elem;
      else if (files?.length > 0) {
        const foundElem = this.findByName(name, elem.files);
        if (foundElem) return foundElem;
      }
    }
    return undefined;
  };

  add(name: string, fileSize?: number): FsItem {
    const parentPath = (!!this.parentPath ? this.parentPath + separator : '') + this._name;
    const fsItem = new FsItem(name, parentPath, fileSize);
    this.files.push(fsItem);
    return fsItem;
  }

  constructor(name: string, key?: string, fileSize?: number) {
    this._name = name;
    this._isDirectory = (fileSize ?? 0) === 0;
    this._fileSize = fileSize;
    this._parentPath = key;
  }
}


export const Day7Map = (input: string[]): FsItem => {
  const rootDirectory = '/';
  const fileSystem = new FsItem(rootDirectory);
  let currentFs: FsItem = fileSystem;

  let commandName = '';
  let currentDirectory = rootDirectory;

  input = input.filter(x => !!x);
  input.forEach(x => {
    const args = x.split(' ');
    if (args[0] === '$') {
      commandName = args[1];
      if (commandName === 'cd') {
        if (args[2] === '..') {
          // Could be problematic with duplicate folder names
          const parentFolderKey = currentFs.parentFolderKey;
          if (parentFolderKey === '/') currentFs = fileSystem;
          else currentFs = fileSystem.findByName(parentFolderKey);
        } else {
          currentDirectory = args[2];
          currentFs = fileSystem.findByName(args[2]);
        }
        if (!currentFs) currentFs = fileSystem;
      }
    } else if (commandName === 'ls') {
      if (currentFs.findByName(args[1])) return;
      if (args[0].startsWith('dir')) {
        currentFs.add(args[1]);
      } else {
        currentFs.add(args[1], Number.parseInt(args[0]));
      }
    }
  });

  // console.log('fileSystem', JSON.stringify(fileSystem));
  return fileSystem;
};

export const Day7a = (input: FsItem): number => {
  const findAllDirsWithLessThan = (maxSize: number, files: FsItem[]) => {
    const sizes: number[] = [];
    const findAll = (files: FsItem[]) => {
      files.forEach(x => {
        if (x.sizeRecursive < maxSize) {
          // if (x.size > 0) sizes.push(x.size);
          sizes.push(x.sizeRecursive);
        } else if (x.files?.length > 0) {
          findAll(x.files);
        }
      });
    };
    findAll(files);
    return sizes;
  };

  const result = findAllDirsWithLessThan(100000, input.files).reduce(sumNumbers);
  return result;
};

export const Day7b = (input: FsItem): number => Day7a(input);
