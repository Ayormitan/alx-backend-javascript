function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetforCurrentYear(income, gdp, capita) {
  const currentyear = getCurrentYear();
  const budget = {
  
  [`income-${currentyear}`]: income,
  [`gdp-${currentyear}`]: gdp,
  [`capita-${currentyear}`]: capita
  };
  return budget;
}
