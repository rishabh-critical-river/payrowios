const retry = async (
  fn: any,
  retriesLeft = 5,
  interval = 1000
): Promise<any> => {
  try {
    const val = await fn();
    return val;
  } catch (error) {
    await new Promise((r) => setTimeout(r, interval));
    if (retriesLeft === 1) {
      throw error;
    }
    return retry(fn, retriesLeft - 1, interval);
  }
};

export default retry;
