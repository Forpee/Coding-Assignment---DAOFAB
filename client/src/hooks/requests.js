const API_URL = 'http://localhost:8000/v1';

const httpGetTransactions = async (page) => {
  const response = await fetch(`${API_URL}/transactions${page ? `?page=${page}` : ""}`);
  return await response.json();
};

export { httpGetTransactions };