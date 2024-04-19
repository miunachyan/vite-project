import { setCounter } from "@/store/modules/user";
import { useMount } from "ahooks";
import { useDispatch, useSelector } from "react-redux";

export default function Initial({ children }) {
  const dispatch = useDispatch();
  const { count } = useSelector((s: any) => s.user);
  useMount(async () => {
    // console.log(111);

    dispatch(setCounter(Date.now()));

    // await request.get("https://www.baidu.com");
  });

  return <>{children}</>;
}
