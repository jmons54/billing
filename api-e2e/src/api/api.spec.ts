import axios from 'axios';

describe('GET /', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/ping`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual('pong');
  });
});
