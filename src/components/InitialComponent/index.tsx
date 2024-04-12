import { setCounter } from "@/store/modules/user";
import { useMount } from "ahooks";
import { useDispatch, useSelector } from "react-redux";

export default function Initial({ children }) {
  const dispatch = useDispatch();
  const { count } = useSelector((s: any) => s.user);
  useMount(() => {
    console.log(111);

    dispatch(setCounter({ counter: Date.now() }));
  });

  return <>{children}</>;
}
