import cls from "./switch.module.scss";

export default function Switch(props: any) {
  return (
    <label className={cls.switch}>
      <input type="checkbox" onChange={() => props.setTheme(!props.theme)} />
      <span className={cls.slider}></span>
    </label>
  );
}
