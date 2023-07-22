const fs = require('fs');
const path = require('path');
const JSONStream = require('JSONStream');

const modifiedChildTransactions = {};

const loadChildTransactions = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'Child.json')).pipe(
      JSONStream.parse('data.*')
    ).on('data', (data) => {
      const { parentId, paidAmount } = data;
      if (parentId in modifiedChildTransactions) {
        modifiedChildTransactions[parentId].totalAmount += paidAmount;
        modifiedChildTransactions[parentId].childTransactions.push(data);
      } else {
        modifiedChildTransactions[parentId] = {
          totalAmount: paidAmount,
          childTransactions: [data]
        };
      }
    }
    ).on('end', () => {
      console.log('Child transactions loaded');
      resolve();
    }
    ).on('error', (err) => {
      console.log('Error loading child transactions');
      reject(err);
    }
    );
  });
};

const getModifiedTransactions = () => {
  return modifiedChildTransactions;
};

module.exports = { loadChildTransactions, getModifiedTransactions };
