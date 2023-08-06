'use client'
import { createPlanAction } from "@/src/app/_action";
import { useRef } from "react";

const NewPlanForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const name = data.get('name');
    if (!name || typeof name !== 'string') return;

    // Call server to create a plan
    await createPlanAction(name);

    // Reset the form
    formRef.current?.reset();

    // Redirect to the new plan
    // Implement the redirection logic here
  }

  return (
    <form ref={formRef} action={action} className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create a new Plan</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold">Name</label>
        <input type="text" name="name" className="block w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div className="mb-4">
        <label htmlFor="car" className="block font-semibold">Car Link</label>
        <input type="text" name="car" className="block w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div className="mb-4">
        <label htmlFor="house" className="block font-semibold">House Link</label>
        <input type="text" name="house" className="block w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Generate Plan</button>
    </form>
  );
};

export default NewPlanForm;
