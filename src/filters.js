import numeral from "numeral";

const dolarFilter = function(value) {
  if (!value) {
    return "$ 0";
  }

  return numeral(value).format("($ 0.00a)");
};

const percentFilters = function(value) {
  if (!value) {
    return "$ 0";
  }
  return `${Number(value).toFixed(2)} %`;
};

export { dolarFilter, percentFilters };
