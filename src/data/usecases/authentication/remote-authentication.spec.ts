import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClientSpy } from '../../test/mock-http-client';

type SutTypes = {
  sut: RemoteAuthentication;
  httpClientSpy: HttpPostClientSpy;
};

const makeSut = (url = 'any_url'): SutTypes => {
  const httpClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url';
    const { sut, httpClientSpy } = makeSut(url);
    await sut.auth();
    expect(httpClientSpy.url).toBe(url);
  });
});
