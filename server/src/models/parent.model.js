const fs = require('fs');
const path = require('path');
const JSONStream = require('JSONStream');
const { getModifiedTransactions } = require('./child.model');

const parentTransactions = [];

const loadParentTransactions = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'Parent.json')).pipe(
      JSONStream.parse('*')
    ).on('data', (data) => {
      parentTransactions.push(...data);
    }
    ).on('end', () => {
      console.log('Parent transactions loaded');
      resolve();
    }
    ).on('error', (err) => {
      console.log('Error loading parent transactions');
      reject(err);
    }
    );
  });
};

const getParentTransactionsPaginated = (skip, end) => {
  let paginatedParentTransactions = parentTransactions.slice(skip, end);

  paginatedParentTransactions = addChildData(paginatedParentTransactions);
  return paginatedParentTransactions;
};

const addChildData = (parentTransactions) => {
  parentTransactions.forEach((parent) => {
    parent.childData = getModifiedTransactions()[parent.id];
  });
  return parentTransactions;
};

const getParentTransactions = () => {
  return parentTransactions;
};

module.exports = { loadParentTransactions, getParentTransactions, getParentTransactionsPaginated };