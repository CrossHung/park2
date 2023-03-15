import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { Input, Select, TextInput } from "@mantine/core";
import { createFormContext } from "@mantine/form";

const CarEdit = () => {
  const router = useRouter();

  const [FormProvider, useFormContext, useForm] = createFormContext();

  function ContextField() {
    const form = useFormContext();
    // return <TextInput label="Your name" {...form.getInputProps("name")} />;
    return (
      <div className="flex flex-col h-full gap-[30px] items-center">
        <TextInput label="廠牌" className="w-full" />
        <TextInput label="車牌" className="w-full" />
        <div className="flex gap-3">
          <TextInput className="w-full" />
          -
          <TextInput className="w-full" />
        </div>
        <button
          type="button"
          className={`py-2 px-4 rounded-full w-full  ${styles["btn-primary"]}`}
          onClick={() => navTo("/profile")}
        >
          儲存
        </button>
      </div>
    );
  }

  const navTo = (path) => {
    router.push(path);
  };

  const form = useForm({
    initialValues: {
      age: 0,
      name: "",
    },
  });

  return (
    <FormProvider form={form}>
      <form onSubmit={form.onSubmit(() => {})}>
        <ContextField />
      </form>
    </FormProvider>
  );
};

export default CarEdit;

CarEdit.getLayout = function getLayout(page) {
  return <Layout header={<Navbar title="編輯您的愛車" />}>{page}</Layout>;
};
