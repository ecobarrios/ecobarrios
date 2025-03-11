"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface Props {
  onClose: () => void;
}

function FormInscription(props: Props) {
  const { onClose } = props;
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogTrigger>
        <Button variant="outline"></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Formulario Ecobarrios</DialogTitle>
        </DialogHeader>
        <iframe
          className="w-full h-[700px]"
          src="https://forms.gle/pTycdze6GSSiBjCK9"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}

export default FormInscription;
