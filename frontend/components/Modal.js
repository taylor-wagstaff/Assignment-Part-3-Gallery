// https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
// How to Create a Modal in React By Francisco Mendes

const Modal = ({ setIsOpen }) => {
  // I used ChatGpt for the styling so that it could generate a
  // pop up in the middle on the page, rather than inside the
  // footer component

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
  }

  return (
    <div style={modalStyle} onClick={() => setIsOpen(false)}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.83782939278!2d174.76352661136121!3d-36.84635977211814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fba9336e39%3A0xc4c45d37894c133b!2s86%20Queen%20Street%2C%20Auckland%20CBD%2C%20Auckland%201010!5e0!3m2!1sen!2snz!4v1699994033957!5m2!1sen!2snz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Modal
