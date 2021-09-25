const addMedicine = (req, res) => {
    //addMedicine api logic here
};

const updateMedicine = (req, res) => {
    //updateMedicine api logic here
};

const searchMedicines = (req, res) => {
    //searchMedicines api logic here
};

const MapSymptomToMedicine = (req, res) => {
    //MapSymptomToMedicine api logic here
};

const fetchMedicinesForSymptom = (req, res) => {
    //Given a symptom, return all the medicines for that symptom
};


const MedicinesController = {
    addMedicine,
    updateMedicine,
    MapSymptomToMedicine,
    searchMedicines,
    fetchMedicinesForSymptom
};

module.exports = MedicinesController;