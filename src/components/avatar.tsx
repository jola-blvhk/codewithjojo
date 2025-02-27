import Image from "next/image";

const stringToColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return `hsl(${hash % 360}, 60%, 70%)`;
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const Avatar = ({ name, src }: { name: string; src?: string }) => {
  return src ? (
    <Image
      src={src}
      alt="User Avatar"
      width={40}
      height={40}
      className="w-12 h-12 md:w-14  md:h-14  rounded-full object-cover"
    />
  ) : (
    <div
      className="w-12 h-12 md:w-16  md:h-16 flex items-center justify-center rounded-full text-white font-bold"
      style={{ backgroundColor: stringToColor(name) }}
    >
      {getInitials(name)}
    </div>
  );
};

export default Avatar;
