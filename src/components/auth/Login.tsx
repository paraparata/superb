import React, { useState } from "react";
import { Button, Modal } from "../ui";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleOnOpenModal = () => {
    setShow(true);
  };
  const handleOnCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onClose={handleOnCloseModal}>
        <div>
          <h1>siapa</h1>
        </div>
      </Modal>
      <Button onClick={handleOnOpenModal}>Login</Button>
    </>
  );
};

export default Login;
