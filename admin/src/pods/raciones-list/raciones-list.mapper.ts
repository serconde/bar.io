//VM
import * as apiModel from './api/racion.api-model';
import * as viewModel from './racion.vm';

export const mapRacionesListFromApiToVm = (racionList: apiModel.Racion[]): viewModel.Racion[] =>
  racionList.map((e) => mapRacionFromApiToVm(e));

export const mapRacionesListFromVmToApi = (racionList: viewModel.Racion[]): apiModel.Racion[] =>
  racionList.map((e) => mapRacionFromVmToApi(e));

export const mapRacionFromApiToVm = (racion: apiModel.Racion): viewModel.Racion => ({
  id: racion.id,
  value: racion.name,
});

export const mapRacionFromVmToApi = (racion: viewModel.Racion): apiModel.Racion => ({
  id: racion.id,
  name: racion.value,
});
