import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClientSpy } from '../../test/mock-http-client';

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url';
    const httpClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpClientSpy);
    await sut.auth();
    expect(httpClientSpy.url).toBe(url);
  });
});
