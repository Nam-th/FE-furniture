'use client'
import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import axios from 'axios';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

interface IDeleteProduct {
  id: number;
  name: string;
}
const DeleteProductBtn: React.FC<IDeleteProduct> = ({ id, name }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter()
  const confirmDelete = async () => {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      messageApi.open({
        type: 'error',
        content: 'User is not authenticated',
      });
      return;
    }
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      messageApi.open({
        type: 'success',
        content: 'Delete the product successfully',
      });
      router.refresh();
    } catch (error) {}
  };
  return (
    <>
      {contextHolder}

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            type="button"
            className="text-2xl text-red-600 hover:underline dark:text-red-500"
          >
            <DeleteOutlined />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              product &rdquo;{name}&rdquo; and remove from servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteProductBtn;
