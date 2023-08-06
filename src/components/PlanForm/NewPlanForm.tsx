'use client'
import { createPlanAction } from "@/src/app/_action";
import { useRef } from "react";

const NewPlanForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const name = data.get('name');
    if (!name || typeof name !== 'string') return;

    await createPlanAction(name);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action} className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800">Start a New Plan</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Plan Name</label>
        <input type="text" name="name" className="block w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#17B890] transition duration-150 ease-in-out" />
      </div>

      <div className="mb-4">
        <label htmlFor="car" className="block text-sm font-medium text-gray-600">Car Link</label>
        <input type="text" name="car" className="block w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#17B890] transition duration-150 ease-in-out" />
      </div>

      <div className="mb-4">
        <label htmlFor="house" className="block text-sm font-medium text-gray-600">House Link</label>
        <input type="text" name="house" className="block w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#17B890] transition duration-150 ease-in-out" />
      </div>

      <button type="submit" className="w-full bg-[#17B890] text-white py-2 px-4 rounded-lg hover:bg-[#5EEAD4] transition duration-200 ease-in-out">Generate</button>
    </form>
  );
};

export default NewPlanForm;
