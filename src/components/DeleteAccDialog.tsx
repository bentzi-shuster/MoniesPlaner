"use client"
import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { deletePlansForUserAction } from '../app/_action';

const DeleteAccDialog = () => {

  async function action() {
    await deletePlansForUserAction();
    // logout and redirect to home page
    window.location.href = "/api/auth/logout";
  }
  return (<>
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="text-white hover:text-red-500 hover:bg-red-100 rounded-lg bg-[#17B890] px-4 py-2 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-red-400">
          Delete Account
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-black bg-opacity-50 fixed inset-0" />
        <AlertDialog.Content className="fixed top-1/2 left-1/2 max-h-85vh w-full max-w-md transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl focus:outline-none">
          <AlertDialog.Title className="text-gray-900 text-xl font-semibold m-0">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="text-gray-600 mt-4 mb-5 text-base leading-normal">
            Deleting your account is permanent. All of your plans will be deleted. This action cannot be undone.
          </AlertDialog.Description>
          <div className="flex justify-end gap-4">
            <AlertDialog.Cancel asChild>
              <button className="text-gray-500 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-gray-400">
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button onClick={action} className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-red-400">
                Yes, delete account
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  </>);
};

export default DeleteAccDialog;
