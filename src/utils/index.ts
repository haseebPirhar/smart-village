export * from "./fileHelper";

export const generateResponse = (
  status: number,
  message: string,
  data?: any
) => {
  return {
    status,
    message,
    data,
  };
};

export const handleError = (error: any) => {
  console.error(error);
  return {
    status: 500,
    message: "Internal Server Error",
  };
};
