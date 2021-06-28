import faker from 'faker';
import { HttpPostClientSpy } from '@/data/test';
import { AccountModel } from '@/domain/models';
import { AddAccountParams } from '@/domain/usecases';
import { RemoteAddAccount } from './remove-add-add-account';
import { mockAddAccountParams } from '@/domain/test';

type SutTypes = {
  sut: RemoteAddAccount;
  httpClientSpy: HttpPostClientSpy<AddAccountParams, AccountModel>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpPostClientSpy<AddAccountParams, AccountModel>();
  const sut = new RemoteAddAccount(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoveAddAccount', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    await sut.add(mockAddAccountParams());
    expect(httpClientSpy.url).toBe(url);
  });
});
