import Modal from './Modal';
import { XCircle } from 'lucide-react';
import styles from './Modal.module.css';

export default function DeleteModal(props) {
  return (
    <Modal
      title={`Delete ${props.item}`}
      isOpen={props.isOpen}
      closeModal={props.closeModal}
    >
      <div className={`column ${styles.delete}`}>
        <XCircle size={85} color="#FF6F66" strokeWidth={1} />
        <h2>Are you sure?</h2>
        <p>
          Do you really want to delete this {props.item.toLowerCase()}? This
          process cannot be undone.
        </p>
      </div>
      <div className="row">
        <button
          type="submit"
          className="adminButton cancelButton"
          onClick={props.closeModal}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="adminButton deleteButton"
          onClick={props.deleteHandler}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
