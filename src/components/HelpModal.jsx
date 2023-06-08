import React from "react";
import "../pages/Customizer/customizer.css";
import { IoMdHelp } from "react-icons/io";
import { BsFront } from "react-icons/bs";
import { BsBack } from "react-icons/bs";
import { GoArrowSmallUp } from "react-icons/go";
import { GoArrowSmallDown } from "react-icons/go";
import { GoArrowSmallLeft } from "react-icons/go";
import { GoArrowSmallRight } from "react-icons/go";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const HelpModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div
        className="modal-left-bottom-btns help-modal-container"
        onClick={onOpen}
      >
        <IoMdHelp className="help" />

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent>
            <div className="help-title">
              <div className="help-title-title">Instructions</div>
              <ModalCloseButton />
            </div>
            <ModalBody>
              <div className="btns-instructions">
                <div className="btns-instruction">
                  <BsFront className="help-side" /> Put the image that you
                  loaded on the front side.
                </div>
                <div className="btns-instruction">
                  <BsBack className="help-side" /> Put the image that you loaded
                  on the back side.
                </div>
                <div className="btns-instruction">
                  <GoArrowSmallUp className="help-arrow" /> Move your image up.
                </div>
                <div className="btns-instruction">
                  <GoArrowSmallDown className="help-arrow" /> Move your image
                  down.
                </div>
                <div className="btns-instruction">
                  <GoArrowSmallLeft className="help-arrow" /> Move your image
                  left.
                </div>
                <div className="btns-instruction">
                  <GoArrowSmallRight className="help-arrow" /> Move your image
                  right.
                </div>
              </div>
              <div className="general-instructions">
                <p>
                  You can put your image on one or both the sides. <br />
                  You can move it in the front and back side separately in
                  different positions. <br />
                  You can put only one image per time. <br />
                  Have fun!
                </p>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default HelpModal;
