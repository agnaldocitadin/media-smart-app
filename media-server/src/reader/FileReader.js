import fs from 'fs'

export const readChunk = (file, chunkStart, chunkEnd) => {
    
    let status = fs.statSync(file);
    if (!chunkEnd) {
        chunkEnd = status.size
    }

    let streamChunk = fs.createReadStream(file, { start: chunkStart, end: chunkEnd });
    return {
        stream: streamChunk,
        chunkSize: (chunkEnd - chunkStart) + 1,
        status: status
    }
}