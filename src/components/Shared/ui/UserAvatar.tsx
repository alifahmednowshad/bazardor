type Props = {
  name: string;
  image?: string | null;
  size?: number;
};

export default function UserAvatar({ name, image, size = 36 }: Props) {
  const style = { width: size, height: size };

  return image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image}
      alt={name}
      style={style}
      referrerPolicy="no-referrer"
      className="shrink-0 rounded-xl object-cover"
    />
  ) : (
    <span
      style={style}
      className="flex shrink-0 items-center justify-center rounded-xl bg-green-600 font-semibold text-white"
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}
