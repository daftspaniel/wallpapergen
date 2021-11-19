export const Logger = (config) => {
  return {
    log: (text) => {
      if (config.log) {
        console.log(text);
      }
    },
  };
};
