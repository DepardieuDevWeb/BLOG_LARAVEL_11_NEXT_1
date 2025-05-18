const fecthInvoicePages = async (query = "") => {
  const res = await fetch(`${process.env.API_URL}/api/articles?query=${query}`);
  const data = await res.json();
  return Math.ceil(data.total / 10);
};

export default fecthInvoicePages;
