const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 2;

function getPagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;
  const end = skip + limit;

  return {
    skip,
    end,
  };
}

module.exports = {
  getPagination,
};