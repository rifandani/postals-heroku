// legacy callback style - not encouraged anymore
// (event, context, callback)

// modern JS style - encouraged
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work */
      'Access-Control-Allow-Origin': '*',
      /* Required for cookies, authorization headers with HTTPS */
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: 'Netlify lambda functions is awesome!',
      event,
      context,
    }),
  };
};
