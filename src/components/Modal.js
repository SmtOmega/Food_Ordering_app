import ReactDom from 'react-dom'


const Backdrop = ({onClose}) => {
    return <div className="backdrop" onClick={onClose}></div>
};
const ModalOverlay = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-contents">{children}</div>
    </div>
  );
};

const Modal = ({children, onClose}) => {
    return <>
    {ReactDom.createPortal(<Backdrop onClose={onClose}/>, document.getElementById('overlay'))}
    {ReactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById('overlay'))}
    </>
}


export default Modal