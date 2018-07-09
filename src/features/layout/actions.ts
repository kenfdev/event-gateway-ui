import { createAction } from 'typesafe-actions';


export type OpenConfirmModalRequest = {
  id: string;
  type: 'confirmation';
  text: string;
};

export type CloseModalRequest = {
  id: string;
};

export type ModalRequest = OpenConfirmModalRequest

export const openConfirmModal = createAction('OPEN_CONFIRM_MODAL', resolve => {
  return (req: OpenConfirmModalRequest) => resolve(req);
});

export const closeModal = createAction('CLOSE_MODAL', resolve => {
  return (req: CloseModalRequest) => resolve(req);
});

export const confirmAction = createAction('CONFIRM_ACTION', resolve => {
  // TODO: Fix type to more generic one
  return (req: ModalRequest) => resolve(req);
})