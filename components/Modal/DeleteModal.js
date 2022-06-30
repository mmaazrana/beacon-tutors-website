import Modal from './Modal';
import { XCircle } from 'lucide-react';
import styles from './Modal.module.css';

export default function DeleteModal(props) {
  return (
    <Modal
      title={`${props.action} ${props.item}`}
      isOpen={props.isOpen}
      closeModal={props.closeModal}
    >
      <div className={`column ${styles.delete}`}>
        <XCircle size={85} color="#FF6F66" strokeWidth={1} />
        <h2>Are you sure?</h2>
        <p>
          {`Do you really want to ${props.action.toLowerCase()} this ${props.item.toLowerCase()}? This process cannot be undone.`}
        </p>
      </div>
      <div className="row">
        <button
          type="submit"
          className={`adminButton ${styles.cancelButton}`}
          onClick={props.closeModal}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={`adminButton ${styles.deleteButton}`}
          onClick={props.deleteHandler}
          disabled={props.isDisabled}
        >
          {props.action}
        </button>
      </div>
    </Modal>
  );
}
