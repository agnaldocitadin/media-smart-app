export const RequestUtils = {

    readBytesRange: (request) => {
        if (!request.headers['range']) {
            console.error("This is not a valid range request.", request.url)
            return
        }

        let range = request.headers.range;
        let parts = range.replace(/bytes=/, "").split("-");
        let chunkStart = parts[0];
        let chunkEnd = parts[1];
        let start = parseInt(chunkStart, 10);
        let end = chunkEnd ? parseInt(chunkEnd, 10) : null;

        return {
            start: start,
            end: end
        }
    }

}