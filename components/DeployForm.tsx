import { TableItem } from "@/types/crypto";
import { useRouter } from "next/router";
import React from "react";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { useAccount } from "wagmi";

type FormValues = Omit<TableItem & { rollOverPeriod: number }, "id">; // Exclude 'id' from TableItem for form

export const DeployForm: React.FC<{ deployAddress: any }> = ({
  deployAddress,
}) => {
  const { register, handleSubmit, formState } = useForm();
  const router = useRouter();
  const { address } = useAccount();
  const [state, setState] = React.useState<any>({
    tokenName: "",
    itoPrice: 0,
    recallPrice: 0,
    totalCount: 0,
    recallTime: 0,
  });

  const onSubmit = async (data: any) => {
    // Handle form submission logic here
    setState(data);
    if (!address) return;
    await deployAddress?.();
    router.push("/token?id=ksnvlskvs&tokenType=deployed");
  };

  const onError: SubmitErrorHandler<FormValues> = (errors) => {
    // Handle form submission error logic here
    console.error(errors);
  };

  return (
    <div className="max-w-lg mx-auto mt-4 p-4 text-white shadow-md rounded-md text-black">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Token Information */}
        <div className="mb-4">
          <label
            htmlFor="tokenName"
            className="block text-sm font-medium text-white"
          >
            Token Name
          </label>
          <input
            {...register("tokenName")}
            type="text"
            id="tokenName"
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="itoPrice"
            className="block text-sm font-medium text-white"
          >
            ITO Price
          </label>
          <input
            {...register("itoPrice")}
            type="number"
            id="itoPrice"
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="recallPrice"
            className="block text-sm font-medium text-white"
          >
            Recall Price
          </label>
          <input
            {...register("recallPrice")}
            type="number"
            id="recallPrice"
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="totalCount"
            className="block text-sm font-medium text-white"
          >
            Total Count
          </label>
          <input
            {...register("totalCount")}
            type="number"
            id="totalCount"
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="recallTime"
            className="block text-sm font-medium text-white"
          >
            Recall Time
          </label>
          <input
            {...register("recallTime")}
            type="number"
            id="recallTime"
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>

        {/* Submit button */}
        <div className="mt-4">
          <button
            type="submit"
            className="bg-white hover:bg-white text-black font-bold py-2 px-4 rounded-full cursor-pointer focus:outline-none focus:shadow-outline"
            disabled={formState.isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
