import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalShow(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{padding:"0px"}}>
        <img style={{width:"100%"}} src="../img/4.webp" alt="" />
      </Modal.Body>
    </Modal>
  );
}
export default ModalShow;