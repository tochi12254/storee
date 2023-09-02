"use client";

//import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetUpPage = () => {
  const storeModal = useStoreModal();

  useEffect(() => {
    if(!storeModal.isOpen){
      storeModal.onOpen();
    }
  }, [storeModal])

  return null;
}

export default SetUpPage;