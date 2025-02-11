const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase == PHASE_DEVELOPMENT_SERVER)
    return {
      env: {
        database_name: "blog",
      },
    };

  // same actually, just for example of phase usage
  return {
    env: {
      database_name: "blog",
    },
  };
};
