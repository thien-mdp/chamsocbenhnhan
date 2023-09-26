import { useForm } from "react-hook-form";

const FormInput = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      birthday: "",
      address: "",
      cccd: "",
      BHYT: "",
      chuandoan: "",
      ngaynhapvien: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 pt-4 border-2 rounded-md">
          <h2 className="mb-8 text-xl font-bold text-center text-gray-900 capitalize ">Add a new patient</h2>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("firstName", { required: "is required", maxLength: 20 })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              <label
                htmlFor="firstName"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Họ lót
              </label>
              {errors.firstName && <p className="text-sm font-semibold text-rose-500">Bắt buộc!</p>}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("lastName", { required: "is required", maxLength: 20 })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              <label
                htmlFor="lastName"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Tên
              </label>
              {errors.lastName && <p className="text-sm font-semibold text-rose-500">Bắt buộc!</p>}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="birthday"
                id="birthday"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("birthday", { required: "is required", maxLength: 20 })}
                aria-invalid={errors.birthday ? "true" : "false"}
              />
              <label
                htmlFor="birthday"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ngày sinh
              </label>
              {errors.birthday && <p className="text-sm font-semibold text-rose-500">Bắt buộc!</p>}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="address"
                id="address"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("address", { required: "is required", maxLength: 20 })}
                aria-invalid={errors.address ? "true" : "false"}
              />
              <label
                htmlFor="address"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Địa chỉ
              </label>
              {errors.address && <p className="text-sm font-semibold text-rose-500">Bắt buộc!</p>}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="cccd"
                id="cccd"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("cccd", { required: "is required", maxLength: 12, minLength: 12 })}
                aria-invalid={errors.cccd ? "true" : "false"}
              />
              <label
                htmlFor="cccd"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Số CCCD
              </label>
              {errors.cccd && <p className="text-sm font-semibold text-rose-500">CCCD phải gồm 12 chữ số</p>}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="BHYT"
                id="BHYT"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("BHYT", { required: false })}
              />
              <label
                htmlFor="BHYT"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Số BHYT
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="chuandoan"
              id="chuandoan"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("chuandoan", { required: "is required" })}
              aria-invalid={errors.chuandoan ? "true" : "false"}
            />
            <label
              htmlFor="chuandoan"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Chuẩn đoán bệnh
            </label>
            {errors.chuandoan && <p className="text-sm font-semibold text-rose-500">Bắt buộc!</p>}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="ngaynhapvien"
              id="ngaynhapvien"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("ngaynhapvien", { required: "is required", maxLength: 20 })}
              aria-invalid={errors.ngaynhapvien ? "true" : "false"}
            />
            <label
              htmlFor="ngaynhapvien"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ngày vào viện
            </label>
            {errors.ngaynhapvien && <p className="text-sm font-semibold text-rose-500">Bắt buộc!</p>}
          </div>
          <div className="flex items-center justify-around">
            <button
              type="reset"
              onClick={() => reset()}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200  focus:ring-4 focus:outline-none focus:ring-red-100 "
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Reset
              </span>
            </button>
            <button
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200 "
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                Thêm bệnh nhân
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default FormInput;
