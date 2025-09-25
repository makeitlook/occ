import React from "react";
import Modal from "@/components/Modal/Modal";
import PrivacyPolicyContent from "@/components/Legal/PrivacyPolicyContent";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <PrivacyPolicyContent />
    </Modal>
  );
};

export default PrivacyPolicyModal;
