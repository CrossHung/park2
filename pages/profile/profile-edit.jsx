import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { Input, Select, TextInput } from "@mantine/core";
import { createFormContext } from "@mantine/form";

const ProfileEdit = () => {
  const router = useRouter();

  const [FormProvider, useFormContext, useForm] = createFormContext();

  const navTo = (path) => {
    router.push(path);
  };

  const form = useForm({
    initialValues: {
      age: 0,
      name: "",
    },
  });

  function ContextField() {
    const form = useFormContext();
    // return <TextInput label="Your name" {...form.getInputProps("name")} />;
    return (
      <div className="flex flex-col h-full gap-[30px] items-center">
        <TextInput
          label="姓名"
          className="w-full"
          placeholder="請輸入您的名字"
        />
        <TextInput
          label="Email"
          className="w-full"
          placeholder="請輸入您的Email"
        />
        <div class="flex gap-3">
          <Select
            label="生日"
            placeholder="西元"
            data={[
              { value: "2023", label: "2023" },
              { value: "2022", label: "2022" },
              { value: "2021", label: "2021" },
              { value: "2020", label: "2020" },
            ]}
          />
          <Select
            label="&nbsp;"
            placeholder="月"
            data={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
            ]}
          />
          <Select
            label="&nbsp;"
            placeholder="日"
            data={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
            ]}
          />
        </div>

        <TextInput label="匿稱" className="w-full" />
        <div>性別</div>

        <div class="flex gap-3">
          <Select
            label="居住地點"
            placeholder="縣市"
            data={[
              { value: "2023", label: "2023" },
              { value: "2022", label: "2022" },
              { value: "2021", label: "2021" },
              { value: "2020", label: "2020" },
            ]}
          />
          <Select
            label="&nbsp;"
            placeholder="鄉鎮市區"
            data={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
            ]}
          />
        </div>
        <TextInput className="w-full" placeholder="地址" />
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

  return (
    <FormProvider form={form}>
      <form onSubmit={form.onSubmit(() => {})}>
        <ContextField />
      </form>
    </FormProvider>
  );
};

export default ProfileEdit;

ProfileEdit.getLayout = function getLayout(page) {
  return <Layout header={<Navbar title="個人資料設定" />}>{page}</Layout>;
};
