const { getParentTransactions, getParentTransactionsPaginated } = require("../../models/parent.model");
const { getPagination } = require("../../services/query");

const httpGetAllParentTransactions = (req, res) => {
  const { skip, end } = getPagination(req.query);

  const paginatedTransactions = getParentTransactionsPaginated(skip, end);

  if (paginatedTransactions.length === 0) {
    return res.status(404).json({
      error: 'Page not found'
    });
  }

  return res.status(200).json(paginatedTransactions);

};

module.exports = { httpGetAllParentTransactions };