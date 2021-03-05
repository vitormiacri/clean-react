import faker from 'faker';
import { HttpPostClientSpy } from '@/data/test/mock-http-client';
import { mockAuthentication } from '@/domain/test/mock-authentication';
import { RemoteAuthentication } from './remote-authentication';

type SutTypes = {
  sut: RemoteAuthentication;
  httpClientSpy: HttpPostClientSpy;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpClientSpy.url).toBe(url);
  });

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpClientSpy } = makeSut();
    const authenticationParams = mockAuthentication();
    await sut.auth(authenticationParams);
    expect(httpClientSpy.body).toEqual(authenticationParams);
  });
});
