import { Response } from "express";

export type ApiResponse<T = unknown> = {
  code: number;
  data: {
    status: boolean;
    message: string;
    payload?: T;
    error?: unknown;
  };
};

export const mappingSuccess = <T = unknown>(
  message: string,
  payload: T,
  code: number = 200,
): ApiResponse<T> => ({
  code,
  data: {
    status: true,
    message: message,
    payload,
  },
});

export const mappingError = <E = unknown>(
  message: string,
  error?: E,
  code: number = 400,
): ApiResponse<E> => ({
  code,
  data: {
    status: false,
    message,
    error,
  },
});

export const baseResponse = <T = unknown>(
  res: Response,
  data: ApiResponse<T>,
) => {
  const { code, data: body } = data;
  return res.status(code ?? 200).json(body);
};
