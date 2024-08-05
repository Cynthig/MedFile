// src/models/Patient.js
export class Patient {
    constructor(id, name, surname, middleNames, hospitalId, currentDiagnosis, previousDiagnosis, currentMeds, previousMeds, visits, idNumber, fileNumber, nextOfKin, emergencyContacts) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.middleNames = middleNames;
      this.hospitalId = hospitalId; // Encrypted
      this.currentDiagnosis = currentDiagnosis;
      this.previousDiagnosis = previousDiagnosis;
      this.currentMeds = currentMeds;
      this.previousMeds = previousMeds;
      this.visits = visits;
      this.idNumber = idNumber;
      this.fileNumber = fileNumber;
      this.nextOfKin = nextOfKin;
      this.emergencyContacts = emergencyContacts;
    }
  }
  