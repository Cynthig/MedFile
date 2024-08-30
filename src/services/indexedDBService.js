const DB_NAME = 'PatientDatabase';
const DB_VERSION = 1;
const STORE_NAME = 'patients';

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      store.createIndex('nameIndex', ['name', 'surname', 'idNumber'], { unique: false });
    };
  });
};

export const initDB = () => {
  return openDB();
};

export const insertPatient = async (patient) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.add(patient);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

export const fetchPatient = async (name, surname, idNumber) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index('nameIndex');
    const request = index.getAll([name, surname, idNumber]);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};