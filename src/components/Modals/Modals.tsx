import * as React from 'react';
import Types from 'Types';
import Modal from './Modal';
import { connect } from 'react-redux';
import {
  closeModal,
  confirmAction,
  CloseModalRequest,
  ModalRequest
} from '../../features/layout/actions';
import { layoutsSelectors } from '../../features/layout';

interface Props {
  modals: any[];
  onCloseModal: (req: CloseModalRequest) => any;
  onConfirm: (req: ModalRequest) => any;
}

const Modals: React.SFC<Props> = props => {
  const handleCloseModal = (item: CloseModalRequest) => () => {
    props.onCloseModal(item);
  };
  const handleConfirm = (item: ModalRequest) => () => {
    props.onConfirm(item);
  };
  const modals = props.modals.map(item => (
    <Modal
      key={item.id}
      modalRequest={item}
      onConfirm={handleConfirm(item)}
      onClose={handleCloseModal(item)}
    />
  ));
  return <div className="modals">{modals}</div>;
};

const mapStateToProps = (state: Types.RootState) => ({
  modals: layoutsSelectors.getModals(state.layout)
});

const ModalsConnected = connect(
  mapStateToProps,
  {
    onCloseModal: closeModal,
    onConfirm: confirmAction
  }
)(Modals);

export default ModalsConnected;
