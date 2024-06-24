export class ServerError extends Error {
  status: number;

  constructor(status: number = 500, message: string) {
    super(message);
    this.status = status;
  }
}

/**
 * Safe response handler in case of any error
 * @param res
 * @param callBack
 */
export const safeResponse = async (
  res: {
    status(number: number): { json: (arg0: unknown) => unknown };
  },
  callBack: () => Promise<unknown>,
) => {
  try {
    return res.status(200).json(await callBack?.());
  } catch (e) {
    const error = e as ServerError;
    return res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
};
