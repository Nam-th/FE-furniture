import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import AddProductForm from '../Form/AddProductForm';

export default function AddProductDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'default'} className="mb-4">
            Add a New Product
          </Button>
        </DialogTrigger>
        <DialogContent className="lg:max-w-[575px] pr-0">
          <DialogHeader>
            <DialogTitle>Add a New Product</DialogTitle>
            <DialogDescription>
              Make changes to your product here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          {/* Form Add Product */}
          <AddProductForm />
          {/*  */}
        </DialogContent>
      </Dialog>
    </>
  );
}
