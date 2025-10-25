const httpError = (status: number, msg: string) =>
    Object.assign(new Error(msg), { status });

export default {
    http: (status: number, msg: string) => httpError(status, msg),
    badRequest: (msg: string = 'Bad Request') => httpError(400, msg),
    unauthorized: (msg: string = 'Unauthorized') => httpError(401, msg),
    forbidden: (msg: string = 'Forbidden') => httpError(403, msg),
    notFound: (msg: string = 'Not Found') => httpError(404, msg),
    conflict: (msg: string = 'Conflict') => httpError(409, msg),
    internal: (msg: string = 'Internal Error') => httpError(500, msg),
};

