import { addHours, format, parseISO } from "date-fns";

export const currentDate = () => {
  const date = format(new Date(), "yyyy-MM-dd");
  return date;
};

export const formatDate = (date) => {
  const firstDate = parseISO(date);
  const formattedDate = format(addHours(new Date(firstDate), 3), "dd/MM/yyyy");
  return formattedDate;
};

export function formatDateRecipe(data) {
  const dia = data.split("/")[0];
  const mes = data.split("/")[1];
  const ano = data.split("/")[2];

  return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
}

export const formatDateMessage = (date) => {
  const firstDate = parseISO(date);
  const formattedDate = format(firstDate, "dd/MM/yy");
  return formattedDate;
};
